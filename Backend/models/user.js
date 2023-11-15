const db = require('../config/database');

class User {
    constructor(id, name, type, password, email){
        this.id = id;  // INT
        this.name = name;   // VARCHAR(45)
        this.type = type;  // VARCHAR(4)
        this.password = password;  //VARCHAR(45)
        this.email = email; // VARCHAR(45)
    }
    // adds a user to the SQL Database
    saveUser() {
        let sql = `
        INSERT INTO USER(
            USER_NAME,
            USER_TYPE,
            USER_PASS,
            USER_EMAIL
            )
        VALUES (
            '${this.name}',
            '${this.type}',
            '${this.password}',
            '${this.email}'
            );
        `;
        // Executes the sql statement
        return db.execute(sql);
        
    }

    static getAll(){
        let sql = "SELECT * FROM USER;";

        return db.execute(sql);
    }

    static getByEmailandPassword(email, password){
        let sql = `Select * from USER where USER_EMAIL ='${email}' AND USER_PASS ='${password}';`;
        return db.execute(sql);
    }
    static getById(id){
        let sql = `SELECT * FROM USER WHERE USER_ID = ${id};`
        return db.execute(sql);
    }

    static updateUser(id, name, type, password, email){
        let sql = `
        UPDATE USER
        SET USER_NAME = '${name}',
        USER_TYPE = '${type}',
        USER_PASS = '${password}',
        USER_EMAIL = '${email}'
        WHERE USER_ID = ${id};
        `;

        return db.execute(sql);
    }
    static deleteUser(id){
        let sql = `DELETE from USER WHERE USER_ID = ${id};`;
        return db.execute(sql);
    }
}

module.exports = User;