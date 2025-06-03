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

      // Simulate contract call
      const { request } = await publicClient.simulateContract({
        address: RIDDLE_GAME_ADDRESS,
        abi: RIDDLE_GAME_ABI,
        functionName: 'guess',
        args: [guess],
        value: parseEther('0.5'),
        account: account.address,
      });

      // Create wallet client
      const walletClient = createWalletClient({
        account: account.address,
        chain: monadTestnet,
        transport: custom((window as any).ethereum),
      });

      // Send transaction
      const hash = await walletClient.writeContract(request);
      toast.loading('Verifying your guess...');

      // Wait for confirmation
      await publicClient.waitForTransactionReceipt({ hash });

      // Check who won
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        className="w-full px-4 py-2 border rounded-md bg-white/10 text-white"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
      >
        Submit Guess (0.5 MON)
      </button>
    </form>
  );
};

export default GuessForm;

