
const service = require('./service');
const { employee, bank, sequelize } = require("../database/db");
class employeeService extends service {
    constructor(model) {
        super(model);
        this.model = model
        this.fetchData = this.fetchData.bind(this);
        this.fetchOutput = this.fetchOutput.bind(this);
    }
    async fetchData() {
        try {
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
                        [sequelize.fn('count', sequelize.col('userid')), 'employee.number_of_employees']
                    ],
                raw: true
            });
            
            return {
                error: false,
                statusCode: 200,
                data: response
            }
        }
        catch(ex){
            console.error("**** ERROR ****",ex)
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

        
        return {
            error: false,
            statusCode: 200,
            data: response
        }
    }
}

module.exports = employeeService