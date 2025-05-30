/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
    let reverse = 0;
    let sign = 1;
    
    if(x < 0){
        sign = -1;
        x = -x
    }

    while(x > 0) {
        if(reverse > (2 ** 31)/10) return 0;

        let digit = x%10;
        x = Math.floor(x/10);

        reverse = reverse*10 + digit;
    }

    return reverse * sign;
};

var reverse2= function(x) {
    let sign = 1;
    
    if(x < 0){
        sign = -1;
        x = -x
    }
    let reverse = x.toString().split('').reverse().join('');

    if(reverse > (2 ** 31)) return 0;
    return reverse*sign;
};

var reverse = function(x) {
    console.log('Input Integer:', x)
    let reverse = 0
    let isNegative = (x < 0)
    let posNumber = x
    if (isNegative){
        posNumber = -1 * posNumber
    }
    while (posNumber > 0){
        reverse = (reverse * 10) + (posNumber % 10)
        posNumber = Math.floor(posNumber / 10)
    }
    if(reverse > Math.pow(2, 31)-1){
        return 0
    }
    return isNegative ? -reverse : reverse
};

// Sample run() function for testing
export const run = () => {
    console.log(reverse(123)); // Output: 321
    console.log("---------***----------");
    console.log(reverse(-123)); // Output: -321
    console.log("---------***----------");
    console.log(reverse(120)); // Output: 21
    console.log("---------***----------");
    console.log(reverse(0)); // Output: 0
    console.log("---------***----------");
    console.log(reverse(1534236469)); // Output: 0 (overflow)
    console.log("---------***----------");
};