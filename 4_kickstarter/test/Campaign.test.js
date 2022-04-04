const fs = require("fs");
const assert = require("assert");
const ganache = require("ganache-cli");
// web3 is a constructor function
const Web3 = require("web3");
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider());
// import the interface and bytecode from the contract object
// the compiled code is in JS Object format
// JSON.parse won't be needed as parsed it during the compilation process in compile.js
const compiledFactoryContract = require("../ethereum/build/CampaignFactory.json");
const compiledCampaignContract = require("../ethereum/build/Campaign.json");


// variables
let accounts;
let factory;
let campaign;
let campaignAddress;

//console.log(Object.keys(compiledFactoryContract.evm.bytecode))

beforeEach(async () => {
    // get acounts
    accounts = await web3.eth.getAccounts();
    
    // deploy the contract factory contract
    factory = await new web3.eth.Contract(compiledFactoryContract.abi) //contract abi
      .deploy({
        data: compiledFactoryContract.evm.bytecode.object, // contract bytecode
      })
      .send({ from: accounts[0], gas: "5000000" }); // have to increase gas limit to avoid 'out of gas error'. The contract is probably too large for gasLimit = '1000000'

      // create campaign using the factory contract  
      // createCampaign function expects a value
      await factory.methods.createCampaign('100').send({
          from: accounts[0], gas: "1000000", // accounts[0] should also be the contract manager
      })

      // get the address of the deployed campaign contract above
     let addresses = await factory.methods.getDeployedContracts().call()
     campaignAddress = addresses[0]
      console.log(campaignAddress)
     // create the newly created campaign contract from the contract address
     campaign = await new web3.eth.Contract(compiledCampaignContract.abi, campaignAddress)
      console.log(campaign.methods)
      console.log(factory.methods)

  });

// test to validate contract deployment
describe("Contracts", () => {
    it("deploys contracts", () => {
      // test to see if the contract has an address, if it does then it was deployed successfully
      assert.ok(campaign.options.address);
      assert.ok(factory.options.address)
    });

    it("sets the creator of the campaign as manager"), async () => {      
      // get the address of the deployed contract. This is already done in on line 42 
      // call the manager function on the contract. The campaign contract is created on line 45 that can be used to call methods on the campaign contract
      const managerAddress = await campaign.methods.manager().call()
      // get the address of the person who deployed the campaign contract. See line 36, the contract was deployed using accounts[0]
      assert.equal(accounts[0], managerAddress)
    }
})