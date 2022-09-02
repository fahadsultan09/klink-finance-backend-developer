class controller {
    constructor(service) {

        this.service = service;
        this.get = this.get.bind(this);
        this.fetchRecords = this.fetchRecords.bind(this);
        this.fetchRecords2 = this.fetchRecords2.bind(this);
        // this.insert = this.insert.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);

        this.response = {
            success: true,
            responseCode: "200",
            message_en: "The transaction was completed successfully.",
            message_ur: "The transaction was completed successfully.",
            data: {}

        };
        this.responseFailure = {
            success: false,
            responseCode: "500",
            message_en: "Invalid Argument Passed.",
            message_ur: "Invalid Argument Passed.",
            data: {}
        };
    }



    async get(req, res) {
        try {
            
            const getData = await this.service.get(req.query);
            console.log("********************************************")
            console.log(getData.data)
            console.log("********************************************")
            this.response.data = getData.data;
            if (getData.error) return res.status(getData.statusCode).send(getData);
            return res.status(200).send(this.response);
        } catch (error) {
            console.log("ERROR============================", error)
        }
    }

    // async insert(req, res) {
    //     /// FOR VALIDATIONS
    //     //if request contains file object then add to body for validation and then using it in service
    //     if (req.file) {
    //         req.body.file = req.file;
    //     }
    //     req.body.lastModifiedDateTime = new Date();
    //     logger.info("schema " + config.schema[this.constructor.name]);
    //     const requestValidation = validations.verifySchema(
    //         config.schema[this.constructor.name],
    //         req.body
    //     );
    //     if (!requestValidation.success) {
    //         logger.error('error from request validation: %s' + JSON.stringify(requestValidation));
    //         return res.status(400).send(requestValidation);
    //     }

    //     let insertData = await this.service.insert(req.body,((req.originalUrl === CONFIG_URL_BUNDLE) ? {bundleOrder: -1,operatorName: 1} : null));
    //     this.response.data = insertData;

    //     if (insertData.error) return res.status(insertData.statusCode).send(insertData);
    //     return res.status(201).send(this.response);
    // }

    // async update(req, res) {
    //     //if request contains file object then add to body for validation and then using it in service
    //     if (req.file) {
    //         req.body.file = req.file;
    //     }
    //     req.body.lastModifiedDateTime = new Date();
    //     const requestValidation = validations.verifySchema(
    //         config.updateSchema[this.constructor.name],
    //         req.body
    //     );
    //     if (!requestValidation.success) {
    //         logger.error('error from request validation: %s' + requestValidation);
    //         return res.status(400).send(requestValidation);
    //     }
    //     const {
    //         id
    //     } = req.params;

    //     let updateData = await this.service.update(id, req.body,((req.route.path === CONFIG_URL_BUNDLE_EDIT) ? {bundleOrder: -1,operatorName: 1} : null));
    //     this.response.data = updateData;
    //     if (updateData.error) return res.status(updateData.statusCode).send(updateData);
    //     return res.status(202).send(this.response);
    // }

    // async delete(req, res) {
    //     const {
    //         id
    //     } = req.params;
    //     let deleteData = await this.service.delete(id,((req.route.path === CONFIG_URL_BUNDLE_EDIT) ? {bundleOrder: -1,operatorName: 1} : null));
    //     this.response.data = deleteData;
    //     if (deleteData.error) return res.status(deleteData.statusCode).send(deleteData);
    //     return res.status(202).send(this.response);
    // }

    async fetchRecords(req, res) {
        try {

            const getData = await this.service.fetchRecords(req.query);
            console.log("********************************************")
            console.log(getData.data)
            console.log("********************************************")
            this.response.data = getData.data;
            if (getData.error) return res.status(getData.statusCode).send(getData);
            return res.status(200).send(this.response);
        } catch (error) {
            console.log("ERROR============================", error)
        }
    }
    async fetchRecords2(req, res) {
        try {

            const getData = await this.service.fetchRecords2(req.query);
            console.log("********************************************")
            console.log(getData.data)
            console.log("********************************************")
            this.response.data = getData.data;
            if (getData.error) return res.status(getData.statusCode).send(getData);
            return res.status(200).send(this.response);
        } catch (error) {
            console.log("ERROR============================", error)
        }
    }

}

module.exports = controller
