var BeerusToken = artifacts.require("BeerusToken")

module.exports = function(deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(BeerusToken);
};