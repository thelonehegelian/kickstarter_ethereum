require("dotenv").config();
const Web3 = require("web3");
// get ABI and bytecode of the compiled contract
const { interface, bytecode } = require("./compile");
// import wallet provider with which to access the accounts on MetaMask
const HDWalletProvider = require("@truffle/hdwallet-provider");
// Set up the provider with Rinkeby configurations
// this will give us access to 10 different ethereum accounts (unique addresses)
const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.NETWORK_ENDPOINT
);

// Initial message to be sent to the contract at deployment
let initialMessage = "Konichiwa!";

// web3 functions are asynchronous so they need to be executed with an await statement
// await statement can only be used within an async function hence...
// hmmm... apparently there are also synchronous versions: https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-methods
// also .then can also be used here to resolve promises
const deploy = async () => {
  // get all the accounts from the metamask mnemonic
  // one of the accounts would be used to send the transaction for contract deployment
  const accounts = await web3.eth.getAccounts();
  await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [initialMessage],
    })
    .send({ from: accounts[0], gas: "1000000" });
};

// call the deploy function
deploy();
