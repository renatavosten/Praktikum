var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
const dayOfYear = require("../dayOfYear");


describe('day of year test', function () {
    it('2012,1,1 -> 1', function () {
        assert.equal(dayOfYear(2012,1,1), 1);  
    });
    it('2012,2,1 -> 32', function () {
        assert.equal(dayOfYear(2012,2,1), 32);  
    });
    it('2012,3,1 -> 61', function () {
        assert.equal(dayOfYear(2012,3,1), 61);  
    });
    it('1900,3,1 -> 60', function () {
        assert.equal(dayOfYear(1900,3,1), 60);  
    });
 
});

