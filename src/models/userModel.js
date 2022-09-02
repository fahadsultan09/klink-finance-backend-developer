module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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
        }
    }, {
        timestamps: false
    });
    User.associate = models => {
        User.hasOne(models.Employee);
        User.hasOne(models.Bank);
    };
    return User;
};

