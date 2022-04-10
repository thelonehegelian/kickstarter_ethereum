import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

// deploy contract instance using the abi and contract address
const campaignFactoryInstance = new web3.eth.Contract(JSON.parse(CampaignFactory.abi), "0x06410DAFB24e77d3Dd82947d59c0b70f2018c1af")


export default campaignFactoryInstance