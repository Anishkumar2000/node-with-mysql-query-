const express = require("express");
const app = express();
const cors = require("cors");
const Port = 7001;
require("./DB/dbconnect");
app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());


app.listen(Port,()=>{
    console.log("App is Running Port :",Port);
});