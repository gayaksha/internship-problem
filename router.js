var express = require('express');
var route = express.Router();

var userapi = require('./userapi');
var driverapi = require('./driverapi');
var bookingapi=require("./bookingapi");


route.post('/registration',userapi.Registeration);
route.post('/login',userapi.Login);
route.post('/driverregistration',driverapi.Registeration);
route.post('/driverlogin',driverapi.Login);
route.post('/getcustomerlocation',bookingapi.GetCustomerLocation);
module.exports = route;