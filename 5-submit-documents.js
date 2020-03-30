const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic: 'a Dash wallet mnemonic with evonet funds goes here',
  apps: {
    tutorialContract: {
      contractId: 'EzLBmQdQXYMaoeXWNaegK18iaaCDShitN3s14US3DunM'
    }
  }
};
const client = new Dash.Client(clientOpts);

const submitNoteDocument = async function () {
  const platform = client.platform;
  await client.isReady();

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

    // Sign and submit the document
    await platform.documents.broadcast(noteDocument, identity);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
};

submitNoteDocument();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-submit-documents
