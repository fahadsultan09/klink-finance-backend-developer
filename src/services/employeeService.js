
const service = require('./service');
const { employee, bank, sequelize } = require("../database/db");
class employeeService extends service {
    constructor(model) {
        super(model);
        this.model = model
        this.fetchData = this.fetchData.bind(this);
    }
    async fetchData() {
        const response = await this.model.findOne({
            include:
                [
                    {
                        model: employee,
                        attributes:
                            [
                                [sequelize.fn('sum', sequelize.col('salary')), 'sum_of_paid_salaries'],
                                [sequelize.fn('avg', sequelize.col('salary')), 'average_salary'],
                            ],
                        raw: true

                    }
                ],
            attributes:
                [
                    [sequelize.fn('count', sequelize.col('userid')), 'number_of_employees']
                ],
            raw: true
        });

        // const response = await this.model.findAll({
        //     duplicating: false,
        //     attributes: [
        //       [
        //         sequelize.fn(
        //           'SUM',
        //           sequelize.col('employees.salary')
        //         ),
        //         'dueAmount'
        //       ],
        //     ],
        //     include: [
        //       {
        //         model: employee,
        //         attributes: ['salary'],
        //       }
        //     ],
        //     group: ['employee.position']
        //   })
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================",response)
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        console.log("response ======================")
        return {
            error: false,
            statusCode: 200,
            data: response
        }
    }
    async fetchOutput() {
        const response = await employee.findAll({
            attributes:
                [
                    'position',
                    [sequelize.fn('avg', sequelize.col('salary')), 'average_salary'],
                ],
            group: ["employee.position"],
            raw: true
        });

        console.log("Response ===============>",response)
        return {
            error: false,
            statusCode: 200,
            data: response
        }
    }
}

module.exports = employeeService