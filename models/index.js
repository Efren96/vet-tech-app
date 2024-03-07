const Pet = require('./pet-profile');
const Owner = require('./owner-profile');
const User = require("./User")

Owner.hasMany(Pet, {
    foreignKey: "owner_id",
    onDelete: "cascade",
});

Pet.belongsTo(Owner, {
    foreignKey: "owner_id",
    onDelete: "cascade",
});

module.exports = { Pet, Owner, User };

// find one owner include pet