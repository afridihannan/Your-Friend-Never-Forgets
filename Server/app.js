const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
//process.env.PORT

dotenv.config({path:'./.env'});
app.use(express.json());
app.use(require('./Routes/auth.js'));

// console.log(DB);
// console.log(process.env.PORT);

//Database Connection
const DB=process.env.DB;
mongoose.connect(DB,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection Successfull");
}).catch((err)=>{
    console.log(err);
})
