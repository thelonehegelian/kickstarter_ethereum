const path = require("path");
const solc = require("solc");
const fs = require("fs");

// get ath of the contract
let contractPath = path.resolve(__dirname, "contracts", "Lottery.sol");

// compilation using the latest version of solc
let input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: fs.readFileSync(contractPath, "utf8"),
    },
  },
  settings: {
    outputSelection: {
      // return everything
      "*": {
        "*": ["*"],
      },
    },
  },
};

console.log(`Compiling contract...`);

// save compiled code to output
let output = JSON.parse(solc.compile(JSON.stringify(input)));
// export abi and bytecode compiled contract

const interface = output.contracts["Lottery.sol"].Lottery.abi;
const bytecode = output.contracts["Lottery.sol"].Lottery.evm.bytecode.object;

module.exports = {
  interface,
  bytecode,
};

console.log(`Contract compiled successfully`);

// console.log(output.contracts['Lottery.sol'].Lottery.evm.bytecode.object)
