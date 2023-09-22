# Upgradability playground using OZ libs

## Requirements

- node version: 16.x
- npm version: 7.x

## Usage

1. Install the dependencies: `npm i`

2. Create your env file: `cp .env.example .env` and fill it with your variables:

- `MNEMONIC`: The first account will be used to interact with the blockchain, make sure it has ether.

- `INFURA_PROJECT_ID`: Infura id, can be created here for free https://www.infura.io/, alternatively you can set provider for each network for example setting: `GOERLI_PROVIDER`in case of goerli (check `hardhat.config` for more information)

- `ETHERSCAN_API_KEY`: Etherescan api key. Will be used to verify contracts from scripts.

3. Execute scripts on package.json

For example to deploy and upgrade and transparent proxy use:

```
"deploy:transparent:goerli": "npx hardhat run deploy/transparent/deployProxyOZ.js --network goerli",
"update:transparent:goerli": "npx hardhat run deploy/transparent/upgradeProxy.js --network goerli",
```

## Notes

Be aware that when deploying/upgrading contracts using the OZ libs a folder `.openzeppelin` is created and a file for network `goerli.json`
Here will be all the upgradability information (like the proxy admins deployed, the implementations, storage slots used...)
It's mandatory to safe this file, and placed there when upgrading a contract!
This will help OZ libs to know which are the proxy admin to interact, perform sanity checks, for example in the storage layout of the previous and new implementation
