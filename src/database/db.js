const Sequelize = require('sequelize');
require('dotenv').config()

const { DB, DB_USER, DB_PASSWORD, HOST } = process.env

var sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
    host: HOST,
    port: 3306,
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

[user, bank, employee] = require("../models/model")(sequelize, Sequelize);

db.user = user
db.bank = bank
db.employee = employee
module.exports = db;