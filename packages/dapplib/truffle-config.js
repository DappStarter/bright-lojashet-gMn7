require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift renew sad equip inflict drip fringe gentle'; 
let testAccounts = [
"0x858ef4d14040d5823f8339402d4686597cd3cc6957e4dc0edec060080653dcef",
"0x8cdc47af98b29debea9de64d9d7556234a01687c3d2d76f60b64d71a07fb3f21",
"0xe277ab04f7223525cd5cbaaa602700c173ee050da537f70c262fc30f67c99c7c",
"0xcd437b18a81911ee94df5b7543183da7e456715968448d4987fe8ae031f25cfc",
"0xc51fd2f7a2e0e97a9dcd9a9680b0e4f82e1875e2c561df2c40ef7bce04cb670d",
"0x06733a6103d92f158f0016cdc740f0f0fd96b38055290da5f6bf101c4a4398d1",
"0x7cedd1a3feba945a3ad68386cb868297b39257df69b2d87ab09925e39954890e",
"0xf27c54dcf39cc3789898754ec9fac2d329946d4379d845be43e0f4e63bf6c90d",
"0x74a4af471aceaae76f8dc98fd9619008fe085284713a0b1ae7a8ce5bd3c2b9d5",
"0xf792501451b181f04cb4ad207cfc7904ca8825e4b0e9ee92ebab3487d148930d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

