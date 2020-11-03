const Dash = require('dash');

const clientOpts = {
  apps: {
    tutorialContract: {
      contractId: 'Q894cs83D8REQNo7mAetj1wPJK2W3svrwqaN61aP25W',
    },
  },
};
const client = new Dash.Client(clientOpts);

const getDocuments = async () => {
  return client.platform.documents.get(
    'tutorialContract.note',
    {
      limit: 1, // Only retrieve 1 document
    },
  );
};

getDocuments()
  .then((d) => console.log(d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

module.exports = getDocuments;

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-retrieve-documents
