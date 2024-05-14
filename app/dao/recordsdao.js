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
        pool.query(' SELECT records.record_id, category.categoryName, manufacturer.companyName, records.model, records.serial, records.purchase_date, records.cost, location.locationName, records.sub_location, records.is_deleted FROM (((records INNER JOIN category ON records.category = category.id) INNER JOIN manufacturer ON records.manufacturer = manufacturer.id) INNER JOIN location ON records.location = location.id);', (err, rows, fields) => {
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

    updateById(req, res) {

        let fields = Object.keys(req.body)

        let values = Object.values(req.body)


        if (!req.body.record_id) {
            res.json({
              error: true,
              message: 'Missing ID',
            });
          } else if (fields.length == 0) {
            res.json({
              error: true,
              message: 'No fields to update',
            });
          }

        let sql = `UPDATE records set ${fields.join('=?,')}=? WHERE record_id = ?`
 
        //CREATE THE POOL.QUERY
        this.pool.query(sql, [...values, req.body.record_id], (err, rows) => {
            //... means SPREAD. It takes values from an array (in this instance).
            //did this method because, cant send id in body of values. if we didnt use params, then id would have to be passed in last. sent id as a "url param" and that seperated id for the body content.
            if (err) {
              res.json({
                error: true,
                message: err,
              });
            }
            res.json(rows);
          });
 
    }
   
    
}


module.exports = RecordsDao;