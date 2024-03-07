const Pet = require('./pet-profile');
const Owner = require('./ownerProfile');

Owner.hasMany(Pet, {
    foreignKey: "owner_id",
});
Pet.belongsTo(Owner, {
    foreignKey: "owner_id",
    onDelete: "cascade",
    
});

module.exports = { Pet, Owner };