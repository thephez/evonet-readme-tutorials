const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
};
const client = new Dash.Client(clientOpts);

const registerContract = async function () {
  try {
    await client.isReady();
    const platform = client.platform;
    const identity = await platform.identities.get('an identity ID goes here');

    const contractDocuments = {
      note: {
        properties: {
          message: {
            type: "string"
          }
        },
        additionalProperties: false
      }};
    const contract = await platform.contracts.create(contractDocuments, identity);
    console.dir({contract});

    // Sign and submit the data contract
    await platform.contracts.broadcast(contract, identity);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

registerContract();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-data-contract
