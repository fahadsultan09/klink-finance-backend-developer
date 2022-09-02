module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            autoIncrement: false,
        },
        position: {
            type: Sequelize.STRING(100),
        },
        salary: {
            type: Sequelize.STRING(100),
        },
        crypto: {
            type: Sequelize.STRING(100),
        }
    }, {
        timestamps: false
    });

    return Employee;
};

