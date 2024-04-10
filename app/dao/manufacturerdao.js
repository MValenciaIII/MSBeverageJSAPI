const pool = require('../config/dbconfig');




class ManufacturerDao {


    constructor() {
        this.pool = pool;
    }

    //? FIND ALL CATEGORIES
    findAll(req, res) {
        pool.query('SELECT * FROM manufacturer', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }


    postManufacturer(req, res) {

        let fields = Object.keys(req.body)

        let values = Object.values(req.body)

        console.log(fields)
        console.log(values)
        
        let sql = `INSERT INTO manufacturer (${fields}) VALUES (\"${values}\")`
        console.log(sql)
        //CREATE THE POOL.QUERY
        pool.query(sql, values, (err, rows) => {
            console.log(rows)
            res.send("data sent")
        })
 
 
    }


   
    
}


module.exports = ManufacturerDao;