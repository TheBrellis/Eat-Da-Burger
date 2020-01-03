const connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb){
        let query = "SELECT * FROM burgers"
        connection.query(query,function(err,res){
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}
module.exports = orm;