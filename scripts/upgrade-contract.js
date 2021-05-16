const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const V2 = await ethers.getContractFactory("LuckyCatV4");
  await upgrades.upgradeProxy("0x92bc83007dB31dfF6406D12e5CD6FAEE23B624C4", V2);
  console.log("LuckyCat upgraded");
}

main();