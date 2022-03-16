const path = require("path");
const solc = require("solc");
const fs = require("fs");

// compilation using the latest version of solc
let input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: fs.readFileSync(
        path.resolve(__dirname, "contracts", "Lottery.sol"),
        "utf8"
      ),
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
const bytecode = output.contracts["Lottery.sol"].Lottery.evm.bytecode;

module.exports = {
  interface,
  bytecode,
};

// console.log(output.contracts['Lottery.sol'].Lottery.evm.bytecode.object)
