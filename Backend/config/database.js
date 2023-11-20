const mysql = require('mysql2');
const fs = require('fs');
const { host, user, password, database, ca} = require('./config');

const pool = mysql.createPool({
    host,
    user,
    password,
    database,
    ssl : {
        ca: fs.readFileSync( 'C:\\Users\\Delon Perry\\Dropbox\\PC\\Documents\\SEPROJ\\software-engineering-fa23-group-assignment\\' + ca),
    }
})

module.exports = pool.promise();