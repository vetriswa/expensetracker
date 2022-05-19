const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.verifyAuth = async(req, res, next) => {

    console.log('Getting inside the verify auth function >>> ');
    // console.log('verifyAuth req body value >> ', `${req.body.body.description}`, req.body.body.amount, `${req.body.body.category}`);

    // console.log('req body addExpense backend >>> ' , req.body);
    // console.log('req headers addExpense backend >>> ' , req.headers);
    // console.log('reqheaders verifyAuth backend >>> ', req.headers);

    // const reqHeader = JSON.stringify(req.reqHeader);
    // console.log('reqheaders  addExpense backend >>', reqHeader);
    // console.log('add expense from backend >>> ', description, amount, category);

    // const description = req.body.body.description;
    // const amount = req.body.body.amount;
    // const category = req.body.body.category;

    const token = req.headers.authorization;

    if (!token) {
        res.status(403).json({ message: "unauthorized Token" });
    }

    // console.log('token >>> ', token);
    // console.log('expense details >>> ', description, amount, category);
    try {

        // console.log("getting inside try block...")

        const decode = jwt.verify(token, process.env.TOKEN_SECRET);
        const id = decode.id;
        const user = await User.findByPk(decode.id);

        console.log('user >>> ', user);

        if (user) {
            req.user = user;
        }

        next();

    } catch (err) {
        res.status(404).json({ success: false, message: "Auth token invalid" });
    }

}