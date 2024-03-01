const { Pet } = require('../models');

const petdata = [
  {
    firstName: "Fergus",
    lastName: "Medrano",
    age: 11,
    species: "dog",
    weight: 38,
    neutered: true,
    vaccinationNeeded: false,
    owner_id: 1
  },
  {
    firstName: "Ziggy",
    lastName: "Fuller",
    age: 6,
    species: "dog",
    weight: 90,
    neutered: true,
    vaccinationNeeded: true,
    owner_id: 2
  },
  {
    firstName: "Jack",
    lastName: "Leal",
    age: 8,
    species: "dog",
    weight: 34,
    neutered: false,
    vaccinationNeeded: true,
    owner_id: 3
  },
  {
    firstName: "Chloe",
    lastName: "Leal",
    age: 6,
    species: "dog",
    weight: 14,
    neutered: false,
    vaccinationNeeded: false,
    owner_id: 3
  },
];

const seedPets = () => User.bulkCreate(petdata);

module.exports = seedPets;