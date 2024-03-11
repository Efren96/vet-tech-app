const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedOwners = require('./ownerData');
const seedPets = require('./petData');

// logic to seed all data
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedOwners();

  await seedPets();

  process.exit(0);
};

seedAll();
