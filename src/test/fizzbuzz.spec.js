var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
const fizzBuzz = require("../fizzBuzz");

/*
FizzBuzz problem: 
- za broj djeljiv sa 3 funkcija vraća "Fizz"
- za broj djeljiv sa 5 funkcija vraća "Buzz"
- Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz
- Za ostale brojeve vratiti undefined
*/

describe('fizz buz problem', function () {
 it('fizzBuzz should be a function', function () {
        fizzBuzz();
        
    });
 it('ako je djeljivo sa 3 ispiši Fizz', function () {
        let result = fizzBuzz(3);
        assert.equal(result, "Fizz")
        
    });

    it('ako je djeljivo sa 5 ispiši Buzz', function () {
        let result = fizzBuzz(5);
        assert.equal(result, "Buzz")
        
    });

    it('ako je djeljivo sa 3 i 5 ispiši FizzBuzz', function () {
        let result = fizzBuzz(15);
        assert.equal(result, "FizzBuzz")
        
    });

    it('Za ostale brojeve vratiti undefined', function () {
        let result = fizzBuzz(4);
        assert.strictEqual(result, undefined)
    });
});

