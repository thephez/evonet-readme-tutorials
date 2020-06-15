const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  apps: {
    tutorialContract: {
      contractId: '6T2WHiTRfAa8wX7HJi97koyvJ8hj6xda2xfCFXx4eD63'
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
