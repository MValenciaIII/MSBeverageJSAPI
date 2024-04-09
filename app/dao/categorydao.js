const pool = require('../config/dbconfig');




class CategoryDao {


    constructor() {
        this.pool = pool;
    }

    //? FIND ALL CATEGORIES
    findAll(req, res) {
        pool.query('SELECT * FROM category', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }


    postCategory(req, res) {

        // let fields = Object.keys(req.body)

        let values = req.query.categoryName
        console.log(values)

        let sql = `INSERT INTO category (categoryName) VALUES (${values})`
 
        //CREATE THE POOL.QUERY
        pool.query(sql, values, (err, rows) => {
            console.log(rows)
            res.send("data sent")
        })
 
 
    }


   
    
}


module.exports = CategoryDao;