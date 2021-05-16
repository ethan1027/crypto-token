require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
// require('@openzeppelin/hardhat-defender');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { mnemonic, etherscan, bscscan } = require('./secrets.json')

module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      accounts: {
        mnemonic
      },
      url: 'https://rinkeby.infura.io/v3/e7421859353848378f656f2baec8b6c9'
    },
    bsctest: {
      accounts: {
        mnemonic
      },
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545'

    },
    bsc: {
      accounts: {
        mnemonic
      },
      url: 'https://bsc-dataseed1.binance.org',
      gasPrice: "auto",
      gas: "auto"
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: bscscan
  }
};

