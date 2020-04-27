/*============================================
; Title: Assignment 1.3
; Author: Richard Krasso
; Date: 27 April 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; modules
===========================================
*/

//url
var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=rivas");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);