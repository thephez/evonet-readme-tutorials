const Dash = require('dash');

const client = new Dash.Client({
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
});

const retrieveIdentityIds = async () => {
  const account = await client.getWalletAccount();
  return account.getIdentityIds();
};

retrieveIdentityIds()
  .then((d) => console.log('Mnemonic identities:\n', d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());
