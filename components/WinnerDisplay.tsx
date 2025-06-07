"use client";
import { useContractRead } from "wagmi";
import { RIDDLE_GAME_ABI, RIDDLE_GAME_ADDRESS } from "@/constants/abi";

export default function WinnerDisplay() {
  const { data, isLoading, error } = useContractRead({
    address: RIDDLE_GAME_ADDRESS,
    abi: RIDDLE_GAME_ABI,
    functionName: "winner",
    watch: true,
  });

  if (isLoading) return <p className="text-sm text-white">Loading winner...</p>;

  if (error) {
    console.error("Error loading winner:", error);
    return (
      <p className="text-sm text-red-500">
        No winner yet or unable to read winner.
      </p>
    );
  }

  const shortenAddress = (address: string) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="text-right text-sm">
      <span className="text-indigo-400">{data && data !== "0x0000000000000000000000000000000000000000"
        ? shortenAddress(data as string)
        : "No winner yet."}</span>
    </div>
  );
}



