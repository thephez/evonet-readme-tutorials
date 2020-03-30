const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
};
const client = new Dash.Client(clientOpts);

async function connect() {
  try {
    await client.isReady();
    console.log('connected');
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

connect();
