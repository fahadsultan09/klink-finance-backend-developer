var express = require('express');
var router = express.Router();
const employeeController = require("../controllers/employeeController.js");

router.route('/employee').get(employeeController.get);
router.route('/employee').post(employeeController.insert);
router.route('/employee').put(employeeController.update);
router.route('/employee').delete(employeeController.delete);

module.exports = router;