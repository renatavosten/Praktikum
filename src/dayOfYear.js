function dayOfYear(year, month, day) {
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];

    let sum = 0;

    for(var i = 0; i < month - 1; i++) {
        sum += months[i];
    }
    let leap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));

    if(month > 2 && leap) {
        sum += 1;
    }
    return (sum + day);
}



module.exports = dayOfYear;