const express = require('express')
const adminRouter = require('./routes/adminRouter')

const app = express()

app.use(express.json())
app.use("/admin", adminRouter)

// app.get("/user", user)

app.listen(3000)