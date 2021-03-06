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

const updateNoteDocument = async () => {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');
  const documentId = 'an existing document ID goes here';

  // Retrieve the existing document
  const [document] = await client.platform.documents.get(
    'tutorialContract.note',
    { where: [['$id', '==', documentId]] },
  );

  // Update document
  document.set('message', 'Updated document @ ' + new Date().toUTCString());

  // Sign and submit the document replace transition
  return platform.documents.broadcast({ replace: [document] }, identity);
};

updateNoteDocument()
  .then((d) => console.log('Document updated:\n', d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());
