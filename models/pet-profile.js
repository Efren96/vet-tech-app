const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model { }

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        species: {
            type: DataType.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        neutered: {
            type: DataType.BOOLEAN,
            allowNull: true
        },
        vacciationNeeded: {
            type: DataType.BOOLEAN,
            allowNull: true
        },
        owner_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'owner',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);
module.exports = Pet;