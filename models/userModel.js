const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, min: 3, unique: true },
    password: { type: String, required: true, min: 8 },
    name: { type: String, min: 3 },
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel
