const Dash = require('dash');

const client = new Dash.Client();

const retrieveName = async () => {
  // Retrieve by full name (e.g., myname.dash)
  // NOTE: Use lowercase characters only
  return client.platform.names.resolve('<identity name>.dash');
};

retrieveName()
  .then((d) => console.log('Name retrieved:\n', d.toJSON()))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());
