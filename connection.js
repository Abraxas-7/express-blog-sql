import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arby.2512",
  database: "db_blog",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

export default connection;
