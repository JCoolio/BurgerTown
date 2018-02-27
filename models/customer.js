
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            customer_name: {
                type: DataTypes.STRING(30),
                allowNull: false
            }
        });

    
    return Customer;
};

