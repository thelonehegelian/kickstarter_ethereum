const assert = require("assert");
const ganache = require("ganache-cli");
// web3 is a constructor function
const Web3 = require("web3");
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider());
// import the interface and bytecode from the contract object
// the compiled code is in JSON format
// JSON.parse would need to be used on it to convert it to a JavaScript to interact with it using the web3 library
const { interface, bytecode } = require("../compile");

// variables
let accounts;
let inbox;

// this function is initiated at the start of each test
// it is an async function
beforeEach(async () => {
  // gets a list of accounts from Ganache
  accounts = await web3.eth.getAccounts();

  // uses an account from the above list to deploy the contract
  // create a transactin to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface)) // interface == ABI
    // deploy the bytecode with initial value of 'Hi There!'
    .deploy({
      data: bytecode,
      arguments: ["Hi There!"],
    })
    // send transaction from an address with maximum gas of 1000000
    .send({ from: accounts[0], gas: "1000000" });
});

// test to see if the contract is deployed successfully
describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
