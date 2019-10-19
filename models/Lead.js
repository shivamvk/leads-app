'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('leads',{
        id:{
            allowNull : false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        email:{
            allowNull: false,
            type: Sequelize.STRING
        }
    });
};