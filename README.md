# Solidity: a quick introduction

## Solidity Types:

- string
- bool
- int
- uint (256)
- fixed/ufixed
- address: these are not simple string values but have methods attached to it, just like there are methods attached to arrays in JavaScript
  - address.transfer
  - address.

##### Reference Types:

- arrays: fixed and dynamic
  - arrays have methods attached to them, e.g. push, length
  - note: the access function created for us to access arrays does not return the whole array but requires an index to return the value
  - there is a limitation on nested arrays due to the Web3 bridge between JavaScript and Solidity
  - strings a dynamic arrays, which means the above limitation would apply to array of strings e.g. ['hello', 'how', 'are', 'ya', '!']. This won't work
- mapping
- struct

##### Global Variables/Functions

- **msg** variable has the following methods attached to it:

  - data: data from the call or transaction that invoked the function (e.g. `send.transaction({data: 'Hello', bytecode: bytecode})`)
  - gas: amount of gas the current function has available
  - sender: address of the account that invoked the function. In case of contract creation the sender would be the person creating the contract
  - value: amount of ether (in wei) sent to the contract when the function was invoked (can be compared to the required value to accept or reject the function call with _require()_)

- **require**
- **sha3()**
- **keccak256()**
- **block**
  - block.difficulty
  - block.timestamp
- **now**: deprecated now, use block.timestamp
- memory
- storage
- calldata
- **this**: refers to the current contract
  - **address(this).balance**: references all the ETH available in the contract

##### Visibility of Variables

- public
  - when a variable is set to public a function is generated to provide access to the public variable.
- private

##### Constructor function

- Constructor function is deprecated in the new version of solidity. In older version it had to be something like this:
  ```javascript
  contract Lotto {
    // constructor function
    function Lotto() public {}
  }
  ```
- _What does a constructor function do?_

##### Keywords

- **view**
- **returns**
- **external**
- **private**
- **public**
- **contract**
- **msg**
- **_payable_**: used with a function that requires specific amount of Ether to be sent at function invocation (this is separate from the gas fee)
- **require**:
- **ether**
- **new**
- **modifier**

#### The Randomness Problem

- Why is simulating randomness a problem with Solidity and Ethereum?

_From Master Ethereum:_

_"All transactions on the Ethereum blockchain are deterministic state transition operations. This means that every transaction modifies the global state of the Ethereum ecosystem in a calculable way, with no uncertainty. This has the fundamental implication that there is no source of entropy or randomness in Ethereum. Achieving decentralized entropy (randomness) is a well-known problem for which many solutions have been proposed, including RANDAO, or using a chain of hashes, as described by Vitalik Buterin in the blog post “Validator Ordering and Randomness in PoS”."_

