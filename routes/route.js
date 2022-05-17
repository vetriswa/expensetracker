const authController = require("../controllers/auth");
const expenseController = require("../controllers/expense");
const purchaseController = require("../controllers/purchase");
const userController = require("../controllers/user");
const verifyAuthController = require("../middleware/verifyAuth")
const verifyPremiumController = require("../middleware/verifyPremium")

const express = require('express');
const routes = express.Router();

routes.post('/signup', authController.checkuser, authController.signup);
routes.post('/login', authController.login);
routes.post('/addExpense', verifyAuthController.verifyAuth, expenseController.addExpense);
routes.get('/purchase/premiummembership', verifyAuthController.verifyAuth, purchaseController.createOrder);
routes.post('/purchase/updatetransactionstatus', verifyAuthController.verifyAuth, purchaseController.updateTransactioStatus);
routes.get('/getUserExpenses', verifyAuthController.verifyAuth, verifyPremiumController.checkUserHasPremium, userController.getUserExpenses);
routes.get('/checkPremium', verifyAuthController.verifyAuth, verifyPremiumController.checkUserHasPremium);
routes.get('/download', verifyAuthController.verifyAuth, expenseController.downloadExpense);
routes.get('/getexpensefile', verifyAuthController.verifyAuth, expenseController.getExpenseFilesFromDB);
routes.get('/getParticularUserExpenses/', verifyAuthController.verifyAuth, userController.getParticularUserExpenses);

module.exports = routes;