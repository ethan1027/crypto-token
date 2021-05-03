var BeerusToken = artifacts.require("BasicBeerusToken")

module.exports = function(deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(BeerusToken);
};