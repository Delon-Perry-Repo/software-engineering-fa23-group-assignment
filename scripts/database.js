const mysql = require('mysql2');
const fs = require('fs');
const { host, user, password, database, ca} = require('./config');

// dirname is the path to your .pem key
const dirname = 'C:/Users/sierr/OneDrive/Desktop/COMPSCI/SWE PROJECT/software-engineering-fa23-group-assignment/'

const connection = mysql.createConnection({
    host,
    user,
    password,
    database,
    ssl : {
        ca: fs.readFileSync( dirname + ca),
    }
});

connection.connect((error) => {
    if (error){
        console.log("Error : " + error);
        return 1;
    }
});

connection.query("select * from user", (err, res) =>{
    if (err){
        console.log(err);
    }
    console.log(res);
});

connection.end();