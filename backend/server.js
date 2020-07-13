const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require("morgan");
const bodyParser = require("body-parser");


require('dotenv').config();



const app = express();
const port = process.env.PORT || 4000;



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.json());


app.use(logger('dev'));


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const userRouter = require('./routes/user');
const quoteRouter = require('./routes/user_quote');



app.use('/user', userRouter);
app.use('/user_quote', quoteRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;


