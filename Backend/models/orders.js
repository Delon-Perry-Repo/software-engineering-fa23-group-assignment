const db = require('../config/database');

class ORDERS {
    constructor(price, user_id, discount_code){
        let d = new Date();
        this.id = null;  // INT
        this.price = price;  // DECIMAL(10, 0)
        this.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() ;
        this.user_id = user_id; // INT
        this.discount_code = discount_code;  // VARCHAR(45)
    }
    saveOrders() {
        let sql = `
        INSERT INTO ORDERS(
            ORDER_PRICE,
            ORDER_DATE,
            USER_ID,
            DISCOUNT_CODE
            )
        VALUES (
            ${this.price},
            '${this.date}',
            ${this.user_id},
            '${this.discount_code}'
            );
        `;
        // Executes the sql statement
        return db.execute(sql);
        
    }

    static getAll(){
        let sql = "SELECT * FROM ORDERS;";

        return db.execute(sql);
    }
    static getById(id){
        let sql = `SELECT * FROM ORDERS WHERE ORDER_ID =${id};`
        return db.execute(sql);
    }

    static updateOrders(id, price, date, user_id, discount_code){
        let sql = `
        UPDATE ORDERS
        SET ORDER_PRICE = ${price},
        ORDER_DATE = '${date}',
        USER_ID = ${user_id},
        DISCOUNT_CODE = '${discount_code}'
        WHERE ORDER_ID = ${id};
        `;

        return db.execute(sql);
    }
    static deleteOrders(id){
        let sql = `DELETE from ORDERS WHERE ORDER_ID = ${id};`;
        return db.execute(sql);
    }
}

module.exports = ORDERS;