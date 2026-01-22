//import the driver ---mongoose

const mongoose = require('mongoose')

const Data = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("credentials",Data);