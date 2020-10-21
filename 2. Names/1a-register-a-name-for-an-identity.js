const Dash = require('dash');

const clientOpts = {
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  }
};
const client = new Dash.Client(clientOpts);

const registerName = async () => {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');
  const nameRegistration = await platform.names.register(
    'a name goes here',
    { dashUniqueIdentityId: identity.getId() },
    identity
  );

  return nameRegistration;
}

registerName()
  .then(d => console.log('Name registered:\n', d.toJSON()))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

  // Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-name-for-an-identity
