// const mysql = require("mysql");
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

//Models
db.user = require("../models/userModel")(sequelize, Sequelize);

module.exports = db;


// st env = require("./env.js");s

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(env.database, env.username, env.password, {
//   host: env.host,
//   dialect: env.dialect,
//   operatorsAliases: false,
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// //Models
// db.book = require("../model/book.model.js")(sequelize, Sequelize);

// module.exports = db;