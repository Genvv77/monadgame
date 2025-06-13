// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RiddleGameAuto {
    address public owner;
    string public riddle;
    bytes32 public answerHash;
    address public winner;
    uint256 public pot;

    event Winner(address winner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(string memory _riddle, bytes32 _answerHash) payable {
        owner = msg.sender;
        riddle = _riddle;
        answerHash = _answerHash;
    }

    function updateRiddle(string memory _riddle, bytes32 _answerHash) public onlyOwner {
        riddle = _riddle;
        answerHash = _answerHash;
        winner = address(0);
    }

    function guess(string memory _guess) public payable {
        require(winner == address(0), "Riddle already solved");
        require(msg.value == 0.5 ether, "Must send exactly 0.5 MON");

        pot += msg.value;

        if (keccak256(abi.encodePacked(_guess)) == answerHash) {
            winner = msg.sender;
            uint256 reward = pot;
            pot = 0;
            payable(msg.sender).transfer(reward);
            emit Winner(msg.sender, reward);
        }
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getRiddle() public view returns (string memory) {
        return riddle;
    }
}
