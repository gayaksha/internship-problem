const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "gayaksha",
  database: "cab_booking",
  multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('database connected')
    else
    console.log('database connection failed.\n Error : '+JSON.stringify(err,undefined,2));
});
module.exports.mysqlConnection = mysqlConnection;