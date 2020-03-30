const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
};
const client = new Dash.Client(clientOpts);

const createIdentity = async function () {
  try {
    await client.isReady();
    const platform = client.platform;
    const identity = await platform.identities.register('user');  // literally 'user', do not change
    console.log({identity});
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

createIdentity()

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-an-identity

// { identity: '3VoD81QEMVvKJYuALLidjz8xnBrn297nbDkEq92Y9axQ' }
