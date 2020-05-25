/*
============================================
; Title:  Rivas-5.3.js
; Author: Professor Krasso
; Updated by: Rhonda Rivas
; Date:   25 May 2020
; Description: Pug view engine.
;===========================================
*/
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome Rhonda's The Pug Life based homepage!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
