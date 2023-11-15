const db = require('../config/database');

class Discount {
    constructor(name, code, percentOff){
        this.id = null; // INT
        this.name = name;  // VARCHAR(45)
        this.code = code;  // VARCHAR(45)
        this.percentOff = percentOff;  // INT
    }
    saveDiscount() {
        let sql = `
        INSERT INTO DISCOUNT(
            DISCOUNT_NAME,
            DISCOUNT_CODE,
            DISCOUNT_PER_OFF
            )
        VALUES (
            '${this.name}',
            '${this.code}',
            ${this.percentOff}
            );
        `;
        // Executes the sql statement
        return db.execute(sql);
        
    }

    static getAll(){
        let sql = "SELECT * FROM DISCOUNT;";

        return db.execute(sql);
    }
    static getById(id){
        let sql = `SELECT * FROM DISCOUNT WHERE DISCOUNT_ID = ${id};`
        return db.execute(sql);
    }

    static updateDiscount(id, name, code, percentOff){
        let sql = `
        UPDATE DISCOUNT
        SET DISCOUNT_NAME = '${name}',
        DISCOUNT_CODE = '${code}',
        DISCOUNT_PER_OFF = ${percentOff}
        WHERE DISCOUNT_ID = ${id};
        `;

        return db.execute(sql);
    }
    static deleteDiscount(id){
        let sql = `DELETE from DISCOUNT WHERE DISCOUNT_ID = ${id};`;
        return db.execute(sql);
    }
}

module.exports = Discount;

