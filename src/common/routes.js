var express = require('express');
var router = express.Router();
const employeeController = require("../controllers/employeeController.js");

router.route('/employee').get(employeeController.get);

module.exports = router;