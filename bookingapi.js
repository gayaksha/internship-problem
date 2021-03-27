const { v4: uuidv4 } = require('uuid');
const bodyparser = require('body-parser');

const mysql = require('mysql');
var dbConnection = require('./databaseconnection');
const geolib = require('geolib');



exports.GetCustomerLocation=async(req,res)=>{
    console.log(req.body);
    var location = req.body.Location

        for (let driver = 0; driver < 100; driver++) {
            const element = Array[driver];
            dbConnection.mysqlConnection.query(`select driver_id,driver_location,No_of_trips,Ratings
            from cab_booking.driver_details`,(err, rows, fields)=>{
                if(!err)
                res.send({"drivers:" :rows[0]});
                else
                console.log(err);
            });
            var string= driver.driver_location;
            var stringsplit= string.split(",")
            console.log("stringsplit",stringsplit);
    
        
            var distance= geolib.getDistance(
                { latitude: location.Source.Latitude, longitude: location.Source.Longitude },
                { latitude: stringsplit[0], longitude: stringsplit[1] }
            );

            driveDistance.push({
               driverID: element.driver_id,
               distance:distance

            })
            console.log("distance is => ",distance/1000+ "KM");
        }

        
   
}
