const Dash = require('dash');

const clientOpts = {
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

const submitNoteDocument = async function () {
  const platform = client.platform;
  const identity = await platform.identities.get('an identity ID goes here');

  const docProperties = {
    message: 'Tutorial Test @ ' + new Date().toUTCString()
  }

  // Create the note document
  const noteDocument = await platform.documents.create(
    'tutorialContract.note',
    identity,
    docProperties,
  );

  const documentBatch = {
    create: [noteDocument],
    replace: [],
    delete: [],
  }
  // Sign and submit the document(s)
  return platform.documents.broadcast(documentBatch, identity);
};

submitNoteDocument()
  .then(d => console.log(d))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-submit-documents
