const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  }
};
const client = new Dash.Client(clientOpts);

const registerContract = async function () {
  try {
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

    // Make sure contract passes validation checks
    const validationResult = await platform.dpp.dataContract.validate(contract);

    if (validationResult.isValid()) {
      console.log("validation passed, broadcasting contract..");
      // Sign and submit the data contract
      await platform.contracts.broadcast(contract, identity);
    } else {
      console.error(validationResult) // An array of detailed validation errors
      throw validationResult.errors[0];
    }
    
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
}

registerContract();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-data-contract
