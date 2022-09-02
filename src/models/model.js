module.exports = (sequelize, Sequelize) => {
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

    Bank.hasOne(User, {
        foreignKey: "bankID", // change column name
        sourceKey: "id", // change the referenced column
        uniqueKey: "users_FK", // foreign key constraint name
        onDelete: "RESTRICT", // ON DELETE config
        onUpdate: "RESTRICT", // ON UPDATE config
        constraints: false, // remove ON DELETE and ON UPDATE constraints
    });

    Employee.hasOne(User, {
        foreignKey: "users_FK_1", // change column name
        sourceKey: "id", // change the referenced column
        uniqueKey: "users_FK_1", // foreign key constraint name
        onDelete: "RESTRICT", // ON DELETE config
        onUpdate: "RESTRICT", // ON UPDATE config
        constraints: false, // remove ON DELETE and ON UPDATE constraints
    });

    User.belongsTo(Employee)
    User.belongsTo(Bank)

    // User.associate = function(models) {
    //     User.hasOne(models.Bank, {
    //       foreignKey: 'bankID',
    //       as: 'bankID'
    //     });
    // };
    // Bank.associate = function(models) {
    //     Position.belongsTo(models.User, {
    //         foreignKey: 'bankID',
    //         as: 'bankID2',
    //         onDelete: 'CASCADE'
    //     });
    // };
    // User.associate = function(models) {
    //     console
    //     User.hasOne(models.employee, {
    //       foreignKey: 'empID',
    //       as: 'empID'
    //     });
    // };
    // Employee.associate = function(models) {
    //     Employee.belongsTo(models.User, {
    //         foreignKey: 'empID',
    //         as: 'empID',
    //         onDelete: 'CASCADE'
    //     });
    // };

    return [User, Bank, Employee];
};

