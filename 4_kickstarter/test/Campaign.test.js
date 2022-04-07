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
const { request } = require("http");

// variables
let accounts;
let factory;
let campaign;
let campaignAddress;

//console.log(Object.keys(compiledFactoryContract.evm.bytecode))

beforeEach(async () => {
  // get accounts
  accounts = await web3.eth.getAccounts();

  // deploy the contract factory contract
  factory = await new web3.eth.Contract(compiledFactoryContract.abi) //contract abi
    .deploy({
      data: compiledFactoryContract.evm.bytecode.object, // contract bytecode
    })
    .send({ from: accounts[0], gas: "5000000" }); // have to increase gas limit to avoid 'out of gas error'. The contract is probably too large for gasLimit = '1000000'

  // create campaign using the factory contract
  // createCampaign function expects a value
  await factory.methods.createCampaign("100").send({
    from: accounts[1],
    gas: "1000000", // accounts[1] should also be the contract manager
  });

  // get the address of the deployed campaign contract above
  let addresses = await factory.methods.getDeployedContracts().call();
  campaignAddress = addresses[0];
  // console.log(campaignAddress)
  // create the newly created campaign contract from the contract address
  campaign = await new web3.eth.Contract(
    compiledCampaignContract.abi,
    campaignAddress
  );
});

// test to validate contract deployment
describe("Contracts", () => {
  it("deploys contracts", () => {
    // test to see if the contract has an address, if it does then it was deployed successfully
    assert.ok(campaign.options.address);
    assert.ok(factory.options.address);
  });

  // get the address of the person who deployed the campaign contract. See line 36, the contract was deployed using accounts[0]

  it("sets campaign creator as the manager of the contract", async () => {
    // get the address of the deployed contract. This is already done in on line 42
    // call the manager function on the contract. The campaign contract is created on line 45 that can be used to call methods on the campaign contract
    let managerAddress = await campaign.methods.manager().call();
    assert.equal(managerAddress, accounts[1]);
  });

  it("allows people to contribute to the campaign and adds them as approvers/contributors", async () => {
    // value sent to the campaign contract
    let valueContributed = "1000000";
    // this should update the approvers mapping
    let txnReceipt = await campaign.methods.contribute().send({
      from: accounts[2],
      gas: "1000000",
      value: valueContributed,
    });

    // this should return true
    let isContributor = await campaign.methods.approvers(accounts[2]).call();
    assert(isContributor);

    // This test is not necessary. It test if the money was added to the campaign
    // get campaign balance from the address to which contribution was sent to
    let campaignBalance = await web3.eth.getBalance(txnReceipt.to);
    // campaignBalance and valueContributed should be equal
    assert.equal(campaignBalance, valueContributed);
  });

  it("requires a minimum contribution", async () => {
    // minimum contribution should be the one set at contract deployment which in this instance is 100
    try {
      // the test should fail and assertion should be false, which will send the code to the catch block
      await campaign.methods.contribute().send({
        from: accounts[2],
        gas: "1000000",
        value: "10",
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("allows manager to create a request", async () => {
    // this will add the request to the request mapping in the contract
    await campaign.methods
      .createRequest("Buy cameras", "100", accounts[2])
      .send({
        from: accounts[1], // contract manager
        gas: "1000000",
      });
    // retreive request from the requests mapping
    let requests = await campaign.methods.requests(0).call();
    assert.equal(requests.description, "Buy cameras");
    assert.equal(requests.recipient, accounts[2]);
  });

  it("allows manager to finalize a request", async () => {
    // make a contribution to a campaign from accounts[5]
    await campaign.methods.contribute().send({
      from: accounts[5],
      gas: "1000000",
      value: web3.utils.toWei("10", "ether"),
    });

    // create a request from manager: accounts[1]
    await campaign.methods
      .createRequest("Buy cameras", "100", accounts[2])
      .send({
        from: accounts[1], // contract manager
        gas: "1000000",
      });

    // approve a request from a contributor: accounts[5]
    // this will add the request to the requests mapping at index 0
    await campaign.methods.approveRequest(0).send({
      from: accounts[5],
      gas: "1000000",
    });
    // finalize the request at index 0 from accounts[1]
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[1],
      gas: "1000000",
    });
    // get the request at index 0
    let requests = await campaign.methods.requests(0).call();
    assert(requests.complete); // should return true
  });
});
