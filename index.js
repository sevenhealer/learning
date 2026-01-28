const express=require('express'); 
console.log("hello")
const connectDB = require('./config/db')
const app=express(); 

console.log(__dirname + "index.html")

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

const adminRouter = require('./routes/adminRouter') ;
const userRouter = require('./routes/userRouter');
app.use(express.json());   
const PORT=3000; 
app.use('/admin',adminRouter);  
app.use('/user',userRouter);
app.listen(PORT,()=>{ 
    console.log(`app running on ${PORT}`);
});
connectDB()