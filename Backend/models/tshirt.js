const db = require('../config/database');

class tshirt{
    constructor(id, name, price, color, size, order_id){
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.size = size;
        this.order_id = order_id;
    }
    saveTshirt(){
        let sql = `
        INSERT INTO tshirt(
            SHRT_NAME,
            SHRT_PRICE,
            SHRT_COLOR,
            SHRT_SIZE,
            ORDER_ID
        )
        VALUES(
            '${this.name}',
            ${this.price},
            '${this.color}',
            '${this.size}',
            ${this.order_id}
        );
        `;

        return db.execute(sql);
    }
    static getAll(){
        let sql = `SELECT * FROM tshirt;`;

        return db.execute(sql);
    }
    static getById(id){
        let sql = `SELECT * FROM tshirt WHERE SHRT_ID =${id};`;
        return db.execute(sql);
    }
    static updateTshirt(id, name, price, color, size, order_id){
        let sql = `
        UPDATE tshirt
        SET SHRT_NAME = '${name}',
        SHRT_PRICE = ${price},
        SHRT_COLOR = '${color}',
        SHRT_SIZE = '${size}',
        ORDER_ID = ${order_id}
        WHERE SHRT_ID = ${id};
        `;
        return db.execute(sql);
    }
    static deleteTshirt(id){
        let sql = `DELETE from tshirt WHERE SHRT_ID = ${id};`;
        return db.execute(sql);
    }
}

module.exports = tshirt;