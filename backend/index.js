"use restrict";
//@ts-check
const express = require("express"),
  bodyParser = require("body-parser"),
  fs = require("fs"),
  filename = "data/todolist.txt";
var app = express();
app.use(bodyParser.json());
console.log("start our code of node.js");

app.post("/", function (req, res) {
  console.log("post /");
  var readFileCallback = function (err, data) {
    if (err) {
      res.status(500).send("error reading the file");
      return;
    }
    data += "\n" + req.body.data;
    fs.writeFile(filename, data, (err) => {
      if (err) {
        res.status(500).send("error writing the file");
        return;
      }
    });
    res.status(200).send(data);
  };
  fs.readFile(filename, "utf8", readFileCallback);
});

const cors = require("cors");
const mysql = require("mysql");

const SELECT_ALL_USERS_INFO = "SELECT * FROM userInfo";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "react_sql",
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /userInfo to see users");
});

app.get("/userInfo/add", (req, res) => {
  const {
    firstName,
    lastName,
    streetaddy1,
    streetaddy2,
    city,
    zipcode,
    state,
  } = req.query;
});

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
