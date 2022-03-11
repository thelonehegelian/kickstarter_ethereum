const path = require('path');
const fs = require ('fs');
// solidity compiler
const solc = require('solc');

// get contract file so it can be read line by line not as JS code
const contractPath = path.resolve(__dirname, 'contracts', 'SimpleContract.sol');

// read solidity code
// arguments: file, encoding type
const source = fs.readFileSync(contractPath, 'utf8');

// compule contract
// arguments: source code, number of contracts to compile
console.log(solc.compile(source, 1));