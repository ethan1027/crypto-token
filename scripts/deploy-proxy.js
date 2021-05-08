const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const V1 = await ethers.getContractFactory("MyLuckyCatV1");
  const v1 = await upgrades.deployProxy(V1, []);
  await v1.deployed();
  console.log("LuckyCat deployed to:", v1.address);
}

main();