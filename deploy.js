// deploy code will go here
const hdWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js');

const provider = new hdWalletProvider(
    'https://rinkeby.infura.io/v3/781f8be6361e4c069b8bdaf7a3308d1c');

const web3 = new Web3(provider);

//This function make it easy to use asynchronous code
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi web3 :)']})
         .send({from: accounts[0], gas: '1000000'});
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
