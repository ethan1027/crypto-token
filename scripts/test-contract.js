const { ethers } = require("hardhat");
const Contract = await ethers.getContractFactory("MyLuckyCatV2");
const contract = Contract.attach("0xe92cA97C33E9df99fa9f310a8689D65fA210B193");