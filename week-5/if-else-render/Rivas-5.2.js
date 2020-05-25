/*
============================================
; Title:  Rivas-5.2.js
; Author: Professor Krasso
; Updated by: Rhonda Rivas
; Date:   25 May 2020
; Description: EJS 'if-else-render' operations.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var f = ["Clifford", "Harold", "Donald", "Lawrence"];

app.get("/", function(request, response) {
  response.render("index", {
    clark: f
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
