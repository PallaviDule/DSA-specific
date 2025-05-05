var plusOne = function(digits) {
    console.log('------------------*--*---------------');
    console.log('Digits:', digits);
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

 export function run() {
     console.log('Added plus one to the number: ', plusOne([1,2,3])); 
     console.log('Added plus one to the number: ', plusOne([9,9]));
     console.log('Added plus one to the number: ', plusOne([1,4,9]));
   }