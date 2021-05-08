require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const fs = require('fs');
const metamaskMnemonic = fs.readFileSync(".secret-metamask").toString().trim();
const bwalletMnemonic = fs.readFileSync(".secret-bwallet").toString().trim();

module.exports = {
  networks: {
    rinkeby: {
      accounts: {
        mnemonic: metamaskMnemonic
      },
      url: 'https://rinkeby.infura.io/v3/e7421859353848378f656f2baec8b6c9'
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  api_keys: {
    etherscan: 'A5VHJ5TGNDJIRGW5U1NHD9K3B93Y52JQJW',
    bscscan: 'MI5KAA51ZQC5HIMTUK824ZAWX8EKC8D36P'
  }
};

