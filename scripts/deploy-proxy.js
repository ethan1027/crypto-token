const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const V1 = await ethers.getContractFactory("SmartCatV1");
  const v1 = await upgrades.deployProxy(V1, [], { initializer: 'initialize'});
  console.log(v1.address)
  await v1.deployed();
  console.log("SmartCatV1 deployed to:", v1.address);
}

main();