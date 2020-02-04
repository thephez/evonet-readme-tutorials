const DashJS = require('dash');

const sdkOpts = {
  network: 'testnet',
  mnemonic: 'shoe silver cloud height nominee seed invite arena goddess nephew congress near',
};
const sdk = new DashJS.SDK(sdkOpts);

const registerName = async function () {
  try {
    await sdk.isReady();
    const platform = sdk.platform;
    const identity = await platform.identities.get('5eFG6cF1Z1Mu4MK5GcdvJcy4H8yzQrrrmw5yTvgBXNHm');
    const nameRegistration = await platform.names.register('evonet-test-9999', identity);
    console.log({nameRegistration});
  } catch (e) {
    console.error('Something went wrong:', e);
    console.dir({e}, {depth: 10})
  } finally {
    sdk.disconnect();
  }
}

registerName();
