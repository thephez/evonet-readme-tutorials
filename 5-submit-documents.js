const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  },
  apps: {
    tutorialContract: {
      contractId: 'ARQGUnPH3YMK8FZuqwUjnTWEF6Zu4Cf3sT6e1Ruu1RXk'
    }
  }
};
const client = new Dash.Client(clientOpts);

const submitNoteDocument = async function () {
  const platform = client.platform;

  try {
    const identity = await platform.identities.get('an identity ID goes here');

    docProperties = {
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
    // Sign and submit the document
    await platform.documents.broadcast(documentBatch, identity);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
};

submitNoteDocument();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-submit-documents
