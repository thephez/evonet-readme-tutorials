const Dash = require('dash');

const clientOpts = {
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  }
};
const client = new Dash.Client(clientOpts);

const registerContract = async function () {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');

  const contractDocuments = {
    note: {
     indices: [
        {
         properties: [{ "$ownerId": "asc" }], unique: false },
      ],
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
    return platform.contracts.broadcast(contract, identity);
  } else {
    console.error(validationResult) // An array of detailed validation errors
    throw validationResult.errors[0];
  }
}

registerContract()
  .then(d => console.log('Contract registered:\n', d))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-data-contract
