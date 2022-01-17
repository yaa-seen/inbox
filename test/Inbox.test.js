const assert = require('assert');
const ganache = require('ganache-cli');

//This a constructor function this why is put in capital 'W'
const Web3  = require('web3');

//Create an instance of web3 so that it comunicate with ganache
const web3 = new Web3(ganache.provider());

//Here we import the bytecode of contracts
const {interface, bytecode} = require('../compile');

let INITIAL_MESSAGE = ['Hey web3 :)'];
let accounts;

beforeEach( async() => {
  /**Get a list of accounts*/
  accounts = await web3.eth.getAccounts();

  // Use of those accounts to deploy contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface)) // Hey there is a contract out there this has this interface
      .deploy({data: bytecode, arguments: INITIAL_MESSAGE}) //We want to deploy a new copy of this contracts
      .send({from: accounts[0], gas: '1000000'}); //Send triggers communication from web3 to the network
});

describe('Inbox', () => {
  //Make sure that the contract is deployed correctly
  it('Deploy a contract', () => {
    assert.ok(inbox.options.address);
  });

  //Test the default msg assigned
  it('Has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });

  //Test if we can change the given message
  it('Can change the message', async () => {
    await inbox.methods.setMessage('bye everybody :(')
                .send({from: accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye everybody :(');
  });
});
