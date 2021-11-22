var mysql = require('mysql');

var connection = mysql.createPool({
    host: "eu-cdbr-west-01.cleardb.com",
    user: "bf16e0c5caf9b7",
    password: "3c3b15fc",
    database: "heroku_55abd3d2995463f",
    insecureAuth : true
});

module.exports = connection;
