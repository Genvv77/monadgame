const { ethers } = require("hardhat");

async function main() {
  const RiddleGame = await ethers.getContractFactory("RiddleGame");
  const riddleGame = await RiddleGame.deploy();

  await riddleGame.waitForDeployment(); // ✅ Wait until deployment is complete

  console.log("RiddleGame deployed to:", await riddleGame.getAddress()); // ✅ Fetch address after deployment
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
