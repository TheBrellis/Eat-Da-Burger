const mysql = require('mysql');

if(process.env.JAWSDB_URL) {
   const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const  connection = mysql.createConnection({
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