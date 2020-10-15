const Dash = require('dash');

const clientOpts = {
  apps: {
    tutorialContract: {
      contractId: 'E18yBYfRLa4HiKgYevL6EEhVZ4HssBgGoiV8pwb1EaQb'
    }
  }
};
const client = new Dash.Client(clientOpts);

const getDocuments = async () => {
  const queryOpts = {
    limit: 1 // Only retrieve 1 document
  };
  
  return client.platform.documents.get(
    'tutorialContract.note',
    queryOpts
  );
};

getDocuments()
  .then(d => console.log(d))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

module.exports = getDocuments;

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-retrieve-documents
