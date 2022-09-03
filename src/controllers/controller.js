class controller {
    constructor(service) {
        this.service = service;
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

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
            const getData = await this.service.get(req.query); // FETCH DATA
            this.response.data = getData.data; // UPDATE RESPONSE OBJECT
            if (getData.error) return res.status(getData.statusCode).send(getData); // RETURN IN CASE ERROR
            return res.status(200).send(this.response); // RET ALL RECORDS
        } catch (error) {


        }
    }

    async insert(req, res) {
        /**
         * NOT IMPLEMENTED
         */
    }

    async update(req, res) {
        /**
         * NOT IMPLEMENTED
         */
    }

    async delete(req, res) {
        /**
         * NOT IMPLEMENTED
         */
    }
}

module.exports = controller
