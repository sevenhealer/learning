const express = require('express')
const { admin , mapCheck, passCheck } = require('../global/index')

const adminRouter = express.Router()

adminRouter.post('/signup', (req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        res.json({
            msg: "Invalid Format"
        })
    }
    if(username){
        const result = mapCheck(username)
    if(result){
        res.json({
            res: "User Already Exist"
        })
    }
    if(!result){
        admin.set(username, password)
        res.json({
            msg: "Signup Complete"
        })
    }
}
})

adminRouter.post('/signin' , (req, res) => {
    const {username, password} = req.body
    if(!username || !password){
        res.json({
            msg: "Invalid Format"
        })
    }
    if(username && password){
        console.log({username, password})
        const result = passCheck(username, password)
        console.log(result)
        if(result){
            return res.json({
                msg: "Login Successful"
            })
        }
        return res.json({
            msg: "Invalid Login"
        })
    }
})

module.exports = adminRouter