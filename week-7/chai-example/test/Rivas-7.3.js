/*
=========================================================
; Title:  Mocha and Chai 7.3
; Author: Professor Krasso
; Updated by: Rhonda Rivas
; Date:   4 June 2020
; Description: TDD in Action
;========================================================
*/
var fruits = require("../Rivas-fruits");

var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
