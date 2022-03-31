const express = require("express");
const app = express();
const port = process.env.PORT || 8081;

app.use("/",express.static('public'));

app.get("/api", (req,res)=>{
    console.log("Requested / route");
    //res.send({result:true});
    res.sendStatus(400);
});

app.listen(port, ()=> {
    console.log(`Server ready at port ${port}`);
});