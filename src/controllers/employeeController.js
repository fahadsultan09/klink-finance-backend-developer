const controller = require('./controller');
const employeeService = require('../services/employeeService');
const db = require("../database/db");
const { map, createOutput  , convertArrayToObject} = require('./../common/utils/dataMappings')

const employeeServiceObj = new employeeService(db.user);

class employeeController extends controller {
    constructor(service) {
        super(service);
        this.service = service
        this.fetchData = this.fetchData.bind(this);
        this.fetchOutput = this.fetchOutput.bind(this);
        this.getOutput = this.getOutput.bind(this);
        this.response = {
            success: true,
            responseCode: "200",
            message_en: "The transaction was completed successfully.",
            message_ur: "The transaction was completed successfully.",
            data: {}

        };
    }
    async fetchData(req, res) {
        try {
            const getData = await this.service.fetchData(req.query);
            this.response.data = getData.data;
            if (getData.error) return res.status(getData.statusCode).send(getData);
            return getData.data;
        } catch (error) {
            
        }
    }
    async fetchOutput(req, res) {
        try {

            const getData = await this.service.fetchOutput(req.query);
            this.response.data = getData.data;
            if (getData.error) return res.status(getData.statusCode).send(getData);
            
            return convertArrayToObject(getData.data, 'position','average_salary')
        } catch (error) {
            
        }
    }
    async getOutput(req, res) {
        try {
            let output = await this.fetchData(req, res)
            let result = await this.fetchOutput(req, res);            
            this.response.data = {
                ...output,
                "average_salary_by_position": result
            }
            
            return this.response
        } catch (error) {
            
        }
    }
}

module.exports = new employeeController(employeeServiceObj)