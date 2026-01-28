const express = require('express');
const userRouter = express.Router();
const { usermapcheck, usercheck, mapcheck, user } = require('../global/index');
userRouter.post('/signup', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password)
        return res.json({ message: "all fields are required" });
    if (name && password) {
        if (user.has(name))
            return res.json({ message: "Username already exists" });
        else {
            user.set(name, password);
            return res.json({ message:"user signedup successfully"});
        }
    }
});

userRouter.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password)
        return res.json({ message: "all fields are required" });
    if (name && password)
        if (usermapcheck(name) && usercheck(name,password))
            return res.json({ message: "Login succesful" });
    return res.json({ message: "Login unsuccesful" });
});
module.exports = userRouter;