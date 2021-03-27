const { v4: uuidv4 } = require('uuid');
const bodyparser = require('body-parser');

const mysql = require('mysql');
var dbConnection = require('./databaseconnection');
const express = require('express');
var app = express();


exports.Registeration = (req,res)=>{
    var dref = uuidv4();
        var {driver_id,driver_ref=dref,driver_name,driver_email,phone,password}=req.body;
        var userData={
            driver_id,
            driver_ref,
            driver_name,
            driver_email,
            phone,
            password
        }  
        let ctr = 0;
        let sql1 = "select * from cab_booking.drivers;"
        dbConnection.mysqlConnection.query(sql1,(err,users)=>{

        for(let user of users){
            if(user.phone==phone && user.phone== (!null)|| user.email==driver_email && user.email== (!null)){
                ctr= ctr+1;
            }
        }
        if(ctr<1){
        let sql='INSERT into cab_booking.drivers(driver_id,driver_ref,driver_name,driver_email,phone,password) VALUES (?,?,?,?,?,?)';
        dbConnection.mysqlConnection.query(sql,[driver_id,driver_ref,driver_name,driver_email,phone,password], (err, rows, fields)=>{
            if(!err)
        
                res.send("Driver registered successfully");   
            else
            console.log(err);  
        })
    }else {
            res.send({status:false,message:"phone or email already in database"})
        }
    })
}

exports.Login=(req,res)=>{
    var{email,phone,password} = req.body;
    let count = 0;
    let sql2 = 'select * from cab_booking.drivers';
    dbConnection.mysqlConnection.query(sql2,(err,users)=>{
        for(let user of users){
            if(user.phone==phone && user.phone== (!null)|| user.email==email && user.email== (!null)){
                count=count+1;
            }
        } })

        if(count<1){
            let sql= 'Select * from cab_booking.drivers where driver_email = ? OR phone= ?';
            dbConnection.mysqlConnection.query(sql,[email,phone],(err,users,results,fields)=>{
                console.log("user",users);
                
                for(let user of users){
                            if(password==user.password)
                            res.send("login successful")
                else{
                  res.send("password is incorrect")
                }
              }}
            )
            }
        }