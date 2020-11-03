const Dash = require('dash');

const client = new Dash.Client();

const retrieveContract = async () => {
  const contractId = 'Q894cs83D8REQNo7mAetj1wPJK2W3svrwqaN61aP25W';
  return client.platform.contracts.get(contractId);
};

retrieveContract()
  .then((d) => console.dir(d.toJSON(), { depth: 5 }))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-retrieve-a-data-contract