var express = require('express');
var router = express.Router();
const employeeController = require("../controllers/employeeController.js");

// router.route('/employee').get(employeeController.get);
// router.route('/employee/fetch/id').post(employeeController.fetchRecords);
router.route('/employee').get(employeeController.get);
router.route('/employee/fetch').get(employeeController.fetchRecords);
router.route('/employee/fetch2').get(employeeController.fetchRecords2);

module.exports = router;