'use strict';

module.exports = (sequelize, DataTypes) => {
    var leads = sequelize.define('leads',{
        id:{
            allowNull : false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        email:{
            allowNull: false,
            type: DataTypes.STRING
        }
    });
    return leads;
};