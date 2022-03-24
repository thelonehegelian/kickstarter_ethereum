// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// Campaign => constructor
contract Campaign {
    // manager is also the creator of the contract
    address payable public manager;

    // approvers array updated at approveRequest function call
    mapping(address => bool) public approvers;
    // hmmm... maybe can also work with a struct for approver
    // so we can have more information about the approver and that struct can be a mapping of address => approversStruct

    /*  
        !each address should  to be mapped to the amount of money each approver contributed
        address => valueContributed
        mapping (address => uint) public valueContributed;
        address [] public contributors;
    */

    // minimum Contribution in Wei
    uint256 public minimumContribution;

    // Request struct
    // used to create a request for approval by the contributors
    // A request can only be created by a manager
    struct Request {
        string description;
        uint256 value; // in Wei
        address recipient;
        bool completed;
        uint256 approvalCount;
        mapping(address => uint256) approvals;
    }

    // array of Request struct, works like any other array
    Request[] public requests;

    // modifier to restrict function invocation
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
        // TODO: ADD REQUIRE STATEMENT MODIFIER HERE
        require(msg.value > minimumContribution);

        // Add the contributors address to the approval mapping
        approvers[msg.sender] = true;

        // map the value contributed to the address of the contributor
        // valueContributed [msg.sender] = msg.value
    }

    // Called by the manager to create a 'spending request' [how to determine a valid spending request in the real world?]
    function createRequest(
        string calldata _description,
        uint256 _value,
        address _recipient
    ) public restricted {
        // create a request using the Request struct
        Request memory newRequest = Request({
            description: _description,
            value: _value, // value is in Wei
            recipient: _recipient,
            completed: false // set initial value to false
        });

        // push the request in to the request array
        requests.push(newRequest);
    }

    // Called by the contributors to approve a spending request
    // only a contributor is allowed to call this function
    function approveRequest() public {
        require(approvers[msg.sender]);
    }

    function finalizeRequest() public {
        // are there enough aprovals for the request?
    }
}
