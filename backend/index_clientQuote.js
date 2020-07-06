const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const ClientInfo = require("./routes/client_info");

const port = process.env.PORT || 3001;

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/client_info", ClientInfo);

app.listen(port, function() {
    console.log("Port#" + port);
  });

  module.exports = app;

