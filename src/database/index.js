const sequelize = require("../models/db.js");
const Sequelize = require('sequelize');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userModel = require("../models/user.model.js")(sequelize, Sequelize);
module.exports = db;