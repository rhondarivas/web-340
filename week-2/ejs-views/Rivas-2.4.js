/*============================================
; Title: Assignment 2.4
; Author: Richard Krasso
; Date: 5 May 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; EJS view
===========================================
*/
var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tells Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tells Express to use the EJS view engine

app.get("/", function(request, response) {

response.render("index", {

//response displayed on web page
app.get("/", function (request, response){
    response.render("index", {
        firstName: "Rhonda",
        lastName: "Rivas",
        address: "4244 Main St. Dublin, OH 11111"
    });
});
/**
 * Creates a new server to listen on the port 3000.
 */
http.createServer(app).listen(8080, function() {
  console.log(`EJS-Views app started on port ${8080}`);
});