/*============================================
; Title: Assignment 2.2
; Author: Richard Krasso
; Date: 30 April 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; hello world express process
===========================================
*/
//
var express = require("express");
var http = require("http");
var app= express();

app.use(function(request,response){
    console.log("In comes a requst to:" +request.url);
    response.end("Hello World\n");
});

http.createServer(app).listen(8080);

    console.log('Application started on port %s', 8080);