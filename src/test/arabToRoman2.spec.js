var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
const arabicToRoman = require("../arabicRoman2");

describe('from arabic to roman', function() {
    it('arabicToRoman should be a function', function() {
        arabicToRoman(1);
    });
   
    test_stacking_pattern({baseValue: 1, baseRoman: "I", increaseRoman: "I"});

    it('ulaz 4 vraća IV', function() {
        let result = arabicToRoman(4);
        assert.equal(result, "IV")
    });

    test_stacking_pattern({baseValue: 5, baseRoman: "V", increaseRoman: "I"});
    
    it('ulaz 9 vraća IX', function() {
        expect(arabicToRoman(9)).to.eq("IX");
    });

    test_stacking_pattern({baseValue: 10, baseRoman: "X", increaseRoman: "I"});

    it('ulaz 20 vraća XX', function() {
        expect(arabicToRoman(20)).to.eq("XX");
    });
    it('ulaz 30 vraća XXX', function() {
        expect(arabicToRoman(30)).to.eq("XXX");
    });

    it('ulaz 40 vraća XL', function() {
        expect(arabicToRoman(40)).to.eq("XL");
    });
    
    stacking_by_I_tests();

    it('ulaz 90 vraća XC', function() {
        expect(arabicToRoman(90)).to.eq("XC");
    });

    it('ulaz 400 vraća CD', function() {
        expect(arabicToRoman(400)).to.eq("CD");
    });

    it('ulaz 900 vraća XL', function() {
        expect(arabicToRoman(900)).to.eq("CM");
    });

});

function stacking_by_I_tests() {
    test_stacking_pattern({baseValue: 50, baseRoman: "L", increaseRoman: "I"});
    test_stacking_pattern({baseValue: 100, baseRoman: "C", increaseRoman: "I"});
    test_stacking_pattern({baseValue: 500, baseRoman: "D", increaseRoman: "I"});
    test_stacking_pattern({baseValue: 1000, baseRoman: "M", increaseRoman: "I"});

}

function test_stacking_pattern({baseValue, baseRoman, increaseRoman}) {
    for(let i = 0; i < 3; i++) {
        let roman = baseRoman + new Array(i).fill(increaseRoman).join("");
        let value = baseValue + i;
        it(value + "->" + roman, function() {
            expect(arabicToRoman(value)).to.eq(roman);
        })
    }
}

