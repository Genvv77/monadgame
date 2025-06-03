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

if (isLoading) return <p>Loading pot balance...</p>;
if (error) return <p className="text-red-500">Error loading pot balance</p>;

const balance = data ? formatEther(data as bigint) : "0";

return (
<div>
<p>{balance} MON</p>
</div>
);
};

export default PotBalance;



