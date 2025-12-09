const express = require("express");
const http = require("http")
const app = express();

// route
app.use(express.json());//middleware
app.get("/", (req, res) => {
    console.log("This is backend");
    res.send("Hello from backend server!");
});
 
app.post("/post",(req,res)=>{
    let varb=req.body;
    console.log("posted data", varb);
    res.send("data added")          

})
app.put("/putt",(req,res)=>{
    let store=req.body;
    console.log("put data(update)",store);
    res.send("put data");

})
app.delete("/deleteData",(req,res)=>{
    let del=req.body;
    console.log("deleting ",del);
    res.send("id:1 deleted");
})
// start server
const server = http.createServer(app)

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
