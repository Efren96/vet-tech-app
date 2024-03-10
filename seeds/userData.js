const { User } = require("../models");

const userdata = [
  {
    name: "User",
    email: "user@vettech.com",
    password: "BarkMeow123"
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;