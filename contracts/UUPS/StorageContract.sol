pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract StorageContractUUPS is UUPSUpgradeable, OwnableUpgradeable {
    uint256 value;

    function initialize(uint256 _value) public initializer {
        value = value;

        // Initialize libs
        __Ownable_init();
    }

    // Mandatory override for UUPS proxies
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
