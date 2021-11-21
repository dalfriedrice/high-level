var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "akshay",
    password: "password",
    database: "high_level",
    insecureAuth : true
});

connection.connect(function (err) {
    if (err) {
        // console.log('error', err);
        throw err;
        
    }
    console.log('connected!');
});

module.exports = connection;