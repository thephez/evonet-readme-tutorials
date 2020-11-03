const Dash = require('dash');

const client = new Dash.Client();

const retrieveNameBySearch = async () => {
  // Search for names (e.g. `user*`)
  // NOTE: Use lowercase characters only
  return client.platform.names.search('user', 'dash');
};

retrieveNameBySearch()
  .then((d) => {
    for (const name of d) {
      console.log('Name retrieved:\n', name.toJSON());
    }
  })
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());
