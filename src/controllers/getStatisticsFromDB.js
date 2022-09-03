const employeeController = require('./employeeController')
module.exports = async (req, res) => {
    let response = {
        "number_of_employees": "",
        "sum_of_paid_salaries": "",
        "average_salary": "",
        "average_salary_by_position": {}
    }

    const output = await employeeController.getOutput(req, res)
    const {
        "employee.number_of_employees": count,
        "employee.sum_of_paid_salaries": sum,
        "employee.average_salary": avg,
        "average_salary_by_position": averageByPosition,
    } = output.data

    response.number_of_employees = count
    response.sum_of_paid_salaries = sum
    response.average_salary = avg
    response.average_salary_by_position = averageByPosition
    
    return res.status(200).send(response);

};
