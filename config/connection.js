var mysql = require("mysql");
// var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "h0nd@c1vIC",
//     database: "burgers_db"
//   });

// }
// couldn't get that working; MySQL Workbench remote connection to JawsDB was too confusing; will just have to store the details here for now until I can figure out how to do this

var connection = mysql.createConnection({
  host: "s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "enpuy205fb3ezmes",
  password: "l2ybj1x7verisj2c",
  database: "caqixvjgphi617ql"
});



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
