var express = require('express');
var router = express.Router();
const employeeController = require("../controllers/employeeController.js");

// router.route('/employee').get(employeeController.get);
// router.route('/employee/fetch/id').post(employeeController.fetchData);
router.route('/employee').get(employeeController.get);
router.route('/employee/fetch').get(employeeController.fetchData);
router.route('/employee/fetch2').get(employeeController.fetchOutput);

module.exports = router;