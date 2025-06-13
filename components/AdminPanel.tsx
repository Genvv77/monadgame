"use client";

import React, { useState } from "react";
import { getAccount } from "@wagmi/core";
import { createWalletClient, custom, keccak256, toBytes } from "viem";
import { publicClient, monadTestnet } from "@/lib/viem";
import { RIDDLE_GAME_ABI, RIDDLE_GAME_ADDRESS } from "@/constants/abi";
import { toast } from "react-hot-toast";

// Add prop type
type AdminPanelProps = {
  onRiddleUpdated: (newRiddle: string) => void;
};

const AdminPanel = ({ onRiddleUpdated }: AdminPanelProps) => {
  const [newRiddle, setNewRiddle] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleUpdate = async () => {
    if (!newRiddle || !newAnswer) {
      toast.error("Please provide both riddle and answer.");
      return;
    }

    try {
      const account = getAccount();
      if (!account || !account.address) {
        toast.error("Wallet not connected.");
        return;
      }

      // Hash the answer off-chain!
      const answerHash = keccak256(toBytes(newAnswer));

      const { request } = await publicClient.simulateContract({
        address: RIDDLE_GAME_ADDRESS,
        abi: RIDDLE_GAME_ABI,
        functionName: "updateRiddle",
        args: [newRiddle, answerHash], // <-- Only the hash goes on chain!
        account: account.address,
      });

      const wallet = createWalletClient({
        account: account.address,
        chain: monadTestnet,
        transport: custom((window as any).ethereum),
      });

      const hash = await wallet.writeContract(request);
      toast.loading("Updating riddle...");
      await publicClient.waitForTransactionReceipt({ hash });

      toast.dismiss();
      toast.success("🧩 New riddle updated successfully!");
      onRiddleUpdated(newRiddle);

      setNewRiddle("");
      setNewAnswer("");
    } catch (err: any) {
      toast.dismiss();
      toast.error(`❌ ${err.shortMessage || err.message}`);
    }
  };

  return (
    <div className="space-y-4 text-white">
      <input
        type="text"
        placeholder="New Riddle"
        value={newRiddle}
        onChange={(e) => setNewRiddle(e.target.value)}
        className="w-full px-4 py-2 rounded-md text-white bg-black/30 border border-white/20"
      />
      <input
        type="text"
        placeholder="Answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        className="w-full px-4 py-2 rounded-md text-white bg-black/30 border border-white/20"
      />
      <button
        onClick={handleUpdate}
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white w-full"
      >
        Update Riddle
      </button>
    </div>
  );
};

export default AdminPanel;


