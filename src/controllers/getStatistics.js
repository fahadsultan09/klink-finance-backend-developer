const data = require('./../../data/payroll.json')
const { count, sum, average, averageByPosition } = require('./../common/helper')
module.exports = (req, res) => {
    if (!data.length) {
        return res.status(200).send("NO DATA FOUND");
    }
    const response = {
        "number_of_employees":          count(data) || "",
        "sum_of_paid_salaries":         sum(data) || "",
        "average_salary":               average(this.number_of_employees, this.sum_of_paid_salaries) || "",
        "average_salary_by_position":   averageByPosition(data) || {}
    }
    return res.status(200).send(response);
};
