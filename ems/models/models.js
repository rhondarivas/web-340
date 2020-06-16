/*============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Date: 10 June 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; EMS milestone - model schema/employee model app
==============================================
*/

//requires the use of the express, http, mongoose
var express = require("express");
var http = require("http");
var mongoose = require ("mongoose");
var logger = require ("morgan");
var Employee = require("../models/employee");
