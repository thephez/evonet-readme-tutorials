const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
  apps: {
    tutorialContract: {
      contractId: 'E18yBYfRLa4HiKgYevL6EEhVZ4HssBgGoiV8pwb1EaQb'
    }
  }  
};
const client = new Dash.Client(clientOpts);

const updateNoteDocument = async function () {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');
  const documentId = 'an existing document ID goes here'
  
  // Retrieve the existing document
  const documents = await client.platform.documents.get(
    'tutorialContract.note',
    {where: [['$id', '==', documentId]]}
  );
  
  // Create updated note document
  const noteDocument = await platform.documents.create(
    'tutorialContract.note',
    identity,
    {
      '$id': documents[0].id, // Existing document id
      '$revision': documents[0].revision, // Existing document revision
      message: 'Updated document @ ' + new Date().toUTCString()
    },
  );
 
  const documentBatch = {
    replace: [noteDocument],
  }

  // Sign and submit the document(s)
  return platform.documents.broadcast(documentBatch, identity);
};

updateNoteDocument()
  .then(d => console.log('Document updated:\n', d))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());