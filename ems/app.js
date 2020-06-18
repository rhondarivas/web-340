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
var conn ="mongodb+srv://useradmin:eastwood1930@buwebdev-cluster-1-992kq.mongodb.net/test"
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connection to the database instance was successful');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to MongoDB Atlas")
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

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// http calls
app.get("/", function (req, res){
    res.render("index",{
        message: "Homepage"
    });
});

app.get('/new', function(req, res) {
    res.render('new', {
      message: 'Add New Employee'
    });
  });

  //redirects to the new employee entry page
app.get("/new", function(request, response){
  response.render("new", {
    title: "New Employee Entry",
    message: "Enter New Employee"
  });
});

//redirects to the list page
app.get("/list", function(request, response){
  Employee.find({}, function(error, employees){
    if (error) throw error;
    response.render("list", {
      title: "Current Employees",
      employees: employees
    });
  });
});

//redirects the page after form submission
app.post("/process", function(request, response){
    if(!request.body.txtFirstName){
      response.status(400).send("Entries must have a name");
      return;
    }
    if(!request.body.txtLastName){
      response.status(400).send("Entries must have a name");
      return;
    }
    //get request form data
    var empName = request.body.txtFirstName + " " + request.body.txtLastName;
    console.log(empName)
    //create an employee model
    var employee = new Employee({
      name: empName
    });
    //save
    employee.save(function(err){
      if (err){
        console.log(err);
        throw err;
      } else {
        console.log(empName + " saved successfully!");
        response.redirect("/");
      }
    });
});

//the short version of the morgan logger
app.use(logger("short"));

//enables helmet logger
app.use(logger("short"));
app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({

  extended: true

}));

//uses the helmet cross site scripting filter
app.use(helmet.xssFilter());
//uses cookie parser
app.use(cookieParser());
//uses csurf Protection
app.use(csrfProtection);
//sets up use of csrf tokens
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});


//local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});
