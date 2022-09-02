const employeeController = require('./employeeController')
const { map, createOutput } = require('./../common/utils/dataMappings')
module.exports = async (req, res) => {
    let response = {
        "number_of_employees": "",
        "sum_of_paid_salaries": "",
        "average_salary": "",
        "average_salary_by_position": {}
    }

    const output = employeeController.getOutput(req,res)
    return res.status(200).send(response);

};
