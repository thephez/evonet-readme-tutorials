const Dash = require('dash');

const clientOpts = {
  network: 'evonet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
  apps: {
    tutorialContract: {
      contractId: '4xGhiiDR9o7VhpnW7YtLZvpWXdKByBgChZvUbri8ETJP'
    }
  }  
};
const client = new Dash.Client(clientOpts);

const submitNoteDocument = async function () {
  const platform = client.platform;

  try {
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
    await platform.documents.broadcast(documentBatch, identity);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
};

submitNoteDocument();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-submit-documents
