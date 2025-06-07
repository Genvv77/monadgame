"use client";
import React from "react";
import { useContractRead } from "wagmi";
import { formatEther } from "viem";
import { RIDDLE_GAME_ABI, RIDDLE_GAME_ADDRESS } from "@/constants/abi";

const PotBalance = () => {
  const { data, isLoading, error } = useContractRead({
    address: RIDDLE_GAME_ADDRESS as `0x${string}`,
    abi: RIDDLE_GAME_ABI,
    functionName: "getBalance",
    watch: true,
  });

  if (isLoading) return <span className="text-white text-sm">Loading...</span>;
  if (error) return <span className="text-red-500 text-sm">Error</span>;

  const balance = data ? formatEther(data as bigint) : "0";

  return <span className="text-white font-bold">{balance} MON</span>;
};

export default PotBalance;




