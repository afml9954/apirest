'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Production extends Model {}

    Production.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'production',
    });
    return Production;
};
