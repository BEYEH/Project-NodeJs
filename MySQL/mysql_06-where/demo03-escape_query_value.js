import mysql from "mysql";

var host = "localhost";
var usr = "yourusername";
var pwd = "yourpassword";
var db = "yourdb";

var adr = "Mountain 21";
var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);

var con = mysql.createConnection({
  host: host,
  user: usr,
  password: pwd,
  database: db,
});

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
