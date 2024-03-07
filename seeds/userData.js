const { User } = require("../models");

const userdata = [
  {
    name: "Master",
    email: "master@vettech.com",
    password: "BarkMeow123"
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;