const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  apps: {
    tutorialContract: {
      contractId: '4xGhiiDR9o7VhpnW7YtLZvpWXdKByBgChZvUbri8ETJP'
    }
  }
};
const client = new Dash.Client(clientOpts);

const getDocuments = async function () {
  try {    
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

module.exports = getDocuments;

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-retrieve-documents
