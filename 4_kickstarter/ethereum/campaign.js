import web3 from "./web3";
import Campaign from "./build/Campaign.json";

// deploy campaign contract instance using the abi and contract address

export default (contractAddress) => {
  return new web3.eth.Contract(Campaign.abi, contractAddress);
};
