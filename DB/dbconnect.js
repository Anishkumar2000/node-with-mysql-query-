const mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test1",
});

// Connect Database

con.connect((err)=>{
    if (err) {
        console.log("DataBase Not Connected");
    }
    else{
        console.log("DataBase Connected");
    }
});

// Create Database (test1)

// con.query("create database test1",(err)=>{
//     if (err) {
//         console.log("Database are Not created");
//     }
//     else{
//         console.log("Database are created");
//     }
// });

// Create Table (Users)


// con.query("create table Users (id int,name varchar(100),city varchar(100))",(err)=>{
//     if (err) {
//         console.log("table are Not created");
//     }
//     else{
//         console.log("table are created");
//     }
// });

// Insert Values

// var sql = " insert into Users (id,name,city) values (1,'Anish','Tindivanam')";


// var sql = " insert into test1.Users (id,name,city) values ?";
// var values = [
//     [1,'Anish','Vempoondi'],
//     [2,'Chinnarasu','Kizhathivakkam'],
//     [3,'Deva','Perumukal'],
//     [4,'Raja','Tindivanam']
// ];

// con.query(sql,[values],(err)=>{
//     if (err) {
//         console.log("Many Values are not Inserted");
//     }
//     else{
//         console.log("Many Values are Inserted");
//     }
// });

// var sql = "show tables"
// var sql = "select * from Users where id=2";
// var sql = "select * from test1.Users";
// var sql = "update Users set name = 'Anishkumar'";
// var sql = "Delete from Users ";
// var sql = "Drop table test1.Users ";
var sql = "show tables";

con.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
})