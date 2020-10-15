const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  }
};
const client = new Dash.Client(clientOpts);

const topupIdentity = async () => {
  const identityId = 'an identity ID goes here';
  const topUpAmount = 1000;  // Number of duffs

  await client.platform.identities.topUp(identityId, topUpAmount);
  return client.platform.identities.get(identityId);
}

topupIdentity()
  .then(d => console.log('Identity credit balance: ', d.balance))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());