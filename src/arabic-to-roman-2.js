const digits = [[], [0], [0, 0], [0, 0, 0], [0, 1], [1], [1, 0], [1, 0, 0], [1, 0, 0, 0], [0, 2]];
const letters = ['IVX', 'XLC', 'CDM', 'M'];

function arabicToRoman(n) {
    //checkIfNumberIsValidRoman(n);
    let result = '';
    i = 0;
    //znamo da imamo 4 znamenke
    n = doDigit(0, n);
    n = doDigit(1, n);
    n = doDigit(2, n);
    n = doDigit(3, n);

	return result;
}

function doDigit(i, n) {

    digits[n % 10].map(x => letters[i][x]).join('') + result;
    n = Math.floor(n / 10);
    return n;
}

// function checkIfNumberIsValidRoman(n) {
//     if (!Number.isInteger(n) || n <= 0 || n >= 4000) {
// 		throw new TypeError("The argument must be a natural number less than 4000!");
// 	}
// }

module.exports = arabicToRoman;


function suggestionTool(currentText) {
	//implementirati neku magiju
	//vratiti array top 5 sugestija
}

console.log(suggestionTool("I am"));

//sugestije trebaju raditi za do 3 riječi

//["I AM just", "I am often", "I am currently", "I am 90%"]