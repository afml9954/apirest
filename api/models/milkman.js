'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MilkMan extends Model {
        static associate(models) {
            MilkMan.hasMany(models.detailsmilk);
        }
    }

    MilkMan.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        full_name: DataTypes.STRING(40),
        user: DataTypes.STRING(15),
        password: DataTypes.STRING,
        photo: DataTypes.STRING(100),
    }, {
        sequelize,
        modelName: 'milkman',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return MilkMan;
};
