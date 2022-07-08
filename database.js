const Sequelize  = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'Piyush@7498',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;