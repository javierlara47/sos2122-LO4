const cool = require("cool-ascii-faces");
const express = require("express");
const app = express();
const port = process.env.PORT || 8081;

app.use("/",express.static('public'));

app.get("/cool", (req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+cool()+"</h1></body></html>");
});

app.get("/time", (req,res)=>{
    console.log("Requested /time route");
    res.send("<html><body><h1>"+new Date()+"</h1></body></html>");
});

app.listen(port, ()=> {
    console.log(`Server ready at port ${port}`);
});