const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  wallet: {
    mnemonic: null, // this indicates that we want a new wallet to be generated
                    // if you want to get a new address for an existing wallet
                    // replace 'null' with an existing wallet mnemonic
  },
};

const client = new Dash.Client(clientOpts);

const createWallet = async () => {
  const account = await client.wallet.getAccount();
  await account.isReady();

  const mnemonic = client.wallet.exportWallet();
  const address = account.getUnusedAddress();
  console.log('Mnemonic:', mnemonic);
  console.log('Unused address:', address.address);
};

createWallet()
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

module.exports = createWallet;

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-create-and-fund-a-wallet

// Mnemonic: shoe silver cloud height nominee seed invite arena goddess nephew congress near
// Unused address: ybknxsGDUymLtVA1LH9FDNoNyWyGcqTaaW
