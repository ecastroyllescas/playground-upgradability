/* eslint-disable no-await-in-loop */
/* eslint-disable no-console, no-inner-declarations, no-undef, import/no-unresolved */

const { ethers, upgrades } = require('hardhat');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const fs = require('fs');

const pathOutputJson = path.join(__dirname, './upgrade_output.json');

async function main() {
    const currentProvider = ethers.provider;
    let deployer;
    if (process.env.MNEMONIC) {
        deployer = ethers.Wallet.fromMnemonic(process.env.MNEMONIC, 'm/44\'/60\'/0\'/0/0').connect(currentProvider);
    } else {
        [deployer] = (await ethers.getSigners());
    }

    const StorageContractFactory = await ethers.getContractFactory('StorageContractUUPS', deployer);
    const value = 1;
    const storageContract = await upgrades.deployProxy(StorageContractFactory, [value], { kind: 'uups' });
    await storageContract.deployed();

    console.log('#######################\n');
    console.log('StorageContract deployed to:', storageContract.address);

    console.log('you can verify the proxy address with:');
    console.log(`npx hardhat verify ${storageContract.address} --network ${process.env.HARDHAT_NETWORK}`);

    const output = {
        storageContract: storageContract.address,
    };
    fs.writeFileSync(pathOutputJson, JSON.stringify(output, null, 1));
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
