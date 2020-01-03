const connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb){
        let query = "SELECT * FROM burgers"
        connection.query(query,function(err,res){
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: function(cols,vals,cb){
        let query = `INSERT INTO burgers (${cols}) VALUES (${vals}) `;
        
        connection.query(query, vals, function(err, res) {
            if (err) throw err;
            cb(res)
        })

    },
    updateOne: function(){

    }
}
module.exports = orm;