const { Owner } = require('../models');

const ownerdata = [
  {
    firstName: "Derek",
    lastName: "Medrano",
    age: 25,
    phoneNumber: "15551234567",
    homeAddress: "123 Peekaboo St.",
  },
  {
    firstName: "Sara",
    lastName: "Fuller",
    age: 28,
    phoneNumber: "19638527410",
    homeAddress: "456 Happy Rainbows Ave.",
  },
  {
    firstName: "Efren",
    lastName: "Leal",
    age: 28,
    phoneNumber: "12813308004",
    homeAddress: "420 Elm St.",
  }
];

const seedOwners = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwners;