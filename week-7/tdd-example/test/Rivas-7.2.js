/*
=========================================================
; Title:  TDD Test 7.2
; Author: Professor Krasso
; Updated by: Rhonda Rivas
; Date:  5 June 2020
; Description: TDD in Action
;========================================================
*/

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

function getFruits(str) {

  return str.split(',');

 }

 module.exports = getFruits;
