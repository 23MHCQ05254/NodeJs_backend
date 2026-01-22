const express = require('express');
const cors = require('cors');

const router = require('./routes/myroute.js');
const mongoose = require('mongoose')
const app = express();

// middlewares
app.use(cors());

app.use(express.json());

 // routes
mongoose.connect("mongodb://localhost:27017/").then(res => {
    console.log("Db is connected")
})
    .catch((err) => {
        console.log(err)
    })
app.use('/', router);

app.listen(7007, () => {
    console.log("Server running on port 7007");
});

