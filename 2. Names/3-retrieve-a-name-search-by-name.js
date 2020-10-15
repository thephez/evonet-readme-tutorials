const Dash = require('dash');

const client = new Dash.Client();

const retrieveNameBySearch = async () => {
  // Search for names (e.g. `user*`)
  return client.platform.names.search('user', 'dash');
}

retrieveNameBySearch()
  .then(d => console.log('Name(s) retrieved:\n', d))
  .catch(e => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());