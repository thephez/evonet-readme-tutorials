const Dash = require('dash');

const clientOpts = {
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
};
const client = new Dash.Client(clientOpts);

const registerContract = async () => {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');

  // Define a reusable object
  const definitions = {
    address: {
      type: 'object',
      properties: {
        street_address: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
      },
      required: ['street_address', 'city', 'state'],
      additionalProperties: false,
    },
  };

  // Create a document with properties using a definition via $ref
  const contractDocuments = {
    customer: {
      properties: {
        name: { type: 'string' },
        billing_address: { $ref: '#/definitions/address' },
        shipping_address: { $ref: '#/definitions/address' },
      },
      additionalProperties: false,
    },
  };

  const contract = await platform.contracts.create(contractDocuments, identity);

  // Add reusable definitions referred to by "$ref" to contract
  contract.setDefinitions(definitions);
  console.dir({ contract });

  // Make sure contract passes validation checks
  const validationResult = await platform.dpp.dataContract.validate(contract);

  if (validationResult.isValid()) {
    console.log('Validation passed, broadcasting contract..');
    // Sign and submit the data contract
    return platform.contracts.broadcast(contract, identity);
  }
  console.error(validationResult); // An array of detailed validation errors
  throw validationResult.errors[0];
};

registerContract()
  .then((d) => console.log('Contract registered:\n', d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-a-data-contract
