const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
};
const client = new Dash.Client(clientOpts);

const registerName = async function () {
  try {
    await client.isReady();
    const platform = client.platform;
    const identity = await platform.identities.get('an identity ID goes here');
    const nameRegistration = await platform.names.register('a name goes here', identity);
    console.log({nameRegistration});
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

registerName();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-name-for-an-identity
