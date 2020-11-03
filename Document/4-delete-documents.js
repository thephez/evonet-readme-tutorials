const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
  apps: {
    tutorialContract: {
      contractId: 'Q894cs83D8REQNo7mAetj1wPJK2W3svrwqaN61aP25W',
    },
  },
};
const client = new Dash.Client(clientOpts);

const deleteNoteDocument = async () => {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');
  const documentId = 'an existing document ID goes here';

  // Retrieve the existing document
  const [document] = await client.platform.documents.get(
    'tutorialContract.note',
    { where: [['$id', '==', documentId]] },
  );

  // Sign and submit the document delete transition
  return platform.documents.broadcast({ delete: [document] }, identity);
};

deleteNoteDocument()
  .then((d) => console.log('Document deleted:\n', d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-delete-documents
