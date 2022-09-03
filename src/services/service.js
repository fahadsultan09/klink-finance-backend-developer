
class Service {
    constructor(model) {

        this.model = model;
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

    }

    async get(query = {}) {
        try {
            const response = await this.model.findAll();
            return {
                error: false,
                statusCode: 200,
                data: response
            }
        } catch (error) {
            console.error(error.stack)
            console.error(error.message)
            return {
                error: true,
                statusCode: 500,
                errors: error
            };
        }
    }

    async insert(data) {
         /**
         * NOT IMPLEMENTED
         */    }

    async update(id, payload) {
        /**
         * NOT IMPLEMENTED
         */
    }


    async delete(id) {
        /**
         * NOT IMPLEMENTED
         */
    }

}

module.exports = Service