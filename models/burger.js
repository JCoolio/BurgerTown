
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            burger_name: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },

        });

    
    return Burger;
};

