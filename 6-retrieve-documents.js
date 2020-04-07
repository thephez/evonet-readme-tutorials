const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  apps: {
    tutorialContract: {
      contractId: 'EzLBmQdQXYMaoeXWNaegK18iaaCDShitN3s14US3DunM'
    }
  }
};
const client = new Dash.Client(clientOpts);

const getDocuments = async function () {
  try {
    await client.isReady();

    const queryOpts = {
      limit: 1 // Only retrieve 1 document
    };
    const documents = await client.platform.documents.get(
      'tutorialContract.note',
      queryOpts
    );
    console.log(documents);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
};

getDocuments();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-retrieve-documents