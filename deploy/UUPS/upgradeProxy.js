/* eslint-disable no-await-in-loop */
/* eslint-disable no-console, no-inner-declarations, no-undef, import/no-unresolved */

const { ethers, upgrades } = require('hardhat');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const outputJson = require('./upgrade_output.json');

async function main() {
    const currentProvider = ethers.provider;
    let deployer;
    if (process.env.MNEMONIC) {
        deployer = ethers.Wallet.fromMnemonic(process.env.MNEMONIC, 'm/44\'/60\'/0\'/0/0').connect(currentProvider);
    } else {
        [deployer] = (await ethers.getSigners());
    }

    const StorageContractFactoryV2 = await ethers.getContractFactory('StorageContractUUPSV2', deployer);
    const storageContract = await upgrades.upgradeProxy(outputJson.storageContract, StorageContractFactoryV2);
    await storageContract.deployed();

    console.log('you can verify the proxy address with:');
    console.log(`npx hardhat verify ${outputJson.storageContract} --network ${process.env.HARDHAT_NETWORK}`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
