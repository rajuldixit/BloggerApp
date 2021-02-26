const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoute = require('./api/routes/users');
const blogTypesRoute = require('./api/routes/blogTypes');
const mongoose = require('mongoose');
const morgan = require('morgan');
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
mongoose.connect('mongodb://localhost/bogger_app', {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(userRoute);
app.use('/blogtypes',blogTypesRoute);

app.use((req, res, next) => {
  const error = new Error('Not found');
  console.log('not found');
  error.status(401);
  next(error);
});

app.use((err, req, res, next) =>{ 
   res.status(err.status || 401).send(err.message);
});
module.exports = app;