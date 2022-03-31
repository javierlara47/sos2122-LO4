const express = require("express");
const backend = require("./src/back");

const app = express();
const port = process.env.PORT || 8081;

backend(app);


app.listen(port, ()=> {
    console.log(`Server ready at port ${port}`);
});