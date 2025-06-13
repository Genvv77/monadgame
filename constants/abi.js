export const RIDDLE_GAME_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_riddle", "type": "string" },
      { "internalType": "bytes32", "name": "_answerHash", "type": "bytes32" }
    ],
    "name": "updateRiddle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "riddle",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "_guess", "type": "string" }],
    "name": "guess",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "winner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
];

export const RIDDLE_GAME_ADDRESS = "0x4b27fd3efef3e203af9f0f693f4cccc3ff4088ff";
