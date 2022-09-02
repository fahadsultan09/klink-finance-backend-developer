const service = require('./service')
class employeeService extends service {
    constructor(model) {
        super(model);
    }
}

module.exports = employeeService