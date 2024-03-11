const { Pet } = require('../models');
const { faker } = require('@faker-js/faker');
// faker.seed(1);

// initialize an empty array to store the objects
const petdata = [];

// define the number of objects you want to create
const totalCats = 20; // Change this to the desired number of objects
const totalDogs = 20; // Change this to the desired number of objects

// create the objects and add them to the array
for (let i = 0; i < totalDogs; i++) {
  const newDog = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 1, max: 10 }),
    species: "Dog",
    weight: faker.number.int({ min: 10, max: 120 }),
    neutered: faker.datatype.boolean(),
    vaccinationNeeded: faker.datatype.boolean(),
    owner_id: faker.number.int({ min: 1, max: 20 })
  };
  petdata.push(newDog);
}

for (let i = 0; i < totalCats; i++) {
  const newCat = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 1, max: 10 }),
    species: "Cat",
    weight: faker.number.int({ min: 5, max: 20 }),
    neutered: faker.datatype.boolean(),
    vaccinationNeeded: faker.datatype.boolean(),
    owner_id: faker.number.int({ min: 1, max: 20 })
  };
  petdata.push(newCat);
}

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;