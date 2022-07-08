const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const orderItem = sequelize.define('orderItem',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:true,
        autoIncrement:true
    },
    quantity:{
        type:Sequelize.INTEGER
    }
});
module.exports = orderItem;