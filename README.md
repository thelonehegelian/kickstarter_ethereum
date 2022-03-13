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
    -- What is Web3 and what is it used for?
    It is a JavaScript library that is used to deploy smart contract to blockchains like Ethereum. Web3 can also be used to interact with already deployed smart contracts on Ethereum or other EVM compatible blockchain [?]
    The requirements for deploying a contract and interacting with an already deployed smart contract are different. In both cases though an ABI is needed.
    -- What is a web3 Provider and why is it needed?
    -- What is web3.eth?
    -- Almost all web3 functions are asynchronous and therefore return a promise

- Structure of a compiled contract:

        `{
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
      }`

  - The interface property in the object is the ABI of the contract

- What is the ABI?

  - ABI is a standard format like json to interact with ethereum contracts [rephrase]

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
