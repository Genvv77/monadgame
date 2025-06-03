"use client";

import React, { useEffect, useState } from "react";
import GuessForm from "./GuessForm";
import PotBalance from "./PotBalance";
import WinnerDisplay from "./WinnerDisplay";
import AdminPanel from "./AdminPanel";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { publicClient } from "@/lib/viem";
import { RIDDLE_GAME_ABI, RIDDLE_GAME_ADDRESS } from "@/constants/abi";

const RiddleGame = () => {
  const [currentRiddle, setCurrentRiddle] = useState("Loading riddle...");

  useEffect(() => {
    const fetchRiddle = async () => {
      try {
        const riddle = await publicClient.readContract({
          address: RIDDLE_GAME_ADDRESS,
          abi: RIDDLE_GAME_ABI,
          functionName: "getRiddle",
        });
        setCurrentRiddle(riddle as string);
      } catch (err) {
        console.error("Failed to fetch riddle:", err);
        setCurrentRiddle("Error loading riddle.");
      }
    };

    fetchRiddle();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-12 px-6 py-8 bg-white rounded shadow-md text-center">
      <div className="flex justify-end mb-4">
        <ConnectButton />
      </div>

      <h1 className="text-4xl font-bold text-indigo-700 mb-4">ORBIQUE</h1>

      <div className="text-lg font-medium text-gray-800 mb-6 whitespace-pre-line">
        {currentRiddle}
      </div>

      <PotBalance />
      <WinnerDisplay />
      <GuessForm />
      <AdminPanel onRiddleUpdated={setCurrentRiddle} />
    </div>
  );
};

export default RiddleGame;
