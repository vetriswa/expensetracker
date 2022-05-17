const User = require('../models/user');
const jwt = require('jsonwebtoken');
const AWS = require("aws-sdk");


exports.addExpense = async(req, res, next) => {

    console.log("Getting inside addExpense Function...");
    console.log('addExpense req body value >> ', `${req.body.body.description}`, req.body.body.amount, `${req.body.body.category}`);


    try {

        const expense = await req.user.createExpense({ "description": req.body.body.description, "amount": req.body.body.amount, "category": req.body.body.category })
        res.status(200).json({ message: "Expense added successfully" });


    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error adding expense" });
    }

}

exports.downloadExpense = async(req, res, next) => {

    console.log("Inside download Expenses");

    try {

        const expenses = await req.user.getExpenses();
        console.log('expenses in downloadExpenses>>> ', expenses);
        const stringifiedExpenses = JSON.stringify(expenses);

        const fileName = `Expense-${req.user.id}-${new Date()}.txt`;

        const fileUrl = await uploadToS3(stringifiedExpenses, fileName);

        console.log("file URL >>> ", fileUrl);

        await req.user.createExpensefile({
            url: fileUrl,
            name: fileName,
        });

        res.status(200).json({ success: true, url: fileUrl });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
}


const uploadToS3 = (data, name) => {
    console.log('inside upload to S3 >>>> ')

    const s3 = new AWS.S3({
        accessKeyId: process.env.IAM_USERID,
        secretAccessKey: process.env.IAM_SECRET_KEY,
    });

    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: name,
        Body: data,
        ACL: "public-read",
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data.Location);
        });
    });

}


exports.getExpenseFilesFromDB = async(req, res, next) => {
    console.log("inside get expense files >>> ")

    console.log("req user getExpenseFile >>> ", req.user);

    try {
        const files = await req.user.getExpensefiles();
        // console.log("files inside get expense files >>> ", files);
        res.status(200).json({ success: true, files: files });
    } catch (err) {
        console.log(err);
        res.json({ success: false, error: err });

    }
}