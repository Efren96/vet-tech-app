const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owner extends Model { }

Owner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        homeAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'pets',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner',
    }
);
module.exports = Owner;