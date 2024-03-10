const { Pet } = require('../models');

const { faker } = require('@faker-js/faker');
// faker.seed(1);

const randomLastName = faker.person.lastName();

const randomAge = faker.number.int({ min: 1, max: 10 });
const randomDogWeight = faker.number.int({ min: 10, max: 120 });
const randomCatWeight = faker.number.int({ min: 5, max: 20 });

const randomBool = faker.datatype.boolean();
const randomOwner = faker.number.int({ min: 1, max: 10 });


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
  {
    firstName: "Rex",
    lastName: randomLastName,
    age: randomAge,
    species: "Dog",
    weight: randomDogWeight,
    neutered: randomBool,
    vaccinationNeeded: randomBool,
    owner_id: randomOwner
  },
  {
    firstName: "Pickles",
    lastName: randomLastName,
    age: randomAge,
    species: "Cat",
    weight: randomCatWeight,
    neutered: randomBool,
    vaccinationNeeded: randomBool,
    owner_id: randomOwner
  },
  {
    firstName: "Rover",
    lastName: randomLastName,
    age: randomAge,
    species: "Dog",
    weight: randomDogWeight,
    neutered: randomBool,
    vaccinationNeeded: randomBool,
    owner_id: randomOwner
  },
  {
    firstName: "Bunyon",
    lastName: randomLastName,
    age: randomAge,
    species: "Cat",
    weight: randomCatWeight,
    neutered: randomBool,
    vaccinationNeeded: randomBool,
    owner_id: randomOwner
  },
  {
    firstName: "Rosie",
    lastName: randomLastName,
    age: randomAge,
    species: "Dog",
    weight: randomDogWeight,
    neutered: randomBool,
    vaccinationNeeded: randomBool,
    owner_id: randomOwner
  },
  {
    firstName: "Shadow",
    lastName: randomLastName,
    age: randomAge,
    species: "Cat",
    weight: randomCatWeight,
    neutered: randomBool,
    vaccinationNeeded: randomBool,
    owner_id: randomOwner
  },
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;