const pool = require('../config/dbconfig');


class LocationDao {


    constructor() {
        this.pool = pool;
    }

    //? FIND ALL LOCATIONS
    findAll(req, res) {
        pool.query('SELECT * FROM location', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }


    postLocation(req, res) {

        let fields = Object.keys(req.body)

        let values = Object.values(req.body)

        console.log(fields)
        console.log(values)
        
        let sql = `INSERT INTO location (${fields}) VALUES (\"${values}\")`
        console.log(sql)
        //CREATE THE POOL.QUERY
        pool.query(sql, values, (err, rows) => {
            console.log(rows)
            res.send("data sent")
        })
 
 
    }


   
    
}


module.exports = LocationDao;