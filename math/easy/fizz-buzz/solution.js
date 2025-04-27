/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
};

export const run = () => {
    // Example test cases
    console.log(fizzBuzz(3)); // Output: ["1", "2", "Fizz"]
    console.log(fizzBuzz(5)); // Output: ["1", "2", "Fizz", "4", "Buzz"]
    console.log(fizzBuzz(15)); // Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
}
