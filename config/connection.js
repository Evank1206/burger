const mysql = require("mysql");

require("dotenv").config();
// console.log(process.env);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASS_WORD
});

db.connect( (err, res)=>{
    console.log(res);
    
});


module.exports = db;
