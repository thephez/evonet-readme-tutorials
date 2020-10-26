const Dash = require('dash');

const clientOpts = {
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
};
const client = new Dash.Client(clientOpts);

const registerAlias = async () => {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');
  const aliasRegistration = await platform.names.register(
    'a name goes here',
    { dashAliasIdentityId: identity.getId() },
    identity,
  );

  return aliasRegistration;
};

registerAlias()
  .then((d) => console.log('Alias registered:\n', d.toJSON()))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-name-for-an-identity
