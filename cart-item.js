const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const cartItem = sequelize.define('CartItem',{
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
module.exports = cartItem;