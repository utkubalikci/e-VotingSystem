const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
  const candidateNames = ["KemalKilicdaroglu", "RTE", "SinanOgan", "MuharremInce"];
  deployer.deploy(Voting, candidateNames);
};
