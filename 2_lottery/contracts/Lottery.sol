// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Lottery {

// VARIABLES
    /*lottery manager*/

    // set lottery manager address to the address of the contract creator
    address public manager = msg.sender;

    /* players entering the lottery */
    // dynamic array of addresses to store multiple 'payable' addresses
    // will this be a dynamic array?
    address payable  []  public   players;

    // FUNCTIONS

    /* enters a user into a lottery*/

    // allows a user to enter the lottery with specified amount of Ether
    // the 'payable' keyword makes the function so that it requires Ether to be sent to a given address
    function enter () public payable {
        // set limit to enter lottery
        require(msg.value > 0.1 ether); // 0.1 ether = 100000000000000000 wei
        // make msg.sender payable
        players.push(payable(msg.sender));
    }

    // Random number generator
    // Formula: current block difficulty + block time + available addresses -> keccak256 Algorithm = Really big number
    function random () private view returns (uint256) {
       return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    // Only the lottery manager should be allowed to call the function
    // randomly picks a winner of the lottery  and send ether to them
    function pickWinner()  public restricted  {
        uint randomIndex = random()%players.length;
        // send all the contract balance to the winner of the lottery
        players[randomIndex].transfer(address(this).balance);
        /* TODO: */
        /* there should be a variable to save and display the winner of the lottery*/
        // Empty the players array so a new round of lottery can be started
        players = new address payable[] (0);
    }

    // returns array of players
    function getPlayers() public view  returns( address payable [] memory) {
        return players;
    }

    // modifier to restrict manager of the lottery
    modifier restricted() {
    require(msg.sender == manager);
    _;
    }
}
