module.exports = (sequelize, Sequelize) => {
    // User SCHEMA DEFINED
    let User = sequelize.define("user", {
        userId: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            autoIncrement: false,
        },
        username: {
            type: Sequelize.STRING(100),
        },
        email: {
            type: Sequelize.STRING(100),
        },
        avatar: {
            type: Sequelize.STRING(100),
        },
        password: {
            type: Sequelize.STRING(100),
        },
        birthdate: {
            type: Sequelize.STRING(100),
        },
        registeredAt: {
            type: Sequelize.STRING(100),
        },
        employeeID: {
            allowNull: false,
            type: Sequelize.STRING(100),
            references: {
                model: 'employee',
                key: 'id'
            },
            onDelete: 'cascade'
        },
        bankID: {
            allowNull: false,
            type: Sequelize.STRING(100),
            references: {
                model: 'bank',
                key: 'id'
            },
            onDelete: 'cascade'
        }
    }, {
        timestamps: false
    });

    // Bank SCHEMA DEFINED
    let Bank = sequelize.define("bank", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            autoIncrement: false,
        },
        iban: {
            type: Sequelize.STRING(100),
        },
        bic: {
            type: Sequelize.STRING(100),
        }
    }, {
        timestamps: false
    });

    // EMPLOYEE SCHEMA DEFINED
    let Employee = sequelize.define("employee", {
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

    ///----------Models - Association Defined --------------///

    Bank.hasOne(User, {
        foreignKey: "bankID", // change column name
        sourceKey: "id", // change the referenced column
        uniqueKey: "users_FK", // foreign key constraint name
        onDelete: "RESTRICT", // ON DELETE config
        onUpdate: "RESTRICT", // ON UPDATE config
        constraints: false, // remove ON DELETE and ON UPDATE constraints
    });

    Employee.hasOne(User, {
        foreignKey: "employeeID", // change column name
        sourceKey: "id", // change the referenced column
        uniqueKey: "users_FK_1", // foreign key constraint name
        onDelete: "RESTRICT", // ON DELETE config
        onUpdate: "RESTRICT", // ON UPDATE config
        constraints: false, // remove ON DELETE and ON UPDATE constraints
    });

    User.belongsTo(Employee)
    User.belongsTo(Bank)

    return [User, Bank, Employee];
};

