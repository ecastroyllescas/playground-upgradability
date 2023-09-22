pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract StorageContract is OwnableUpgradeable {
    uint256 value;

    function initialize(uint256 _value) public initializer {
        value = value;

        // Initialize libs
        __Ownable_init();
    }
}
