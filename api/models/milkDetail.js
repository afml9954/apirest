'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MilkDetail extends Model {
        static associate(models) {
            MilkDetail.belongsTo(models.milkman)
        };
    }

    MilkDetail.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'detailsmilk',
    });
    return MilkDetail;
};
