const ConnectToEvonet = require('../0-connecting-to-evonet')
const CreateAndFundWallet = require('../1-create-and-fund-wallet')
const RetrieveDocuments = require('../6-retrieve-documents')

var assert = require('assert');

describe('Tutorial Code Test', function() {
  describe('0-connecting-to-evonet.js', function() {
    it('should connect to Evonet without error', async function() {
      let result =  await ConnectToEvonet();
      assert.ifError(result);
    });
  });

  describe('1-create-and-fund-wallet.js', function() {
    this.timeout(5000); // this test can take up to 5 seconds
    it('should create a wallet and get an unused address without error', async function() {
      let result =  await CreateAndFundWallet();
      assert.ifError(result);
    });
  });

  describe('6-retrieve-documents.js', function() {
    it('should retrieve document(s) from Evonet without error', async function() {
      let result =  await RetrieveDocuments();
      assert.ifError(result);
    });
  });
});
