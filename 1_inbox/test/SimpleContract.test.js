// assert is part of node standard library
const ganache = require("ganache-cli");
const assert = require("assert");
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
let initialString = "Hello";
let txReceipt;

// this function is initiated at the start of each test
// it is an async function
beforeEach(async () => {
  // gets a list of accounts from Ganache
  accounts = await web3.eth.getAccounts();

  // uses an account from the above list to deploy the contract
  // create a transactin to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface)) // interface == ABI
    // deploy the bytecode with initial value of 'Hi There!' in the constructor function
    .deploy({
      data: bytecode,
      arguments: [initialString], // arguments for the constructor function
    })
    // send transaction from an address with maximum gas of 1000000 to deploy the contract
    .send({ from: accounts[0], gas: "1000000" });
});

// test to see if the contract is deployed successfully
describe("Inbox", () => {
  it("deploys a contract", () => {
    // check if contract address exists i.e. contract was deployed to an address
    assert.ok(inbox.options.address);
  });
  // test to see if there is a default message created using Constructor function
  it("has a default message", async () => {
    // 'message' exists as  a variable that is exists as a property on the deployed contract object
    // 'message()' property is a function to retreive the value of the 'message variable'
    const message = await inbox.methods.message().call(); // call() method calls the message() method
    // test if the message above matches the initial message created when the contract was created
    assert.equal(message, initialString);
  });

  it("can change the message", async () => {
    // changes the state of the contract by updating the initial message
    // this will have to be a transaction with a sender {from: ''}
    // the network will send back a transaction receipt
    // the receipt won't have the message value for us to test
    txReceipt = await inbox.methods.setMessage("Guten Morgen").send({
      from: accounts[0],
      gas: "1000000",
    });
    // get message value again (should be updated to Guten Morgen)
    const message = await inbox.methods.message().call();
    assert.equal(message, "Guten Morgen");
  });
});
