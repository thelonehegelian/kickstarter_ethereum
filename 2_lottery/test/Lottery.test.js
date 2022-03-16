const assert = require("assert");
const ganache = require("ganache-cli");
// web3 is a constructor function
const Web3 = require("web3");
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider());
// import the interface and bytecode from the contract object
// the compiled code is in JS Object format
// JSON.parse wont be needed as parsed it during the compilation process in compile.js
const { interface, bytecode } = require("../compile");

// console.log(bytecode);
// variables

let accounts;
let lotteryContract;
let txReceipt;

beforeEach(async () => {
  // get acounts
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  // deploy the contract
  lotteryContract = await new web3.eth.Contract(interface)
    .deploy({
      data: bytecode,
    })
    .send({ from: accounts[0], gas: "1000000" });
});
// test to validate contract deployment
describe("Lottery", () => {
  it("deploys a contract", () => {
    // check to see if the contract has an address, if it does then it was deployed successfully
    console.log(lotteryContract.options.address);
  });
});
