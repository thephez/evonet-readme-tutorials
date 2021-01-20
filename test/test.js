/* eslint-disable no-undef */
const assert = require('assert');
const ConnectToEvonet = require('../0-connecting-to-evonet');
const CreateAndFundWallet = require('../1-create-and-fund-wallet');
const RetrieveDocuments = require('../Document/2-retrieve-documents');

describe('Tutorial Code Test', function suite() {
  describe('0-connecting-to-evonet.js', () => {
    it('should connect to Evonet without error', async function () {
      const result = await ConnectToEvonet();
      assert.ok(result);
    }).timeout(5000);
  });

  describe('1-create-and-fund-wallet.js', () => {
    it('should create a wallet and get an unused address without error', async function () {
      const result = await CreateAndFundWallet();
      assert.ifError(result);
    });
  });

/*   describe('Document/2-retrieve-documents.js', () => {
    it('should retrieve document(s) without error', async function () {
      const result = await RetrieveDocuments();
      assert.ifError(result);
    }).timeout(10000);
  }); */
});
