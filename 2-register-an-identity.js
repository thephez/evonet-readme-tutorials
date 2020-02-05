const DashJS = require('dash');

const sdkOpts = {
  network: 'testnet',
  mnemonic: 'shoe silver cloud height nominee seed invite arena goddess nephew congress near',
};
const sdk = new DashJS.SDK(sdkOpts);

const createIdentity = async function () {
  try {
    await sdk.isReady();
    const platform = sdk.platform;
    const identity = await platform.identities.register('user');  // literally 'user', do not change
    console.log({identity});
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    sdk.disconnect();
  }
}

// Tutorial page: https://dashplatform.readme.io/docs/tutorial-register-an-identity
createIdentity()

// { identity: '5eFG6cF1Z1Mu4MK5GcdvJcy4H8yzQrrrmw5yTvgBXNHm' }
