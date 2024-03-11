const Pet = require('./petProfile');
const Owner = require('./ownerProfile');
const User = require("./User")

// creates relationships between models
Owner.hasMany(Pet, {
    foreignKey: "owner_id",
    onDelete: "cascade",
});

Pet.belongsTo(Owner, {
    foreignKey: "owner_id",
    onDelete: "cascade",
});

module.exports = { Pet, Owner, User };