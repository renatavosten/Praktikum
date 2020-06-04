let pricelist = [
    {from: '2020-01-01', to: '2020-02-01', price: 34.5},
    {from: '2020-02-02', to: '2020-03-01', price: 37.0},
    {from: '2020-03-02', to: '2020-05-15', price: 39.0},
    {from: '2020-05-16', to: '2020-06-15', price: 37.0},
];
​
function logPricelist(pricelist) {
    let cijene = [];
    for (let i = 0; i < pricelist.length; i++) {
	cijene.push(pricelist[i]);
    }
    cijene.sort(function(a, b) {
	return a.price - b.price;
    });
    let ispis = [];
    for(let i = 0; i < cijene.length; i++) {
	ispis.push(cijene[i].price + " : " + cijene[i].from + " do " + cijene[i].to);
    }
    return ispis;
}
​
logPricelist(pricelist);
//gtreba ispisati slijedeće:
/*
34.5 : 2020-01-01 do 2020-02-01
37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
39.0 : ‘2020-03-02 do 2020-05-15
*/

