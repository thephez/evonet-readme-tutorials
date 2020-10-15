const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  }
};
const client = new Dash.Client(clientOpts);

const createIdentity = async () => {
  return client.platform.identities.register();
}

createIdentity()
  .then(d => console.log('Identity:\n', d.toJSON()))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-an-identity

// User: { identity: '3VoD81QEMVvKJYuALLidjz8xnBrn297nbDkEq92Y9axQ' }
// Application: { identity: 'GjtKsoRycU3kGdnS8EEM3kitU4JbTBTZ8ZCndoyi5tCP' }
