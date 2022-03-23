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
contract Campaign {
    // manager is also the creator of the contract
    address payable public manager;
    // approvers array updated at approveRequest function call
    // !each address needs to be mapped to the amount of money each approver contributed
    address payable[] public approvers;
    address[] public contributors;
    // minimum Contribution in Wei
    uint256 public minimumContribution;
    // Request struct
    // used to create a request for approval by the contributors
    // A request can only be created by a manager
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool completed;
    }
    // array of Request struct, works like any other array
    Request[] public requests;

    // modifier to restrict fucntion invocation
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    /* 
    constructor function requires a minimum amount of ETH to create contract
     the Contract cannot be deployed without this minimum amount
     as soon  the constructor function is added with a required parameter 
     remix deploy button adds an Input field
     */
    constructor(uint256 _minimum) {
        // this value is in Wei
        minimumContribution = _minimum;
        // set manager as the creator of the contract
        manager = payable(msg.sender);
    }

    //function to allow users to participate in the Campaign
    // send minimum amount of eth required to participate in the Campaign
    function contribute() public payable {
        // the amount sent at invocation should be larger that minimumContribution
        // ADD REQUIRE STATEMENT MODIFIER HERE
        require(msg.value > minimumContribution);
        // push the function invocators address to the contributors array
        approvers.push(payable(msg.sender));
    }

    // Called by the manager to create a 'spending request' [how to determine a valid spending request in the real world?]
    function createRequest() public {}

    // Called by the contributors to approve a spending request
    function approveRequest() public {}

    function finalizeRequest() public {}
}
