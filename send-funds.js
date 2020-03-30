const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic: 'your wallet mnemonic goes here'
};
const client = new Dash.Client(clientOpts);

async function sendFunds() {
  await client.isReady();
  try {
    const transaction = client.account.createTransaction({
      recipient: 'yNPbcFfabtNmmxKdGwhHomdYfVs6gikbPf', // Evonet faucet
      satoshis: 100000000, // 1 Dash
    });
    const result = await client.account.broadcastTransaction(transaction);
    console.log('Transaction broadcast!\nTransaction ID:', result);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

sendFunds();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-send-funds
