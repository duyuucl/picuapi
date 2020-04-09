const util = require('util');
const mysql = require('mysql');
const config = require('../config')



const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

pool.getConnection((err, connection) => {
    if(err)
        console.error("Error in connection");
    if(connection)
        console.log('Connected')
        connection.release();
    return;
});

pool.query = util.promisify(pool.query)

/*
let sql = 'SELECT * FROM user'
pool.query(sql, function(err, result) {
    if (err) throw error
    return console.log(result)
})
*/
module.exports = pool;