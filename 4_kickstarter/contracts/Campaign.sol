// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

/*

VARIABLES
---------
manager => address [who is the manager in the real world application?]
minimumContribution => uint
approvers => address array
requests => Request []

*/

// Campaign => constructor
contract Campaign  {
    // minimum Contribution in Wei
    uint public minimumContribution;
    // constructor function requires a minimum amount of ETH to create contract
    // the Contract cannot be deployed without this
    // as soon as you add the constructor function with a required parameter 
    // remix deploy button adds an Iput field
    constructor  (uint _minimum)  {
            minimumContribution = _minimum;
    }

    // set creator of the contract as it's manager 
    address public  manager = msg.sender;
    
    // approvers array updated at approveRequest function call
    address payable [] public approvers;
    address [] public contributors;
 
    //function to allow users to participate in the Campaign
    // send minimum amount of eth required to participate in the Campaign
    function contribute  () public payable {
        
        // ADD REQUIRE STATEMENT MODIFIER HERE
        
        // push the function invocators address to the contributors array  

    } 
    // Called by the manager to create a 'spending request' [how to determine a valid spending request in the real world?]
    function createRequest () public {

    }
    // Called by the contributors to approve a spending request 
    function approveRequest() public {

    }
    function finalizeRequest () public {

    }

}
    