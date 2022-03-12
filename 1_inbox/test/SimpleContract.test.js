const assert = require("assert");
const ganache = require("ganache-cli");
// web3 is a constructor function
const Web3 = require("web3");
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(async () => {
  // gets a list of accounts from Ganache
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  // uses an account from the above list to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {});
});
