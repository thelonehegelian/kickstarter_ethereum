const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");


/* 
1. delete build folder if there is any
2. create build folder
3. compile contracts to build folder

*/ 

// entry contract name 
let entryContractName = 'Campaign.sol' 

// create 'build' folder path
const buildFolderPath = path.resolve(__dirname, 'build')

// remove build folder and everything inside it
fs.removeSync(buildFolderPath)

// get path of the contract
let contractPath = path.resolve(__dirname, "contracts", entryContractName); // contractFolder, nameOfTheFile


// compilation using the latest version of solc
let input = {
  language: "Solidity",
  sources: {
    'Campaign.sol': {
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

// before contract compilation create 'build' path
fs.ensureDirSync(buildFolderPath)

// save compiled code to output
let output = JSON.parse(solc.compile(JSON.stringify(input)));
// all contracts
let contracts = output.contracts["Campaign.sol"]

// Go through all the contracts in the contracts object and write them to a json file
for (let contract in contracts) {
  // take the contract and save as a json file in the build folder
   fs.outputJsonSync(
     // parameters: path, filename +extension
     path.resolve(buildFolderPath, contract + ".json"), contracts[contract])

/*  this works too

  fs.writeFileSync(
  // parameters: path, filename +extension
  path.resolve(buildFolderPath, contract + ".json"), JSON.stringify(contracts[contract]))
*/

 
}