// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// Campaign Factory contract
contract CampaignFactory {
    // array of contract addresses
    address[] public deployedCampaigns;

    // campaign creator
    function createCampaign(uint256 _minimum) public {
        // deploys a new campaign contract
        // in such a case msg.sender is the address of the Factory contract/the contract that call another contract
        address newCampaign = address(new Campaign(_minimum, msg.sender)); // adding msg.sender to the parameter fixes the Factory address problem
        deployedCampaigns.push(newCampaign);
    }

    // get the array of all the deployed contracts, only contract addresses are returned
    //TODO: change name to getDeployedCampaigns
    function getDeployedContracts() public view returns (address[] memory) {
        return deployedCampaigns;
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

// Campaign => constructor
contract Campaign {
    // manager is also the creator of the contract
    address payable public manager;

    // approvers mapping updated when someone calls the 'contribute' function

    /*
        TODO: this should be renamed to 'contributor' as that is more descriptive of the purpose. 
        Because, this is a person who has 'contributed' to the campaign
    */
    mapping(address => bool) public approvers; // hmmm... maybe can also work with a struct for approver
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
        uint256 value; // in Wei, the money that is asked for and transferred at the finalization of the request
        address payable recipient; // the person who should receive the money at the finalization of the request. Who should be this person in real-life?
        bool complete; // to be marked as complete: approvalCount > (approverCount / 2)
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }
    // mapping to store new request structs
    uint256 public numRequests;
    /* this should probably be a descriptive mapping, 
    realistically users aren't cant be expected to know the description of the request 
    through an index. Unless, of course, that is provided to the user some other way 
    which I suppose is entirely possible
    */
    mapping(uint256 => Request) public requests;
    // this is updated at every contribution
    uint256 public approversCount;
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
    constructor(uint256 _minimum, address _creator) {
        // TODO: maybe campaigns should have a name too
        // this value is in Wei
        minimumContribution = _minimum;
        // set manager as the creator of the contract
        manager = payable(_creator);
    }

    //function to allow users to participate in the Campaign
    // send minimum amount of eth required to participate in the Campaign
    function contribute() public payable {
        // the amount sent at invocation should be larger that minimumContribution
        // TODO: ADD REQUIRE STATEMENT MODIFIER HERE
        require(msg.value > minimumContribution);

        // Add the contributors address to the approval mapping
        approvers[msg.sender] = true; // is the address a contributor? true
        // update number of approvers who have contributed to the campaign
        approversCount++;
        // map the value contributed to the address of the contributor
        // valueContributed [msg.sender] = msg.value
    }

    // Only the manager is allowed to create a request
    // 'restricted' modifier ensures that
    function createRequest(
        string calldata _description,
        uint256 _value,
        address payable _recipient
    ) public restricted {
        // create a request using the Request struct
        Request storage newRequest = requests[numRequests++]; // appends the struct to requests mapping
        newRequest.description = _description;
        newRequest.value = _value;
        newRequest.recipient = _recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
    }

    // Called by a contributor (approver) to approve a spending request
    // only a contributor (approver) is allowed to call this function
    // parameters: key from the 'request mapping'
    function approveRequest(uint256 _index) public {
        // this will minimize the operations where requests[_index] is required
        // storage keyword used to access the requests in the storage [??]
        Request storage request = requests[_index];
        // check if the caller of the function is a contributor (approver)
        require(approvers[msg.sender]);

        /*  
            1. go to request mapping using the index
            2. go to approvals mapping with key = address of the sender
            3. check if approvals is False (default value)
        */
        require(!request.approvals[msg.sender]);
        // set approvaal to true from sender address
        request.approvals[msg.sender] = true;
        // increment approvalCount
        request.approvalCount++;
    }

    // parameter: Request index
    function finalizeRequest(uint256 _requestIndex) public restricted {
        Request storage request = requests[_requestIndex];
        // are there enough approvals for the request?
        require(request.approvalCount > (approversCount / 2));
        // require that the the request is incomplete
        require(!request.complete);
        // transfer the money to the recepient
        request.recipient.transfer(request.value);
        // mark the request as complete
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            minimumContribution,
            address(this).balance,
            numRequests,
            approversCount,
            manager
        );
    }
}
