const { Pet } = require('../models');

const petdata = [
  {
    firstName: "Fergus",
    lastName: "Medrano",
    age: 11,
    species: "Dog",
    weight: 38,
    neutered: true,
    vaccinationNeeded: false,
    owner_id: 1
  },
  {
    firstName: "Ziggy",
    lastName: "Fuller",
    age: 6,
    species: "Dog",
    weight: 90,
    neutered: true,
    vaccinationNeeded: true,
    owner_id: 2
  },
  {
    firstName: "Jack",
    lastName: "Leal",
    age: 8,
    species: "Dog",
    weight: 34,
    neutered: false,
    vaccinationNeeded: true,
    owner_id: 3
  },
  {
    firstName: "Chloe",
    lastName: "Leal",
    age: 6,
    species: "Dog",
    weight: 14,
    neutered: false,
    vaccinationNeeded: false,
    owner_id: 3
  },
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;