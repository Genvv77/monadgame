// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RiddleGame {
    address public owner;
    string public riddle;
    bytes32 private answerHash;
    address public winner;
    uint256 public pot;

    constructor(string memory _riddle, string memory _answer) payable {
        owner = msg.sender;
        riddle = _riddle;
        answerHash = keccak256(abi.encodePacked(_answer));
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function updateRiddle(string memory _riddle, string memory _answer) public onlyOwner {
        riddle = _riddle;
        answerHash = keccak256(abi.encodePacked(_answer));
        winner = address(0);
        pot = 0;
    }

    function guess(string memory _guess) public payable {
        require(winner == address(0), "Riddle already solved");
        require(msg.value == 0.5 ether, "Must send exactly 0.5 MON");

        pot += msg.value;

        if (keccak256(abi.encodePacked(_guess)) == answerHash) {
            winner = msg.sender;
            payable(winner).transfer(pot);
            pot = 0;
        }
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getRiddle() public view returns (string memory) {
        return riddle;
    }
}