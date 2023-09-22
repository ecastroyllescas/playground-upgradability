# Upgradability playground using OZ libs

## Requirements

- node version: 16.x
- npm version: 7.x

## Usage

1. Install the dependencies: `npm i`

2. Create your env file: `cp .env.example .env` and fill it with your variables:

- `MNEMONIC`: The first account will be used to interact with the blockchain, make sure it has ether.

- `INFURA_PROJECT_ID`: Infura id, can be created here for free https://www.infura.io/, alternatively you can set provider for each network for example setting: `GOERLI_PROVIDER`in case of goerli (check `hardhat.config.js` for more information)

- `ETHERSCAN_API_KEY`: Etherescan api key. Will be used to verify contracts from scripts.

3. Execute scripts on package.json

For example to deploy and upgrade and transparent proxy use:

```
npm run deploy:transparent:goerli
npm run update:transparent:goerli
```

To verify the contract in etherscan, if you set the API KEY, you can execute the prompted command which will be something like this:

```
you can verify the proxy address with:
npx hardhat verify 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFF --network goerli
```

## Notes

Be aware that when deploying/upgrading contracts using the OZ libs a folder `.openzeppelin` is created in root of the project and a file for network , for example, for goerli: `goerli.json`
Here will be all the upgradability information (like the proxy admins deployed, the implementations and their storage layout ...)
It's mandatory to safe this file, and placed there when upgrading a contract!
This will help OZ libs to know which are the proxy admin to interact, perform sanity checks, for example in the storage layout of the previous and new implementation
