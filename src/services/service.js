class Service {
    constructor(model) {
        this.model = model;
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async get() {
        try {
            const response = await this.model.findAll();
            console.log("****** response ****** ", response)
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
        try {

            const response = await sequelize.transaction(async (t) => {

                const Employee = await Employee.create({
                    "position": payload.position,
                    "salary": payload.salary,
                    "crypto": payload.crypto
                }, { transaction: t });

                const Bank = await Bank.create({
                    "iban": payload.iban,
                    "bic": payload.bic
                }, { transaction: t });

                const User = await User.create({
                    "username": payload.username,
                    "email": payload.email,
                    "avatar": payload.avatar,
                    "password": payload.password,
                    "birthdate": payload.birthdate,
                    "registeredAt": payload.registeredAt,
                    "bankID": Bank.id,
                    "employeeID": Employee.id
                }, { transaction: t });


                return {
                    ...User,
                    "Employee": Employee,
                    "Bank": Bank,
                };
            });
            console.log("==============================******====================")
            return {
                error: false,
                statusCode: 202,
                response
            };
        } catch (error) {
            console.error("error", error);
            return {
                error: true,
                statusCode: 500,
                message: error.errmsg || "Not able to create item",
                errors: error.errors
            };
        }
    }

    async update(id, payload) {
        try {

            const response = await sequelize.transaction(async (t) => {

                const Employee = await Employee.create({
                    "position": payload.position,
                    "salary": payload.salary,
                    "crypto": payload.crypto
                }, { transaction: t });

                const Bank = await Bank.create({
                    "iban": payload.iban,
                    "bic": payload.bic
                }, { transaction: t });

                const User = await User.create({
                    "username": payload.username,
                    "email": payload.email,
                    "avatar": payload.avatar,
                    "password": payload.password,
                    "birthdate": payload.birthdate,
                    "registeredAt": payload.registeredAt,
                    "bankID": Bank.id,
                    "employeeID": Employee.id
                }, { transaction: t });


                return {
                    ...User,
                    "Employee": Employee,
                    "Bank": Bank,
                };
            });
            console.log("==============================******====================")
            return {
                error: false,
                statusCode: 202,
                response
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                error
            };
        }
    }


    async delete(id) {
        // try {
        //     let item = await this.model.findByIdAndDelete(id);
        //     if (!item)
        //         return {
        //             error: true,
        //             statusCode: 404,
        //             message: "item not found"
        //         };

        //     return {
        //         error: false,
        //         deleted: true,
        //         statusCode: 202,
        //         item
        //     };
        // } catch (error) {
        //     return {
        //         error: true,
        //         statusCode: 500,
        //         error
        //     };
        // }
    }
}

export default Service;