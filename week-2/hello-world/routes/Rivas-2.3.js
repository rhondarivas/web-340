/*============================================
; Title: Assignment 2.2
; Author: Richard Krasso
; Date: 30 April 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; routes  express process
===========================================
*/

var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response) { //response code

    response.end("Welcome to the homepage!\n");

});

app.get("/about", function(request, response) { //response code

    response.end("Welcome to the about page!\n");

});

app.get("/contact", function(request, response) { //response code

    response.end("Welcome to the contact page!\n");

});

app.use(function(request, response) {

    response.statusCode = 404;

    response.end("404!");

});

http.createServer(app).listen(8080);

