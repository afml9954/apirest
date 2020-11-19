'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Unit extends Model {
        static associate(models){
            Unit.hasMany(models.detailsmilk, {
                foreignKey:'unit_id',
                as:'detail_milk_unit',
            });
            Unit.hasMany(models.production, {
                foreignKey:'unit_id',
                as:'production_unit',
            });
            Unit.hasMany(models.supply, {
                foreignKey:'unit_id',
                as:'supply_unit',
            });
        }
    }

    Unit.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: DataTypes.STRING(15),
        symbol: DataTypes.STRING(5),
        categorization: DataTypes.STRING(10),
    }, {
        sequelize,
        modelName: 'unit',
    });
    return Unit;
};
