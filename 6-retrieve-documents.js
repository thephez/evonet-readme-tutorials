const Dash = require('dash');

const clientOpts = {
  network: 'testnet'
};
const client = new Dash.Client(clientOpts);

const getDocuments = async function () {
  try {
    await client.isReady();
    const documents = await client.platform.documents.get('dpns.domain', {
      where: [
        ['normalizedParentDomainName', '==', 'dash']
      ],
      startAt: 0
    });
    console.log(documents);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
};

getDocuments();

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-retrieve-documents
