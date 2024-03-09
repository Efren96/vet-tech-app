const { Owner } = require('../models');


const { faker } = require('@faker-js/faker');
// faker.seed(1);

const randomName = faker.person.firstName();
const randomLastName = faker.person.lastName();

const randomAge = faker.number.int({ min: 18, max: 80 });

const randomPhone = faker.phone.number();
const randomAddress = faker.location.streetAddress();

const ownerdata = [
  {
    firstName: "Derek",
    lastName: "Medrano",
    age: 25,
    phoneNumber: "(1) 555-123-4567",
    homeAddress: "123 Peekaboo St.",
  },
  {
    firstName: "Sara",
    lastName: "Fuller",
    age: 28,
    phoneNumber: "(1) 963-852-7410",
    homeAddress: "456 Happy Rainbows Ave.",
  },
  {
    firstName: "Efren",
    lastName: "Leal",
    age: 28,
    phoneNumber: "(1) 281-330-8004",
    homeAddress: "420 Elm St.",
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
  {
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phoneNumber: randomPhone,
    homeAddress: randomAddress,
  },
];

const seedOwners = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwners;