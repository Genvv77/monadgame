"use client";

import React, { useEffect, useRef, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import PotBalance from "@/components/PotBalance";
import WinnerDisplay from "@/components/WinnerDisplay";
import GuessForm from "@/components/GuessForm";
import AdminPanel from "@/components/AdminPanel";
import AudioControl from "@/components/AudioPlayer";
import { useAccount, useContractRead } from "wagmi";
import toast from "react-hot-toast";
import { RIDDLE_GAME_ABI, RIDDLE_GAME_ADDRESS } from "@/constants/abi";
import Head from "next/head";

const YOUR_WALLET = "0xc1B78548B0Fc3D7bC94AbEe1AfDbE67899aeB995";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { address } = useAccount();
  const [currentRiddle, setCurrentRiddle] = useState("Loading...");

  // 🔄 Fetch riddle from contract (watch live)
  const { data: riddleData, error: riddleError } = useContractRead({
    address: RIDDLE_GAME_ADDRESS,
    abi: RIDDLE_GAME_ABI,
    functionName: "riddle", // ✅ lowercase is correct
    watch: true,
  });

  useEffect(() => {
    if (riddleError) {
      console.error("Failed to fetch riddle:", riddleError);
      setCurrentRiddle("Error loading riddle.");
    } else if (riddleData) {
      setCurrentRiddle(riddleData as string);
    }
  }, [riddleData, riddleError]);

  // 🔊 Start music on Enter
  const startGame = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio.play().then(() => {
        let volume = 0;
        const fade = setInterval(() => {
          volume += 0.05;
          audio.volume = Math.min(volume, 1);
          if (volume >= 1) clearInterval(fade);
        }, 200);
      }).catch(console.error);
    }
    setGameStarted(true);
  };

  // 🚨 Detect DevTools for non-admins
  useEffect(() => {
    if (!address || address.toLowerCase() === YOUR_WALLET.toLowerCase()) return;
    const detector = setInterval(() => {
      const devtoolsOpen =
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160;
      if (devtoolsOpen) {
        toast.error("🚨 DevTools detected. Admin panel is restricted.");
        clearInterval(detector);
      }
    }, 1000);
    return () => clearInterval(detector);
  }, [address]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Orbique</title>
      </Head>

      <main className="min-h-screen w-full relative overflow-hidden font-sans">
        {/* 🎬 Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/thunderstorm.mp4" type="video/mp4" />
        </video>

        {/* 🎵 Background Music */}
        <audio ref={audioRef} src="/Nightcall.mp3" loop preload="auto" />

        {/* 🎮 Splash Screen */}
        {!gameStarted ? (
          <div className="flex flex-col items-center justify-center h-screen text-white text-center space-y-6 bg-black/60">
            <h1 className="text-5xl font-extrabold tracking-widest">
              ORB<span className="text-purple-400">IQUE</span>
            </h1>
            <p className="text-xl">Are you good with riddles? Let’s find out.</p>
            <button
              onClick={startGame}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-full text-lg shadow-md"
            >
              Enter
            </button>
          </div>
        ) : (
          <>
            {/* 🌩️ Title */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30">
              <h1 className="text-6xl font-extrabold text-white tracking-wider font-serif drop-shadow-lg">
                ORBIQUE
              </h1>
            </div>

            {/* 💡 Main Game Section */}
            <div className="flex items-center justify-center h-screen px-4">
              <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg p-10 rounded-2xl border border-white/20 text-white shadow-2xl">
                {/* 💰 Pot & 🎉 Winner */}
                <div className="flex justify-between items-center text-lg mb-6 font-medium">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">
                      💰 <span className="font-semibold">Current Pot:</span>
                    </span>
                    <PotBalance />
                  </div>
                  <WinnerDisplay />
                </div>

                {/* ❓ Riddle */}
                <div className="text-center text-2xl font-bold mb-8 whitespace-pre-line">
                  {currentRiddle}
                </div>

                {/* 🔤 Guess Form */}
                <div className="mb-6">
                  <GuessForm />
                </div>

                {/* 🔧 Admin Panel */}
                {address?.toLowerCase() === YOUR_WALLET.toLowerCase() && (
                  <div className="mt-6 border-t border-white/20 pt-4">
                    <h3 className="text-lg font-bold text-purple-300 mb-2">Admin Panel</h3>
                    <AdminPanel onRiddleUpdated={setCurrentRiddle} />
                  </div>
                )}
              </div>
            </div>

            {/* 🔊 Audio Player */}
            <AudioControl audioRef={audioRef} />

            {/* 👛 Wallet Connect */}
            <div className="absolute top-6 right-6 z-30">
              <ConnectButton />
            </div>
          </>
        )}
      </main>
    </>
  );
}
