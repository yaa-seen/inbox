# About
Inbox is a simple ethereum project to set message and update it in in the ethereum network,
it's built on truffle framework and it can be used for learning  ethereum blockchain.

# Used librairies and dependencies 

| Library | version  |
| ------- | --- |
| @truffle/hdwallet-provider | 1.7.0 |
|ganache-cli | 6.12.2 |
|mocha | 9.1.4|
|solc | 0.4.26 |
|web3 | 1.6.1 |

# Install and run the project 
Make sure to install all deepndencies using : 
```console
npm install
```
Then you can run the command bellow to see the objects that composes our contract 'inbox'
```console
node compile.js
```
You are supposed to see something like this : 
<img src="compilation outputs/compilation-output.png"/>

There is 3 tests, to run those tests, tap the command
```console
npm run test
```
This will give : 
![alt text](https://github.com/yaseenix/inbox/blob/master/compilation%20outputs/test_output.png?raw=true)

