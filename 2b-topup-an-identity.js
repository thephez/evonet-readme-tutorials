const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  }
};
const client = new Dash.Client(clientOpts);

const topupIdentity = async function () {
  try {
    const identityId = 'an identity ID goes here';
    const topUpAmount = 1000;  // Number of duffs

    const platform = client.platform;
    const status = await platform.identities.topUp(identityId, topUpAmount);
    const identity = await platform.identities.get(identityId);
    console.log('Identity credit balance:', identity.balance);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

topupIdentity()