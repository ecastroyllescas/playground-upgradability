pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract StorageContractUUPS is UUPSUpgradeable, OwnableUpgradeable {
    uint256 value;

    // Be aware when writing upgradable smart contract to not user a constructor ( if used, only for immutables!) and use an initializer instead!
    // The initialize whould be all the "constructor" setup variables, and be aware that, similar to a constructor, you
    // must initialize all the libs that required to!
    // Since the initialize function should be only called once, OZ has this modifier `initializer` just for this, remember to add it!
    function initialize(uint256 _value) public initializer {
        value = _value;

        // Initialize libs
        __Ownable_init();
    }

    // Mandatory override for UUPS proxies, here should be the authentication logic to upgrade a contract
    // In this case, the function is empty, but is has the `onlyOwner` modifier, so basically only the owner would be able to upgrade
    // this contract
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
