const { v4: uuidv4 } = require('uuid');
const bodyparser = require('body-parser');

const mysql = require('mysql');
var dbConnection = require('./databaseconnection');
const express = require('express');
var app = express();


exports.Registeration = (req,res)=>{
        var uref = uuidv4();
        var {customer_id,customer_ref=uref,name,email,phone,loginType,password}=req.body;
        var userData={
            customer_id,
            customer_ref,
            name,
            email,
            phone,
            loginType,
            password
        }  
        let ctr = 0;
        let sql1 = "select * from cab_booking.customers;"
        dbConnection.mysqlConnection.query(sql1,(err,users)=>{

        for(let user of users){
            if(user.phone==phone && user.phone== (!null)|| user.email==email && user.email== (!null)){
                ctr= ctr+1;
            }
        }
        if(ctr<1){
        let sql='INSERT into cab_booking.customers(customer_id,customer_ref,name,email,phone,loginType,password) VALUES (?,?,?,?,?,?,?)';
        dbConnection.mysqlConnection.query(sql,[customer_id,customer_ref,name,email,phone,loginType,password], (err, rows, fields)=>{
            if(!err)
        
                res.send("Customer registered successfully : CustomerRef: ", customer_ref);   
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
    let sql2 = 'select * from cab_booking.customers';
    dbConnection.mysqlConnection.query(sql2,(err,users)=>{
        for(let user of users){
            if(user.phone==phone && user.phone== (!null)|| user.email==email && user.email== (!null)){
                count=count+1;
            }
        } })

        if(count<1){
            let sql= 'Select * from cab_booking.customers where email = ? AND phone= ?';
            dbConnection.mysqlConnection.query(sql,[email,phone],(err,users,results,fields)=>{
               
                
                for(let user of users){
                    console.log("users ",users);

                            if(password==user.password){
                                res.send(`login successful CustomerRef :${user.customer_ref} `,)
                            }
                            else{
                                res.send("password is incorrect")
                }
              }}
            )
            }
        }