//1. funkcija ne smije biti dulja od 5-6 redaka
//2. Single responsibility principal
//3. No code duplication
//4. No IF's
//a. Strukture podatak su superiorne kodu
//b. Bez prijevremene optimizacije (korak po korak)



function arabicRoman(num) {
    if(num == 1) return "I";
    if(num == 2) return "II";
    if(num == 3) return "III";
    if(num == 4) return "IV";
    if(num == 5) return "V";
    if(num == 9) return "IX";
}


module.exports = arabicRoman;