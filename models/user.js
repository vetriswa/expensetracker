const sequelize = require('../util/database');
const Sequilze = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: Sequilze.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequilze.STRING,
        allowNull: false
    },
    email: {
        type: Sequilze.STRING,
        allowNull: false
    },
    phoneno: {
        type: Sequilze.BIGINT,
        allowNull: false
    },
    password: {
        type: Sequilze.STRING,
        allowNull: false
    },

    isPremium: {
        type: Sequilze.BOOLEAN,
    }

});


module.exports = User;