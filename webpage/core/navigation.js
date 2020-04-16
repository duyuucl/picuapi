const pool = require('./pool');

class PicuNavigation {
    find() {
        let sql = 'SELECT Nav_name FROM navigation WHERE Page_id = "2"';
        pool.query(sql, function(err, result) {
            if(err) return console.log(err)
            if(result) return(result)
        })
    };
};


module.exports = PicuNavigation;