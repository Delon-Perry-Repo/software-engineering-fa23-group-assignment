const db = require('../config/database');

let sql = `SELECT * FROM user;`

db.execute(sql);