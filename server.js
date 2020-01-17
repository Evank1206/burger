const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 3000;

require("dotenv").config();
// console.log(process.env);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASS_WORD
})




app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED!!`);
    
});