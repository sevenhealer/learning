const express = require('express');
const { admin, mapcheck, passcheck, link } = require('../global/index');
const adminRouter = express.Router();
adminRouter.post('/signup', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password)
        return res.json({ message: 'All fields are required' });
    if (name && password) {
        if (mapcheck(name))
            return res.json({ message: 'This username already exists' });
        else {
            admin.set(name, password);
            return res.json({
                message: 'Signup successful'
            });
        }
    }
});
         
adminRouter.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password)
        return res.json({ message: "all fields are required" });
    if (name && password) {
        if (mapcheck(name) && passcheck(name, password))
            return res.json({ message: "login successful" });
        else
            return res.json({ message: 'login unsuccesful' });
    }
});

adminRouter.post('/addlink', (req, res) => {
    const { name, password,arr} = req.body;
    if (!name || !password||!arr)
        return res.json({ message: "All fields are required" });
    if (name && password && arr.length>0) {
        if (mapcheck(name) && passcheck(name, password)) {
            link.set(name,req.body.arr);
            return res.json({ message: "added successful" });
        }
        else
            return res.json({ message: "Couldnt add in" });
    }
    return res.json({message:"couldnt add it in"}); 
});
// link.forEach((value, key) => {
//     console.log(key, value);
// });
module.exports = adminRouter;