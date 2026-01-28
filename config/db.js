const mongoose = require("mongoose");

async function connectDB() {
    const result = await mongoose.connect("mongodb+srv://user4:2LkKW1SazMpRhDMv@cluster0.glxr7.mongodb.net/learning")
    if(!result){
        console.log("Connection failed")
    }
    else{
        console.log("Connected")
    }
}

module.exports = connectDB