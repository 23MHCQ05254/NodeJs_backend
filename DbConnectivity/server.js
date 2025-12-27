const express=require("express");
const {MongoClient}=require("mongodb")
const dotEnv=require('dotenv')

const app=express();

dotEnv.config();
MongoClient.connect(process.env.Mongo_URI)
.then((client)=>{
    console.log("Mongodb connected successfully")
    const db = client.db();   // important
})
.catch((error)=>{
    console.log("Connection failed", error)
}) 

const PORT= 5000
// console.log(process.env) 
  
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})