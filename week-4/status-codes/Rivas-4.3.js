/*============================================
; Title: Assignment 4.3
; Author: Richard Krasso
; Date: 14 May 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; HTTP status-codes
===========================================
*/
var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "404 Not Found."
  });
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Page loaded right, you are OK."
  });
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Page not implemented, sorry about that."
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
