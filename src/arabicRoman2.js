//1. funkcija ne smije biti dulja od 5-6 redaka
//2. Single responsibility principal
//3. No code duplication
//4. No IF's
//a. Strukture podatak su superiorne kodu
//b. Bez prijevremene optimizacije (korak po korak)

const arabicToRomanMap = {
    0: "",
    1 : "I",
    4 : "IV",
    5 : "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};

function arabicToRoman(num) {
    let roman = arabicToRomanMap[num];
    if(roman !== undefined) return roman; //ne morate izbaciti
    
    roman = "";
    let numToSubstract = getNumToSubstract(num);
    let rest = num % numToSubstract;
    let times = (num - rest)/numToSubstract;
    roman += new Array(times).fill(arabicToRomanMap[numToSubstract]).join("");
    
    roman = roman + arabicToRoman(rest);
    return roman;
}

function getNumToSubstract(num) {
    return Object.keys(arabicToRomanMap)
        .map((n)=>parseInt(n)).filter((arabic)=>arabic <= num)
            .sort((n1, n2)=>(n2-n1))[0];  
}

module.exports = arabicToRoman;