const { User } = require("../models");

const userdata = [
  {
    name: "User",
    email: "user@vettech.com",
    password: "Password123"
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;