/*
U svijetu postoje 4 baze u koje se upisuju podaci o ulasku
nebeskih tijela u naš sunčev sustav. Podaci od kojih se sastoje baze su:
- dur: (duration of the meteor)
- H1: beginning height
- H2: terminal height
- Q : (observed trajectory angle)
- lat: (observatory latitude)
- lng: (observatory longitude)
- date: (date of observation)
- month: (month of observation)
- year: (year of observation)
- time:  (hh:mm:ss of observation) 
No baze nemaju sve iste podatke,
već su one strukturirane kako slijedi:
* EU Baza *
dur, Q, H1, time, date, month, year, lat, lng
* US Baza *
H1, H2, date, month, year, lat, lng, dur, Q
* JP Baza *
year, month, date, time, dur, lat, lng, dur, Q
* SA (south america) Baza *
Q, H1, H2, dur, time, date, month, year, lat, lng
Potrebno je implementirati funkciju koja za svaku bazu 
pojedinačno pronalazi top 3 dana u godini 
u kojima se pojavljuju komete za zadanu godinu
za svaku od baza
*/

var eu_db = [
	[1, 30, 20000, "12:13:54", 7, 6, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 6, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 6, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 8, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 8, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 4, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 4, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 10, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 8, 2019, 34, 44],
	[2, 40, 4000, "19:10:50", 5, 3, 2018, 31, 45]
];

var us_db = [
	[2000, 100, 4, 4, 2019, 41, 45, 10, 45],
	[4200, 103, 3, 4, 2018, 34, 27, 4, 76],
	[4200, 103, 3, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 3, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 2, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 4, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 2, 4, 2019, 34, 27, 4, 76],
];

// * JP Baza *
// year, month, date, time, dur, lat, lng, dur, Q
var jp_db = [
    [2019, 5, 2, "19:10:50", 2, 400, 323, 7, 9],
    [2018, 5, 3, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 3, 5, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 5, 2, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 3, 1, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 3, 1, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 2, 1, "19:10:50", 2, 400, 323, 7, 9]
];

// * SA (south america) Baza *
// Q, H1, H2, dur, time, date, month, year, lat, lng
var sa_db = [
    [12, 32, 34, 65, "19:10:50", 2, 9, 2018, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 2, 3, 2018, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 2, 5, 2018, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 3, 9, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 3, 9, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 5, 8, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 22, 8, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 21, 8, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 22, 8, 2019, 3458, 3456 ],
];

function findMaxCommets(eu_db, us_db, jp_db, sa_db, year) {
    var us = formatUsDb(us_db)
    var eu = formatEuDb(eu_db)
    var jp = formatJpDb(jp_db)
    var sa = formatSaDb(sa_db)
    
    var output = outputData({"us": us, "eu": eu, "jp": jp, "sa": sa}, year)
    console.table(output)
    return output;
}

findMaxCommets(eu_db, us_db, jp_db, sa_db, 2018)


//funkcije
function formatEuDb(data){
    return data.map((element) =>{
        return {
            date: parseFloat(`${element[4]}.${element[5]}`),
            year: element[6],
            params: element
        }
    });
}
function formatUsDb(data){
    return data.map((element) =>{
        return {
            date: parseFloat(`${element[2]}.${element[3]}`),
            year: element[4],
            params: element
        }
    });
}
function formatJpDb(data){
    return data.map((element) =>{
        return {
            date: parseFloat(`${element[2]}.${element[1]}`),
            year: element[0],
            params: element
        }
    });
}
function formatSaDb(data){
    return data.map((element) =>{
        return {
            date: parseFloat(`${element[5]}.${element[6]}`),
            year: element[7],
            params: element
        }
    });
}


function filterDb(formatedDb, filterYear){
    return formatedDb.filter(({year}) =>{
        return year === filterYear
    })
    .reduce((acc, {date, params}) =>{
        (acc[date] = (acc[date] || [])).push(params)
        return acc
    }, {})
}

function sortDb(filteredDb){
    return Object.keys(filteredDb).map((element) =>{
        return {date: element, ocurency: filteredDb[element]}
    }).sort((a, b) =>{
        return b.ocurency.length - a.ocurency.length
    }).map((el) =>{
        return el.date
    })
}

function findTop3Days(baza, year){
    let filter = filterDb(baza, year)
    return sortDb(filter).splice(0, 3)
}

function outputData(baze, year){
    return Object.keys(baze)
            .reduce((acc, curr) =>{
                acc[curr] = findTop3Days(baze[curr], year)
                return acc
            }, {})
}