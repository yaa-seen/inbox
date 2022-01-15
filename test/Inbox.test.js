const assert = require('assert');
const ganache = require('ganache-cli');

//This a constructor function this why is put in capital 'W'
const Web3  = require('web3');

//Create an instance of web3 so that it comunicate with ganache
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  /**Get a list of accounts*/
  web3.eth.getAccounts()
    .then(fetchAccounts => {
      console.log(fetchAccounts);
    });

  // Use of those accounts to deploy contracts

});

describe('Inbox', () => {
  it('Deploy a contract', () => {

  });
});
