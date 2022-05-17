const sequelize = require('../util/database');
const Sequilze = require('sequelize');

const Order = sequelize.define('order', {
    id: {
        type: Sequilze.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    orderId: {
        type: Sequilze.STRING,
        allowNull: false
    },
    status: {
        type: Sequilze.STRING,
    },
    paymentId: {
        type: Sequilze.STRING,
    },

});


module.exports = Order;