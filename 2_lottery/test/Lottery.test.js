const assert = require("assert");
const ganache = require("ganache-cli");
// web3 is a constructor function
const Web3 = require("web3");
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider());
// import the interface and bytecode from the contract object
// the compiled code is in JSON format
// JSON.parse would need to be used on it to convert it to a JavaScript to interact with it using the web3 library
// bytecode = evm.bytecode.object
const { interface, bytecode } = require("../compile");
