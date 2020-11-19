'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Supply extends Model {c}

    Supply.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: DataTypes.STRING(50),
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'supply',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return Supply;
};
