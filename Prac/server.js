import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import hospitalRouter from './routes/hospitalRoutes.js';

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/").then(()=>console.log("database connected")).catch((error)=>console.log(error));

app.use('/',hospitalRouter);

app.listen(7007,()=>{
    console.log("server is running on 7007");
})
