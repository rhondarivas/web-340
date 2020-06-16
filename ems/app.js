/*============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Date: 3 June 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; EMS milestone
===========================================
*/
//requires express, http, the morgan logger
//and the use of file paths
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var employee = require('./models/employee');

//this allows express to know where to find the employee model
var Employee = require("./models/employee")

// MongoDB connection
var mongoDB="mongodb+srv://useradmin:eastwood1930@buwebdev-cluster-1-992kq.mongodb.net/test"
mongoose.connect(mongoDB, {
  useMongoClient:true
});

mongoose.Promise = global.Promise;

//sets the mongoose connection to a variable
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function(){
    console.log("Application connected to MongoDB instance");
});

/**
 * This sets up CSRF protection.
 */
let csrfProtection = csrf({ cookie: true });

//creates the express application to a variable
var app = express();

//enables express know the views are in a file named views
app.set("views", path.resolve(__dirname, "views"));

//enables express know where to find public/css files
app.use(express.static(__dirname + '/'));

//enables express know to use the ejs view engine
app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


app.get("/", function(request, response) {

  response.render("index", {

      message: "New Fruit Entry Page"

  });

});

app.post("/process", function(request, response) {

  console.log(request.body.txtName);

  response.redirect("/");

});
//the short version of the morgan logger
app.use(logger("short"));

//enables helmet logger
app.use(logger("short"));
app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({

  extended: true

}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

  var token = request.csrfToken();

  response.cookie('XSRF-TOKEN', token);

  response.locals.csrfToken = token;

  next();

});

//this displays or responds with the homepage when the site is accessed
app.get("/", function(request, response){
    response.render("index", {
        title: "Home page"
    });
});

// this is the Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// this is the CSRF protection
app.use(csrfProtection);
/**
 * This intercepts all incoming requests and adds a CSRF token to it's response.
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

//local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});
