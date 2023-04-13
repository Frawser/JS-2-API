const express = require('express');
const app = express();

const shoesController = require('./controllers/shoesController');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/shoes', shoesController);

module.exports = app;

