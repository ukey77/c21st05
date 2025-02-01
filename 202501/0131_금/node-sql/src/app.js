
const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "my_db"
});

connection.connect();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/persons",(req,res)=>{
    connection.query("SELECT * FROM Persons",(err,rows,fields)=>{
        if(err) throw err;
            const dbString = `
            <div>
                <p>id: <input type="text" value="${rows[0]["id"]}"></p>
                <p>name: <input type="text" value="${rows[0]["name"]}"></p>
                <p>age: <input type="text" value="${rows[0]["age"]}"></p>
            <div>`;
            res.send(dbString)
    });
    connection.end();
});

app.listen(3000,()=>{
    console.log("http://localhost:3000");
});