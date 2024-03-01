const { Owner } = require('../models');

const ownerdata = [
  {
  
  }
];

const seedOwners = () => User.bulkCreate(ownerdata);

module.exports = seedOwners;