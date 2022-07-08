const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('Cart',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:true,
        autoIncrement:true
    }
});
module.exports = Cart;