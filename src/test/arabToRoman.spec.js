var assert = require('assert');

const arabicRoman = require("../arabicRoman");

describe('from arabic to roman', function() {
    it('arabic to roman should be a function', function() {
        arabicRoman();
    })

    it('ulaz 1 vraća I', function() {
        let result = arabicRoman(1);
        assert.equal(result, "I")
    })

    it('ulaz 2 vraća II', function() {
        let result = arabicRoman(2);
        assert.equal(result, "II")
    })

    it('ulaz 3 vraća III', function() {
        let result = arabicRoman(3);
        assert.equal(result, "III")
    })

    it('ulaz 4 vraća IV', function() {
        let result = arabicRoman(4);
        assert.equal(result, "IV")
    })

    it('ulaz 5 vraća V', function() {
        let result = arabicRoman(5);
        assert.equal(result, "V")
    })

    it('ulaz 9 vraća IX', function() {
        let result = arabicRoman(9);
        assert.equal(result, "IX")
    })
})