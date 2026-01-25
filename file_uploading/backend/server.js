const express = require('express')
const path = require('path')
const cors = require('cors')
const fileRoutes = require('./routes/fileRoutes')


const app = express();


app.use(cors())                      // Allow React access
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/', fileRoutes)
 
app.listen(3000, () => 
    console.log("Server running nn port 3000")
)
