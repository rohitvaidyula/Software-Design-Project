const express = require('express');
const cors = require('cors');
const app = express();
const histPage = require('../backend/histPageBack');
app.use(cors());

app.use('/api/test', histPage);


module.exports = app;