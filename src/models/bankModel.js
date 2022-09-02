module.exports = (sequelize, Sequelize) => {
    const Bank = sequelize.define("bank", {
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

    return Bank;
};

