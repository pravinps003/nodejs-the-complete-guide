const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'pravin@P$003', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
