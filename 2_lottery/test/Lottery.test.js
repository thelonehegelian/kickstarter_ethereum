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
const { interface, bytecode } = require("../compile");

// console.log(bytecode);
// variables
console.log(interface);
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
    // test to see if the contract has an address, if it does then it was deployed successfully
    assert.ok(lotteryContract.options.address);
  });
  // test to see if the user who invoked the enter function was entered to the lottery
  it("enters a player to the lottery", async () => {
    // this contract requires minimum 0.11 ETH to participate
    // 'value' is the amount of Ether sent to the contract at function invocation
    await lotteryContract.methods.enter().send({
      from: accounts[1],
      gas: "1000000",
      value: web3.utils.toWei("0.2", "ether"),
    });
    // const player = await lotteryContract.methods.players(0).call();
    // this works too
    const players = await lotteryContract.methods.getPlayers().call();
    assert.equal(1, players.length);
    assert.equal(players[0], accounts[1]);
  });

  // TODO: test to see if multiple users can enter the lottery
  // it("it allows multiple users to enter lottery", async () => {});

  // test to confirm that ether is sent to enter lottery
  it("requires the minimum amount of Ether to enter", async () => {
    try {
      await lotteryContract.methods.enter().send({
        from: accounts[1],
        gas: "1000000",
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  // test: only manager can call the pickWinner function
  it("only manager can call pickWinner", async () => {
    try {
      await lotteryContract.methods.pickWinner().send({
        from: accounts[5],
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  // test: sends money to the winner and resets the players array
  it("sends money to the winner and resets the players array", async () => {
    // enter the lottery
    await lotteryContract.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei("2", "ether"),
    });
    // get balance of the player (account[1]) before winning the lottery
    const initialBalance = await web3.eth.getBalance(accounts[1]);
    //  pick winner, function is called bby the contract owner address
    // this function should send the winning amount (i.e. 1 Ether) back to accounts[1] because that is the only player in the contract
    await lotteryContract.methods.pickWinner().send({
      from: accounts[0],
      gas: "1000000",
    });
    // get balance of player (accounts[1]) after winning the lottery
    const finalBalance = await web3.eth.getBalance(accounts[1]);
    // difference between the balance before and after winning the lottery
    const difference = finalBalance - initialBalance;
    // accounting for the gas used
    assert(difference > web3.utils.toWei("1.8", "ether"));

    // players array should e empty now
    const playersArray = await lotteryContract.methods.getPlayers().call();
    // playersArray length should be 0
    assert.equal(playersArray.length, 0);
  });
});
