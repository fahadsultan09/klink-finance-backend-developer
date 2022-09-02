const data = require('./../../data/payroll.json')
const { count, sum, average, averageByPosition } = require('./../common/helper')
module.exports = (req, res) => {
    let response = {
        "number_of_employees": "",
        "sum_of_paid_salaries": "",
        "average_salary": "",
        "average_salary_by_position": {}
    }
    if (!data.length) {
        res.status(405);
        res.send('Not implemented yet.');
    }
    response.number_of_employees = count(data)
    response.sum_of_paid_salaries = sum(data)
    response.average_salary = average(response.number_of_employees, response.sum_of_paid_salaries)
    response.average_salary_by_position = averageByPosition(data)


    return res.status(200).send(response);
};
