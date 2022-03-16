const assert = require("assert");
const ganache = require("ganache-cli");
// web3 is a constructor function
const Web3 = require("web3");
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider());
// import the interface and bytecode from the contract object
// the compiled code is in JS Object format
// JSON.parse won't be needed as parsed it during the compilation process in compile.js
const { interface, bytecode } = require("../compile");

// console.log(bytecode);
// variables

let accounts;
let lotteryContract;
let txReceipt;

beforeEach(async () => {
  // get acounts
  accounts = await web3.eth.getAccounts();
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
    assert.ok(lotteryContract.options.address);
  });
  // test to see if the user who invoked the enter function was entered to the lottery
  it("enters a player to the lottery", async () => {
    // this contract requires minimum 0.11 ETH to participate
    await lotteryContract.methods.enter().send({
      from: accounts[1],
      gas: "1000000",
      value: web3.utils.toWei("0.2", "ether"),
    });
    // const player = await lotteryContract.methods.players(0).call();
    const players = await lotteryContract.methods.getPlayers().call();
    assert.equal(1, players.length);
    assert.equal(players[0], accounts[1]);
  });
});
