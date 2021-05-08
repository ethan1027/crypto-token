// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyLuckyCatV1 is ERC20Upgradeable, ERC20BurnableUpgradeable, OwnableUpgradeable {
    function initialize() initializer public {
        __ERC20_init("MyLuckyCat", "MLC");
        _mint(msg.sender, 100e18);
     }

    function version() public view virtual returns (string memory) {
        return "v1";
    }
}