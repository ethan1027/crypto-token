const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const V2 = await ethers.getContractFactory("MyLuckyCatV2");
  await upgrades.upgradeProxy(BOX_ADDRESS, V2);
  console.log("LuckyCat upgraded");
}

main();