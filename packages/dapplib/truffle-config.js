require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hover enrich sun food want dash spice clump coral light army genius'; 
let testAccounts = [
"0x312c4f25fe330e649b4b22a90b8d0cfc0a77b1a62e5973e0b69ff46defdab419",
"0x1078059f2174d8e679f231e3b108e4baec3fe7bc88ca7a55217803a1032275cb",
"0x207a5e18d1372523ac576bd28efd92dea6cec6df9647a755980e6beee76c713b",
"0xe615161ca8ba176c4cc1110f2f498a446ff14c9489b3d63062cfea818b86e9cd",
"0xa61621ee5d99a56ec1b85352aa489f4738209799bc0e8d18f0e770c460e74d29",
"0x7f66771cb2e8b16fb1670569cad218331a2edde028e7612a405b628308b056b8",
"0x0d7ed547bed487ae7194261550463b42d13cc0923afa2974f6141ba0c770be20",
"0x9e4a5dd0ee42488e3c70fa41a683af2570bcb20788231b17d1d65b441888ef4f",
"0x11a2fc78de3830226d1cf0f973821304687701384461e357ac9eaa0d176884dc",
"0x3590baa3805ce89fe6d0e6c84f01e3cdc0e446de574a9680a69ef417d29c3787"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

