const assert = require('assert')
const ganache = require('ganache-cli')
// web3 is a constructor function
const Web3 = require ('web3')
// instantiate web3 with a ganache provider
const web3 = new Web3(ganache.provider)



