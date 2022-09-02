const controller = require('./controller');
const employeeService = require('../services/employeeService');
const db = require("../database/db");

const employeeServiceObj = new employeeService(db.user);
class employeeController extends controller {

    constructor(service) {
        super(service);
    }
}
module.exports = new employeeController(employeeServiceObj)