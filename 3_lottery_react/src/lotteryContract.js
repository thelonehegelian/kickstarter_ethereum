import web3 from "./web3";

const contractAbi = [
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [[Object]],
    name: "players",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x494d9F42E99068332d64b28e4B200e4f4e";

export default new we3.eth.Contract(contractAbi, contractAddress);
