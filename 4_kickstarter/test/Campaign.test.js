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
const compiledCampaignContract = require("../ethereum/build/CampaignFactory.json");

{}

console.log(Object.keys(contract))