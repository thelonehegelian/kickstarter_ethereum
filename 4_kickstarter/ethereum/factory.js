import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// deploy contract instance using the abi and contract address
const campaignFactoryInstance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xFf36A8b4cC424e267d3Ed1807d5e82294f3ad394"
);

export default campaignFactoryInstance;
