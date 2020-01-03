const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(cols,vals,cb) {
        orm.insertOne(cols,vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVals,condition,cb) {
        orm.updateOne(colVals,condition,function(res) {
            cb(res);
        });
    }
}

module.exports = burger;