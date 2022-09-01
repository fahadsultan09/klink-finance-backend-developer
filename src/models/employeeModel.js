module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
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

