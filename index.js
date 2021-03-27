const mysql = require('mysql');
const express = require('express');
var app = express();
var bodyparser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
var router = require('./router');



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/userapi',router);
app.use('/driverapi',router);
app.use('/bookingapi',router);

app.listen(3000,()=>console.log('Express server running on port number 3000'));
