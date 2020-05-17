/*============================================
; Title: Assignment 4.4
; Author: Richard Krasso
; Date: 15 May 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; cURL to API tests/crud
===========================================
*/
var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
