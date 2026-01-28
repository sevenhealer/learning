const express = require('express');
const userRouter = express.Router();
const User = require('../config/zod')
const userModel = require('../models/userModel')

userRouter.post('/signup', async (req, res) => {
    const { username, password, name } = req.body;
    try {
        const parsingResult = User.parse({ username, password, name })
        if (parsingResult) {
            const findResult = await userModel.findOne({ username })
            if (findResult) {
                res.json({
                    msg: "Username already exist"
                })
            }
            const createResult = await userModel.create({ username, password, name })
            if (createResult) {
                return res.json({
                    msg: "Created Successfully"
                })
            }
            return res.json({
                msg: "Creation in DB failed"
            })
        }
    }
    catch (e) {
        return res.send(e.message)
    }
});

userRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.json({ message: "all fields are required" });
    if (username && password) {

    }
});
module.exports = userRouter;