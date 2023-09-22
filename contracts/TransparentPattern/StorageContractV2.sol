pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract StorageContractV2 is OwnableUpgradeable {
    uint256 value;

    // Storage variables only can be appended, do not modify or erase any storage variable if you are not sure!
    // Also make sure to have exactly the same dependencies that uses the same storage slots

    // All function can be modified, added or deleted
    function initialize(uint256 _value) public initializer {
        value = _value;

        // Initialize libs
        __Ownable_init();
    }

    // Function added
    function setValue(uint256 _value) public {
        value = _value;
    }
}
