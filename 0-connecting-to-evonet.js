const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
};
const client = new Dash.Client(clientOpts);

async function connect() {
  try {
    console.log(await client.getDAPIClient().core.getBestBlockHash())
    console.log('connected');
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

connect();

module.exports = connect;

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-connecting-to-evonet
