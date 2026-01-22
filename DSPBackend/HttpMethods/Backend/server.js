const express = require('express');
const cors = require('cors');

const router = require('./routes/myroute');
const { default: mongoose } = require('mongoose');
const Credentials=require('./Models/credentials.js')

const app = express();

// middlewares
app.use(cors());

app.use(express.json());

// routes
mongoose.connect("mongodb://localhost:27017/").then(res=>{
    console.log("Db is connected")
})
.catch((err)=>{
    console.log(err)
})
app.use('/api', router);

app.listen(7007, () => {
    console.log("Server running on port 7007");
});