- pseudo random generator

  - current block difficulty + block time + available addresses -> keccak256 Algorithm = Really big number

  ```javascript
  uint256(
    keccak256(abi.encodePacked(block.difficulty, block.timestamp, players))
  );
  ```

  [Hashing with Keccak256](https://solidity-by-example.org/hashing)

-

# Web3 - A quick introduction

- web.eth.Contract()
- web3.eth.getAccounts()
- .deploy() : deploys a contract
- .send() : sends a transaction (function calls that change the state of the blockchain)
- .call() : calls a function that does not change the state of the blockchain
- `web3.utils.toWei()`

---

# 0_boilerPlate

- set up basic code for an ethereum/solidity development and testing environment
- this boilerplate can be used for other projects too

### Folder and File Structure

- contracts
  - Inbox.sol --> main contract file
- test
  - Inbox.test.js --> for writing tests for contract functions
- package.json
- compile.js --> script to compile the solidity code
- deploy.js --> script to deploy bytecode to the evm

Install required libraries

```javascript
npm install --save ganache-cli mocha web3 solc
```

### Contract Deployment

compile the contract:
`node ./compile.js`

testing the contract
`npm run test`

        solidity code

      Solidity Compiler

    ABI -- Contract ByteCode

- node libraries used

  - fs
  - path
  - assert --> for testing

- Other libraries used

  - mocha --> a general testing framework
    Main mocha functions: it :: describe :: beforeEach
  - ganache
  - web3
    -- _What is Web3 and what is it used for?_
    It is a JavaScript library that is used to deploy smart contract to blockchains like Ethereum. Web3 can also be used to interact with already deployed smart contracts on Ethereum or other EVM compatible blockchain [?]
    The requirements for deploying a contract and interacting with an already deployed smart contract are different. In both cases though an ABI is needed.
    -- _What is a web3 Provider and why is it needed?_
    -- What is web3.eth?
    -- Almost all web3 functions are asynchronous and therefore return a promise

- Structure of a compiled contract:

  ```javascript
  {
  contracts: {
  ':Inbox': {
  assembly: [Object],
  bytecode:bytecode,
  functionHashes: [Object],
  gasEstimates: [Object],
  interface: '',
  metadata: ''
  opcodes: '',
  runtimeBytecode: '',
  srcmap: '',
  srcmapRuntime: ''
  }
  },
  sourceList: [ '' ],
  sources: { '': { AST: [Object] } }

  }

  ```

- The interface property in the above object is the ABI of the contract

- What is the ABI?

  - ABI is a standard format like json to interact with ethereum contracts [rephrase]

# 1_Inbox

- What does an Ethereum transaction look like?
- What is the difference between calling a function and sending a transaction?
- What happens when we send a transaction to a function or any other transaction?

  - we get a transaction receipt (which also has a transaction hash) back from the network

- What does a transaction receipt look like?
  -- Is there a transaction receipt at deployment?

```javascript
{
  transactionHash: '0xbf4f1f2a19e63469ea87e3be3e06caf398d23b43dcf70086f7414c0f025767d3',
  transactionIndex: 0,
  blockHash: '0x7ed09fe4071c8630d5a692c1871f9a58afd7d06ab3f1a94fb467597e65f09336',
  blockNumber: 4,
  from: '0x1c6411408506686cd74c6e4093dfd404e87102dd',
  to: '0xc1bc7be45890bd5910731752442b89e265d1881e',
  gasUsed: 28876,
  cumulativeGasUsed: 28876,
  contractAddress: null,
  status: true,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  events: {}
}
```

- .send, .transfer, .deploy etc are Web3 methods (cf. https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html)

### Deploying a contract to a test network

- What is Infura? (https://decrypt.co/resources/what-is-infura)

  "It is a set of tools for anyone to create an application that connects to the Ethereum blockchain. It interacts with the Ethereum blockchain and runs nodes on behalf of its users."
  _Official_
  "The Ethereum Application Program Interface (API) on Infura gives users access to methods for sending transactions to the Ethereum blockchain. This is done via the JavaScript Object Notation Remote Procedure Call (JSON-RPC) API, allowing for the reading and writing data to the network, and executing smart contracts. These API calls will work for Ethereum Mainnet; Ethereum testnets, including Rinkeby, Kovan, Görli, and Ropsten; and JSON-RPC compatible L2’s such as Polygon, Optimism, and Arbitrum."
  "These API calls apply to the execution engine (also known as the Execution layer) post-merge with the Ethereum beacon chain."

**My understanding of Infura... so far**
Each Ethereum node is a client (a software application). To interact with the Ethereum blockchain one needs access to an Ethereum node (client). Most of the Ethereum nodes are run privately by companies or private individuals etc, which means one would have to download an Ethereum node to work with the blockchain (A full node is not necessary even if a node is required).
Infura is a cloud-based Ethereum node. It is accessible to users for development and deployment of contracts. Such users may not have the resources to run a full node etc...

To sum: Infura is a cloud-based Ethereum client that gives users access to the Ethereum blockchain (mainnet and testnets) via an API (JavaScript Object Notation Remote Procedure Call (JSON-RPC) API).

### What is MetaMask?

- What is MetaMask?
- How many accounts does MetaMask Mnemonic gives access to?

### Interacting with deployed contracts via Remix

- Injected Web3 Provider
  From StackOverflow:
  - You must compile the same exact code that the contract you are trying to load.
  - Once the compile succeeds, you have to be on the same network that the contract is, by setting your MetaMask account properly.
  - The last thing to do is paste the contract address on the option: Load from address: and you'll get it on remix to interact with it.

---

# 2_Lottery

**Description**

The creator of the smart contract is also the manager of the lottery.

Only Manager is allowed to pick the winner

### Functions

### Variables

### Requirements

Users need to send a transaction worth 0.1 ETH (100000000000000000 Wei) to enter the lottery

---

**Important bits**

- `web3.utils.toWei('0.02', 'ether')`
- try and catch assertions
- `web3.eth.getBalance()`

## **Working with latest version of Solc**

---

# 3_Lottery_Front_End

Note: In the Lottery contract there should be a variable for updating the winner of the lottery, so it can be displayed on the Front End

### Ethereum Web Application Architecture

- Browser focused code
- Assume user has MetaMask installed
- If MetaMask is installed in the browser, it will inject web3 library into the browser. Our Web3 version (on the react app) is used to override the default (older) version of MetaMask

_The component below allows us to connect to MetaMask_

```javascript
import Web3 from "web3";

window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);

export default web3;
```

At reload MetaMask will open asking for permission to connect

Console logs MetaMask account currently available (only the connected account)

`web3.eth.getAccounts().then(console.log);`

- working with deployed contracts using Web3

  `new web3.eth.Contract(contractAbi, addressOfTheContract)`

**Sending transactions**

- .send() method requires a 'from' account
  - value field requires amount in Wei

* What is the difference between declaring functions within the component's render() and declaring function above it (outside of it)? [copy this question to the intro-react readme]

---

### FAQ

1. What happens when a contract is deployed using the Web3 library?
   A JavaScript representation of the contract of the contract is created. This can be used to interact with the smart contract deployed on the blockchain.

   - `methods` property has all the function from the contract
   - `options.address` contains the address of the deployed contract

     Example of the deployed contract:

   ```javascript
   Inbox
   Contract {
     setProvider: [Function (anonymous)],
     currentProvider: [Getter/Setter],
     _requestManager: RequestManager {
       provider: l {
         _events: [Object: null prototype],
         _eventsCount: 5,
         _maxListeners: 100,
         options: [Object],
         engine: [u],
         manager: [p],
         sendAsync: [Function: bound ],
         send: [Function: bound ],
         close: [Function: bound ],
         _queueRequest: [Function: bound ],
         _processRequestQueue: [Function: bound ],
         _requestQueue: [],
         _requestInProgress: false,
         [Symbol(kCapture)]: false
       },
       providers: {
         WebsocketProvider: [Function: WebsocketProvider],
         HttpProvider: [Function: HttpProvider],
         IpcProvider: [Function: IpcProvider]
       },
       subscriptions: Map(0) {}
     },
     givenProvider: null,
     providers: {
       WebsocketProvider: [Function: WebsocketProvider],
       HttpProvider: [Function: HttpProvider],
       IpcProvider: [Function: IpcProvider]
     },
     _provider: l {
       _events: [Object: null prototype] {
         data: [Function: data],
         connect: [Function: connect],
         error: [Function: error],
         close: [Function: disconnect],
         disconnect: [Function: disconnect]
       },
       _eventsCount: 5,
       _maxListeners: 100,
       options: {
         _chainId: 1,
         _chainIdRpc: 1337,
         vmErrorsOnRPCResponse: true,
         verbose: false,
         asyncRequestProcessing: false,
         logger: [Object],
         seed: 're4qlEXlLS',
         mnemonic: 'index episode fit peace enjoy lens heart pioneer long loud tray power',
         network_id: 1647127222679,
         forkCacheSize: 1073741824,
         total_accounts: 10,
         gasPrice: '0x77359400',
         default_balance_ether: 100,
         unlocked_accounts: [],
         hdPath: "m/44'/60'/0'/0/",
         gasLimit: '0x6691b7',
         defaultTransactionGasLimit: '0x15f90',
         time: null,
         debug: false,
         hardfork: 'muirGlacier',
         allowUnlimitedContractSize: false
       },
       engine: u {
         _events: [Object: null prototype],
         _eventsCount: 3,
         _maxListeners: 100,
         _blockTracker: [i],
         _ready: [i],
         currentBlock: [Object],
         _providers: [Array],
         manager: [p],
         _running: true,
         [Symbol(kCapture)]: false
       },
       manager: p {
         state: [S],
         options: [Object],
         initialized: true,
         initialization_error: null,
         post_initialization_callbacks: [],
         engine: [u],
         currentBlock: [Object]
       },
       sendAsync: [Function: bound ],
       send: [Function: bound ],
       close: [Function: bound ],
       _queueRequest: [Function: bound ],
       _processRequestQueue: [Function: bound ],
       _requestQueue: [],
       _requestInProgress: false,
       [Symbol(kCapture)]: false
     },
     setRequestManager: [Function (anonymous)],
     BatchRequest: [Function: bound Batch],
     extend: [Function: ex] {
       formatters: {
         inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
         inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
         inputCallFormatter: [Function: inputCallFormatter],
         inputTransactionFormatter: [Function: inputTransactionFormatter],
         inputAddressFormatter: [Function: inputAddressFormatter],
         inputPostFormatter: [Function: inputPostFormatter],
         inputLogFormatter: [Function: inputLogFormatter],
         inputSignFormatter: [Function: inputSignFormatter],
         inputStorageKeysFormatter: [Function: inputStorageKeysFormatter],
         outputProofFormatter: [Function: outputProofFormatter],
         outputBigNumberFormatter: [Function: outputBigNumberFormatter],
         outputTransactionFormatter: [Function: outputTransactionFormatter],
         outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
         outputBlockFormatter: [Function: outputBlockFormatter],
         outputLogFormatter: [Function: outputLogFormatter],
         outputPostFormatter: [Function: outputPostFormatter],
         outputSyncingFormatter: [Function: outputSyncingFormatter]
       },
       utils: {
         _fireError: [Function: _fireError],
         _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
         _flattenTypes: [Function: _flattenTypes],
         randomHex: [Function: randomHex],
         BN: [Function],
         isBN: [Function: isBN],
         isBigNumber: [Function: isBigNumber],
         isHex: [Function: isHex],
         isHexStrict: [Function: isHexStrict],
         sha3: [Function],
         sha3Raw: [Function: sha3Raw],
         keccak256: [Function],
         soliditySha3: [Function: soliditySha3],
         soliditySha3Raw: [Function: soliditySha3Raw],
         encodePacked: [Function: encodePacked],
         isAddress: [Function: isAddress],
         checkAddressChecksum: [Function: checkAddressChecksum],
         toChecksumAddress: [Function: toChecksumAddress],
         toHex: [Function: toHex],
         toBN: [Function: toBN],
         bytesToHex: [Function: bytesToHex],
         hexToBytes: [Function: hexToBytes],
         hexToNumberString: [Function: hexToNumberString],
         hexToNumber: [Function: hexToNumber],
         toDecimal: [Function: hexToNumber],
         numberToHex: [Function: numberToHex],
         fromDecimal: [Function: numberToHex],
         hexToUtf8: [Function: hexToUtf8],
         hexToString: [Function: hexToUtf8],
         toUtf8: [Function: hexToUtf8],
         stripHexPrefix: [Function: stripHexPrefix],
         utf8ToHex: [Function: utf8ToHex],
         stringToHex: [Function: utf8ToHex],
         fromUtf8: [Function: utf8ToHex],
         hexToAscii: [Function: hexToAscii],
         toAscii: [Function: hexToAscii],
         asciiToHex: [Function: asciiToHex],
         fromAscii: [Function: asciiToHex],
         unitMap: [Object],
         toWei: [Function: toWei],
         fromWei: [Function: fromWei],
         padLeft: [Function: leftPad],
         leftPad: [Function: leftPad],
         padRight: [Function: rightPad],
         rightPad: [Function: rightPad],
         toTwosComplement: [Function: toTwosComplement],
         isBloom: [Function: isBloom],
         isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
         isContractAddressInBloom: [Function: isContractAddressInBloom],
         isTopic: [Function: isTopic],
         isTopicInBloom: [Function: isTopicInBloom],
         isInBloom: [Function: isInBloom],
         compareBlockNumbers: [Function: compareBlockNumbers],
         toNumber: [Function: toNumber]
       },
       Method: [Function: Method]
     },
     clearSubscriptions: [Function (anonymous)],
     options: {
       address: [Getter/Setter],
       jsonInterface: [Getter/Setter],
       data: undefined,
       from: undefined,
       gasPrice: undefined,
       gas: undefined
     },
     handleRevert: [Getter/Setter],
     defaultCommon: [Getter/Setter],
     defaultHardfork: [Getter/Setter],
     defaultChain: [Getter/Setter],
     transactionPollingTimeout: [Getter/Setter],
     transactionPollingInterval: [Getter/Setter],
     transactionConfirmationBlocks: [Getter/Setter],
     transactionBlockTimeout: [Getter/Setter],
     blockHeaderTimeout: [Getter/Setter],
     defaultAccount: [Getter/Setter],
     defaultBlock: [Getter/Setter],

     /*
      * these are the functions in the contract
     */

     methods: {
       setMessage: [Function: bound _createTxObject],
       '0x368b8772': [Function: bound _createTxObject],
       'setMessage(string)': [Function: bound _createTxObject],
       message: [Function: bound _createTxObject],
       '0xe21f37ce': [Function: bound _createTxObject],
       'message()': [Function: bound _createTxObject]
     },
     events: { allEvents: [Function: bound ] },
     _address: '0xd27F123E72FBf46b49c35004FA4ECb418b4093E2',
     _jsonInterface: [
       {
         constant: false,
         inputs: [Array],
         name: 'setMessage',
         outputs: [],
         payable: false,
         stateMutability: 'nonpayable',
         type: 'function',
         signature: '0x368b8772'
       },
       {
         constant: true,
         inputs: [],
         name: 'message',
         outputs: [Array],
         payable: false,
         stateMutability: 'view',
         type: 'function',
         signature: '0xe21f37ce'
       },
       {
         inputs: [Array],
         payable: false,
         stateMutability: 'nonpayable',
         type: 'constructor',
         constant: undefined,
         signature: 'constructor'
       }
     ]
   }
   ```

2. Why does a deployed contract have a variables as property and variable as function in the contract object?
   Example:

```javascript

  methods: {
    setMessage: [Function: bound _createTxObject],
    '0x368b8772': [Function: bound _createTxObject],
    'setMessage(string)': [Function: bound _createTxObject],
    message: [Function: bound _createTxObject],
    '0xe21f37ce': [Function: bound _createTxObject],
    'message()': [Function: bound _createTxObject] // why is this/
}
```

`message` exists as a variable that is exists as a property on the deployed contract object
`message()` property is a function to retreive the value of the 'message variable'

3. What is a Rinkeby Faucet?

4. What are denominations of ETH?

5. How is money stored in an Ethereum smart contract (i.e. contract balance)?
