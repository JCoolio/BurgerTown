
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
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
        // ,
        // createdAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        // }

        // },
        //     {
        //         classMethods: {
        //             associate: function (models) {
        //                 Customer.hasMany(models.Burger,
        //                     {
        //                         foreignKey: {
        //                             allowNull: true
        //                         }
        //                     });

        //             }

        //         }
    });


    return Customer;
};

