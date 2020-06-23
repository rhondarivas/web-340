/*============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Date: 9 June 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; EMS milestone/employee section
===========================================
*/
//requires the use of mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//defines the employee schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true},
  id: {type: String, required: true}
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
