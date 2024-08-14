const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const env=require("dotenv")

env.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port:16741
});

db.connect((err) => {
  if (err) {
    console.log("Something went wrong!", err);
  } else {
    console.log("Database connected successfully!");
  }
});

app.get("/api/v1/banner", (req, res) => {
  db.query("SELECT * FROM banner WHERE id=1", (err, result) => {
    if (err) {
      console.log("Not got data!");
      throw err;
    }
    res.send(result[0]);
  });
});

app.post("/api/v1/update-banner", (req, res) => {
  const { description, timer, link, visible } = req.body;
  db.query(
    "UPDATE banner SET description=?, timer=?, link=?, visible=? WHERE id=1",
    [description, timer, link, visible],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Banner updated!" }); // Return a JSON response
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
