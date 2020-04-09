const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic: null, // this indicates that we want a new wallet to be generated
                  // if you want to get a new address for an existing wallet
                  // replace 'null' with an existing wallet mnemonic
};
const client = new Dash.Client(clientOpts);

async function createWallet() {
  try {
    await client.isReady();
    const mnemonic = client.wallet.exportWallet();
    const address = client.account.getUnusedAddress();
    console.log('Mnemonic:', mnemonic);
    console.log('Unused address:', address.address);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

createWallet();

module.exports = createWallet;

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-create-and-fund-a-wallet

// Mnemonic: shoe silver cloud height nominee seed invite arena goddess nephew congress near
// Unused address: ybknxsGDUymLtVA1LH9FDNoNyWyGcqTaaW
