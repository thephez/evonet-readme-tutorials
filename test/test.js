/* eslint-disable no-undef */
const assert = require('assert');
const ConnectToEvonet = require('../0-connecting-to-evonet');
const CreateAndFundWallet = require('../1-create-and-fund-wallet');
const RetrieveDocuments = require('../Document/2-retrieve-documents');

describe('Tutorial Code Test', () => {
  describe('0-connecting-to-evonet.js', () => {
    it('should connect to Evonet without error', async () => {
      const result = await ConnectToEvonet();
      assert.ok(result);
    }).timeout(10000);
  });

/*   describe('1-create-and-fund-wallet.js', () => {
    it('should create a wallet and get an unused address without error', async () => {
      const result = await CreateAndFundWallet();
      assert.ifError(result);
    }).timeout(10000);
  }); */

/*   describe('Document/2-retrieve-documents.js', () => {
    it('should retrieve document(s) from Evonet without error', async () => {
      const result = await RetrieveDocuments();
      assert.ifError(result);
    }).timeout(10000);
  }); */
});
