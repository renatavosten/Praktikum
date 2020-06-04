function fizzBuzz(num) {
    //if(num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
    //if(num % 3 == 0 )return "Fizz";
    //if (num % 5 == 0) return "Buzz";

    let result = [];
    if(num % 3 == 0 )result.push("Fizz");
    if (num % 5 == 0) result.push("Buzz");
    return result.join("") || undefined; 
}
module.exports = fizzBuzz;

