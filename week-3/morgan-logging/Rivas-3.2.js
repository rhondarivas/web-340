/*============================================
; Title: Assignment 3.2
; Author: Richard Krasso
; Date: 6 May 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; logging with express and morgan
===========================================
*/
//start program

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // This tells Express the views are in the 'views' directory

app.set("view engine", "ejs"); // This tells Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "Welcome to Rhonda Rivas' Morgan Logger Example!"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});