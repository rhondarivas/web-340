/*============================================
; Title: Assignment 4.2
; Author: Richard Krasso
; Date: 14 May 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; JSON API Example to client node.js
===========================================
*/
var express = require("express");

var http = require("http");

var app = express();

app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        firstName: "Clint",

        lastName: "Eastwood",

        employeeId: id

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
