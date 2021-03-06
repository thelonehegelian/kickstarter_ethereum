const fs = require("fs");
// get environment variables from a .env file
require("dotenv").config();
// import web3 library
const Web3 = require("web3");
// get ABI and bytecode from the contract json files
const campaignFactory = require("./build/CampaignFactory.json");

// import wallet provider with which to access the accounts on MetaMask
const HDWalletProvider = require("@truffle/hdwallet-provider");

// Set up the provider with Rinkeby configurations
// this will give us access to 10 different ethereum accounts (unique addresses)
// both arguments are pulled from .env file
const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.NETWORK_ENDPOINT
);

// define web3
const web3 = new Web3(provider);

// web3 functions are asynchronous so they need to be executed with an await statement
// await statement can only be used within an async function hence...
// hmmm... apparently there are also synchronous versions: https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-methods
// also .then can be used here to resolve promises too
const deploy = async () => {
  // get all the accounts from the metamask mnemonic
  // one of the accounts would be used to send the transaction for contract deployment
  const accounts = await web3.eth.getAccounts();
  console.log(`Attempting to deploy contract from ${accounts[0]}`);
  // Is there a transaction receipt at deployment?
  const result = await new web3.eth.Contract(campaignFactory.abi)
    .deploy({
      data: campaignFactory.evm.bytecode.object,
    })
    .send({ gas: "2000000", from: accounts[0] }); // gas should be enough to store a large contract like this otherwise error: The contract code couldn't be stored, please check your gas limit

  // maybe export this to a text file
  console.log(
    `Contract deployed to the following address: ${result.options.address}`
  );

  // fs.writeFileSync("contractAddress.txt", str(result.options.address));
  /*
    Don't need this anymore
    
    let contract = JSON.stringify({
    abi: interface,
    address: result.options.address,
  });

  fs.writeFileSync("contract.json", contract);

  */

  // to prevent hanging developement
  provider.engine.stop();
};

// call the deploy function
deploy();
