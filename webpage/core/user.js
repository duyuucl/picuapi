const pool = require('./pool');
const bcrypt = require('bcrypt');

function User() {};

User.prototype = {
    find: function(user = null, callback) {
        let sql = 'SELECT * FROM user';
        pool.query(sql, function(err, result) {
            if(err) {
                return console.log(err)
            }
            if (result.length)
                callback(result[0]);
        })
    },
    login : function (email, password, callback) {
        this.find(email, function(user){
            if(user) {
                if(password === user.password){
                    callback(user);
                    return;
                }
            }
            callback(null)
        });
    }

}

module.exports = User;
