// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyLuckyCatV2 is ERC20Upgradeable, ERC20BurnableUpgradeable, OwnableUpgradeable {
    function initialize() initializer public {
        __ERC20_init("LuckyCat", "MLC");
        _mint(msg.sender, 1000e18);
     }
}