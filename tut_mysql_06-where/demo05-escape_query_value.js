import mysql from "mysql";

var host = "localhost";
var usr = "yourusername";
var pwd = "yourpassword";
var db = "yourdb";

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';

var con = mysql.createConnection({
  host: host,
  user: usr,
  password: pwd,
  database: db,
});

con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
