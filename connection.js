const mysql2 = require("mysql2");
var mysqlConnection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Aditya@2000",
    database:"Demo",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else{
        console.log("Connection failed");
    }

});

module.exports = mysqlConnection;
