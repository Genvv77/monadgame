"use client";

import React, { useEffect, useState } from "react";
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
import NavMenu from "@/components/NavMenu";
import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

const YOUR_WALLET = "0xc1B78548B0Fc3D7bC94AbEe1AfDbE67899aeB995";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { address } = useAccount();
  const [currentRiddle, setCurrentRiddle] = useState("Loading...");
  const [isHydrated, setIsHydrated] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [loadingText, setLoadingText] = useState("Loading");
useEffect(() => {
  let dots = 1;
  setLoadingText("Loading.");
  const interval = setInterval(() => {
    dots = (dots + 1) % 4;
    setLoadingText("Loading" + ".".repeat(dots));
  }, 500);

  const timer = setTimeout(() => {
    setIsHydrated(true);
  }, 1500);

  return () => {
    clearInterval(interval);
    clearTimeout(timer);
  };
}, []);



  const { data: riddleData, error: riddleError } = useContractRead({
    address: RIDDLE_GAME_ADDRESS,
    abi: RIDDLE_GAME_ABI,
    functionName: "riddle",
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

  const startGame = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGameStarted(true);
    }, 1000); // Wait for animation, then start game
  };

  useEffect(() => {
    if (gameStarted) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event("audio-autoplay-start"));
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [gameStarted]);

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

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/thunderstorm.mp4" type="video/mp4" />
      </video>
      <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-[-1]" />

      {!gameStarted ? (
        <div className="flex flex-col items-center justify-center h-screen text-white text-center space-y-6 bg-black/60">
          <h1 className="text-5xl font-extrabold tracking-widest">
            ORB<span className="text-purple-400">IQUE</span>
          </h1>
          <p className="text-lg sm:text-xl tracking-normal font-sans text-white/90">
            Are you good with riddles? Let’s find out.
          </p>
          <button
  onClick={() => {
    setIsLoading(true);
    setTimeout(() => {
      setGameStarted(true);
      window.dispatchEvent(new Event("audio-autoplay-start"));
      setIsLoading(false);
    }, 500); // Short delay for smoother transition
  }}
  disabled={!isHydrated || isLoading}
  className={`px-6 py-3 text-white rounded-full text-lg tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
    isHydrated && !isLoading
      ? "bg-purple-600 hover:bg-purple-800 cursor-pointer"
      : "bg-purple-900 cursor-not-allowed opacity-60"
  }`}
>
  {isLoading ? (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
    />
  ) : isHydrated ? (
    "ENTER"
  ) : (
    loadingText
  )}
</button>


        </div>
      ) : (
        <main className="w-full relative overflow-x-hidden font-sans">
          <div className="absolute top-4 left-0 right-0 z-50 w-full px-4 flex items-center justify-between sm:top-9">
            <h1 className="text-3xl sm:text-6xl font-extrabold text-white font-serif drop-shadow-lg text-left sm:text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:w-auto">
              ORBIQUE
            </h1>
            <div className="sm:mt-0 sm:ml-auto flex items-center space-x-2 relative">
              <ConnectButton.Custom>
                {({ account, openAccountModal, openConnectModal, authenticationStatus, mounted }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    (!authenticationStatus || authenticationStatus === "authenticated");

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      <button
                        onClick={connected ? openAccountModal : openConnectModal}
                        className="bg-purple-600 hover:bg-purple-800 text-white font-medium rounded-lg px-3.5 py-2.5 text-sm flex items-center justify-center"
                      >
                        <Wallet className="sm:hidden w-5 h-5" />
                        <span className="hidden sm:inline">
                          {connected ? account.displayName : "Connect Wallet"}
                        </span>
                      </button>
                    </div>
                  );
                }}
              </ConnectButton.Custom>
              <NavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>

          <div className="pt-32 sm:pt-44 pb-0 flex flex-col items-center justify-start px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="glow-border w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 text-white mb-6 shadow-xl transition-transform duration-300"
            >
              <div className="flex justify-between text-sm sm:text-base font-medium">
                <div className="flex items-center gap-2">
                  
                  <span>Pot:</span>
                  <PotBalance />
                </div>
                <div className="flex flex-col items-end leading-tight">
                  <span>Last Winner:</span>
                  <WinnerDisplay />
                </div>
              </div>
            </motion.div>

            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-2xl border border-white/20 text-white shadow-2xl">
              <div className="text-center text-2xl sm:text-3xl font-semibold mb-8 whitespace-pre-line">
                {currentRiddle}
              </div>
              <div className="mb-6">
                <GuessForm />
              </div>

              {address?.toLowerCase() === YOUR_WALLET.toLowerCase() && (
                <div className="mt-6 border-t border-white/20 pt-4">
                  <h3 className="text-lg font-bold text-purple-300 mb-2">Admin Panel</h3>
                  <AdminPanel onRiddleUpdated={setCurrentRiddle} />
                </div>
              )}
            </div>

            <div className="w-full flex justify-center mt-10 z-40">
              <div className="w-full max-w-[310px]">
                <AudioControl />
              </div>
            </div>

            <footer className="sm:hidden w-full mt-8 mb-10 flex flex-col items-center text-white opacity-70 text-sm z-10 relative">
  <p className="mb-1">Built by Vendetta</p>
  <a
    href="https://x.com/GMbalenciaga"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-100 transition-opacity duration-200"
  >
    <img src="/x-logo.png" alt="Twitter Logo" className="w-5 h-5 mt-1" />
  </a>
</footer>



          </div>

          <footer className="hidden sm:flex fixed bottom-4 left-1/2 -translate-x-1/2 flex-col items-center text-white opacity-60 z-40">
            <p className="text-sm mb-1">Built by Vendetta</p>
            <a
              href="https://X.com/GMbalenciaga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/x-logo.png" alt="Twitter Logo" className="w-5 h-5 mt-1" />
            </a>
          </footer>

          {isMenuOpen && (
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10 pointer-events-none" />
          )}
        </main>
      )}
    </>
  );
}














