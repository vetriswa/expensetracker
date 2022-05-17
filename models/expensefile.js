const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const ExpenseFile = sequelize.define("expensefile", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    }
});

module.exports = ExpenseFile;