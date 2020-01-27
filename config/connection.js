const mysql = require('mysql');
const connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Briguy_131",
        database: "burgers_db"
    });
};


connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting to the Database: " + err.stack);
        return
    }
    console.log("Connected to the database");
});

module.exports = connection;