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
      -- What is a web3 Provider and why is it needed?
      --  