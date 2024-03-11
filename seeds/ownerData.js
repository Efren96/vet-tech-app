const { Owner } = require('../models');
const { faker } = require('@faker-js/faker');

// initialize an empty array to store the objects
const ownerdata = [];

// define the number of objects you want to create
const totalOwners = 20; // change this to the desired number of objects

// create the objects and add them to the array
for (let i = 0; i < totalOwners; i++) {
  const newOwner = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 80 }),
    phoneNumber: faker.phone.number(),
    homeAddress: faker.location.streetAddress(),
  };
  ownerdata.push(newOwner);
}

const seedOwners = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwners;