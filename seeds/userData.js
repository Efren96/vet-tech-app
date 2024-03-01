const { User } = require('../models');

const userdata = [
  {
  
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;