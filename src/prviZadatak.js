//Program učitava tekst. 
//Kada se upiše "." treba ispisati ukupan broj unesenog teksta i 
//ispisati sve unesene tekstove zajedno s tockom


let polje = [];
let suma = 0;

do{
    var tekst = prompt("Unesi tekst:");
    polje = polje + tekst;
    suma++
}while(tekst != '.')

console.log("Suma unesenog teksta: ", suma)
console.log("Ispis unesenog teksta: ", polje)