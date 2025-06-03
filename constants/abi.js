export const RIDDLE_GAME_ABI = [
  {
    "inputs": [],
    "name": "solved",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
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
  "inputs": [
    { "internalType": "string", "name": "_riddle", "type": "string" },
    { "internalType": "string", "name": "_answer", "type": "string" }
  ],
  "name": "updateRiddle",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
  
  {
    inputs: [],
    name: "riddle",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "answer",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_guess", type: "string" }],
    name: "guess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "winner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];


export const RIDDLE_GAME_ADDRESS = "0x0b732123ab042f8505dd8a05daf62834476a1d42";
