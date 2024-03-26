const pool = require('../config/dbconfig');




class RecordsDao {


    constructor() {
        this.pool = pool;
    }

    //? FIND ALL CATEGORIES
    findAll(req, res) {
        pool.query('SELECT * FROM records', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }

    findAllFK(req, res) {
        pool.query(' SELECT records.record_id, category.categoryName, manufacturer.companyName, records.model, records.serial, records.purchase_date, records.cost, location.locationName, records.sub_location FROM (((records INNER JOIN category ON records.category = category.id) INNER JOIN manufacturer ON records.manufacturer = manufacturer.id) INNER JOIN location ON records.location = location.id);', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        });
    }

    postRecord(req, res) {

        let fields = Object.keys(req.body)

        let values = Object.values(req.body)


        let sql = `INSERT INTO records (${fields.join(',')}) VALUES (${Array(values.length).fill('?') .join(',')})`
 
        //CREATE THE POOL.QUERY
        pool.query(sql, values, (err, rows) => {
            console.log(rows)
            res.send("data sent")
        })
 
 
    }


   
    
}


module.exports = RecordsDao;