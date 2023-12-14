import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';



//env config
dotenv.config();


//mongoDB connection
connectDB();


//rest object
const app=express();


//middleware

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/',(req,res)=>{
    res.status(200).send({
        "message":"Node Server"
    })
});


app.get('/test',(req,res)=>{
    res.status(200).send({
        "message":"Node Server Test"
    })
});



//port
const PORT=process.env.PORT || 7000

//listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white)
})