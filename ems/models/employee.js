/*============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Date: 9 June 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; EMS milestone/employee section
===========================================
*/
//mongoose requirements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//defines the employee schema
var empSchema = new Schema({
    firstName: String,
    lastName: String,
});

//defines the employee module
var Employee = mongoose.model("Employee", empSchema);

//this allows the employee schema to be exported
module.exports = Employee;
