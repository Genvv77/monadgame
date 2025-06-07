"use client";

import React, { useState } from 'react';
import { getAccount } from '@wagmi/core';
import { parseEther } from 'viem';
import { publicClient, monadTestnet } from '@/lib/viem';
import { RIDDLE_GAME_ABI, RIDDLE_GAME_ADDRESS } from '@/constants/abi';
import { toast } from 'react-hot-toast';
import { createWalletClient, custom } from 'viem';

const GuessForm = () => {
  const [guess, setGuess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess) return;

    try {
      const account = getAccount();
      if (!account || !account.address) {
        toast.error("Wallet not connected.");
        return;
      }

      const { request } = await publicClient.simulateContract({
        address: RIDDLE_GAME_ADDRESS,
        abi: RIDDLE_GAME_ABI,
        functionName: 'guess',
        args: [guess],
        value: parseEther('0.5'),
        account: account.address,
      });

      const walletClient = createWalletClient({
        account: account.address,
        chain: monadTestnet,
        transport: custom((window as any).ethereum),
      });

      const hash = await walletClient.writeContract(request);
      toast.loading('Verifying your guess...');
      await publicClient.waitForTransactionReceipt({ hash });

      const winnerOnChain = await publicClient.readContract({
        address: RIDDLE_GAME_ADDRESS,
        abi: RIDDLE_GAME_ABI,
        functionName: 'winner',
      });

      toast.dismiss();

      if ((winnerOnChain as string).toLowerCase() === account.address.toLowerCase()) {
        toast.success("🎉 Congratulations! You guessed it right!");
      } else {
        toast.error("❌ Wrong answer, try again!");
      }
    } catch (error: any) {
      console.error(error);
      toast.dismiss();

      const msg = error?.shortMessage || error?.message || "";

      if (msg.includes("Riddle already solved")) {
        toast.error("❌ Riddle already solved.");
      } else if (msg.includes("insufficient funds")) {
        toast.error("❌ Not enough MON in your wallet.");
      } else {
        toast.error(`❌ ${msg}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <input
  type="text"
  value={guess}
  onChange={(e) => setGuess(e.target.value)}
  placeholder="Enter your guess"
  className="appearance-none text-center w-full px-4 py-3 text-white text-base rounded-md border border-white/30 bg-zinc-900/50 backdrop-blur-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
/>


      <button
        type="submit"
        className="animate-[pulseGlow_2.5s_infinite] shadow-lg w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg rounded-md transition"
      >
        Submit Guess (0.5 MON)
      </button>
    </form>
  );
};

export default GuessForm;

