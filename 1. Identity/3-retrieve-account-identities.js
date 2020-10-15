const Dash = require('dash');

const client = new Dash.Client({
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
});

const retrieveIdentity = async () => {
  const account = await client.wallet.getAccount();
  await account.isReady();
  return account.getIdentityIds();
}

retrieveIdentity()
  .then(d => console.log('Mnemonic identities:\n', d))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());