const DummyToken = artifacts.require("DummyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DummyToken, 'DummyToken', 'DKN', 18, web3.utils.toWei('1000'));
};
