const Pet = require('./petProfile');
const Owner = require('./ownerProfile');
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