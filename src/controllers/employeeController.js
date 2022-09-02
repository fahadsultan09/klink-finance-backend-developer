const controller = require('./controller');
const employeeService = require('../services/employeeService');
const db = require("../database/db");

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
            console.log("============== FETCH DATA ==============", getData.data)
            if (getData.error) return res.status(getData.statusCode).send(getData);
            return res.status(200).send(this.response);
        } catch (error) {
            console.log("ERROR============================>>>>>>>>>>>>>", error)
        }
    }
    async fetchOutput(req, res) {
        try {

            const getData = await this.service.fetchOutput(req.query);
            this.response.data = getData.data;
            if (getData.error) return res.status(getData.statusCode).send(getData);
            return res.status(200).send(this.response);
        } catch (error) {
            console.log("ERROR============================", error)
        }
    }
    async getOutput(req, res) {
        try {
            const data = []
            let output1 = await this.fetchData(req, res)
            // let output2 = await this.fetchOutput(req, res)
            console.log("============ map 1==============", output1)
            // console.log("============ map 2==============",output2.data)
            // const result = map(output2.data)
            // console.log("result========>",result)
            return data
        } catch (error) {
            console.log("ERROR============================>", error)
        }
    }
}

module.exports = new employeeController(employeeServiceObj)