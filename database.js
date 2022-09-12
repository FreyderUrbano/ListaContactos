const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const app = express()
const userRoutes = require('./routes/user')
var bodyParser = require('body-parser')

const port = process.env.port || 3001;

mongoose
  .connect("mongodb://0.0.0.0:27017/agenda")
  .then(() => {
    console.log("conectado a db");
  })
  .catch((error) => console.error(error));

//llamado de rutas
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var jsonParser = bodyParser.json()
app.use("", jsonParser, userRoutes)


app.listen(port, () => console.log("listening on port :", port));


// const mongoose = require('mongoose');

// const port = process.env.port || 3001;

// const URI = 'mongodb://0.0.0.0:27017/agenda';

// mongoose.connect(URI)
//     .then(db => console.log('db esta conectada'))
//     .catch(err => console.error(err))

// module.exports = mongoose;