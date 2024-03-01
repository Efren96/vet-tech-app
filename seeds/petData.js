const { Pet } = require('../models');

const petdata = [
  {
  
  }
];

const seedPets = () => User.bulkCreate(petdata);

module.exports = seedPets;