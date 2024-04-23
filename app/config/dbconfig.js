//? IMPORTING MYSQL PACKAGE
const mysql = require('mysql')

//? CREATE THE CONNECTION INFORMATION
const pool = mysql.createPool({
    host:'roundhouse.proxy.rlwy.net',
    port:'44218',
    user:'root',
    password:'qxfbxZKuSDXmtkwhPhFVuvfzTKyyrDlZ',
    database:'railway'
});

//? THIS IS MAKING our "pool" VARIABLE have access everywhere.
module.exports = pool;
//* THIS ACTUALLY STARTS THE MYSQL DATABASE CONNECTION
//? We making err catches if something goes wrong. 
pool.getConnection((err, connection) => {
    if (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed')
        }
        if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()

    return
})

