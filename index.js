const express=require('express'); 
const app=express(); 
const adminRouter=require('./routes/adminRouter') ;
const userRouter=require('./routes/userRouter');
app.use(express.json());   
const PORT=3000; 
app.use('/admin',adminRouter);  
app.use('/user',userRouter);
app.listen(PORT,()=>{ 
    console.log(`app running on ${PORT}`);
});