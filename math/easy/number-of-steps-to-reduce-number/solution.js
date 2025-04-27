/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    console.log('For input number:', num);
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;  // If the number is even, divide by 2
        } else {
            num -= 1;  // If the number is odd, subtract 1
        }
        steps++;  // Increment step count
    }
    console.log('Number of steps to reduce a number to zero:', steps);
    console.log('------------***--------');
    return steps;
};

export const run = () => {
    // Example test cases
    numberOfSteps(14); // Output: 6
    numberOfSteps(8);  // Output: 4
    numberOfSteps(123); // Output: 12
}
