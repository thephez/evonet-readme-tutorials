const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
};
const client = new Dash.Client(clientOpts);

const retrieveContract = async function () {
  try {
    const platform = client.platform;
    const contractId = '4xGhiiDR9o7VhpnW7YtLZvpWXdKByBgChZvUbri8ETJP';
    
    const contract = await platform.contracts.get(contractId);
    console.dir({contract});
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

retrieveContract();