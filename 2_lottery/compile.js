const path = require('path');
const solc = require('solc');
const fs = require('fs');

/**
 * Returns and Object describing what to compile and what need to be returned.
 */

let input = {
        language: 'Solidity',
        sources: {
            'Lottery.sol': {
                content: fs.readFileSync(path.resolve(__dirname, 'contracts', 'Lottery.sol'), 'utf8')
            },
        },
        settings: {
            outputSelection: { // return everything
                '*': {
                    '*': ['*']
                }
            }
        }
    };

console.log(`Compiling contract...`)

// save compiled code to output
let output = JSON.parse(solc.compile(JSON.stringify(input)));
// export compiled contract
module.exports = output.contracts['Lottery.sol'].Lottery
// console.log(output.contracts['Lottery.sol'].Lottery)
