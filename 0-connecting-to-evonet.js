const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
};


async function connect() {
  const client = new Dash.Client(clientOpts);
  try {
    console.log(await client.getDAPIClient().getBestBlockHash())
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
