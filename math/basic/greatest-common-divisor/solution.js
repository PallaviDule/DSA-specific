const gcdBruteForce = (num1, num2) => {
    console.log('Input num1:', num1, ' and num2:', num2);
    let minNum = Math.min(num1, num2);

    for(let i=minNum; i > 0; i--){
        if(num1%i === 0 && num2 % i === 0) {
            return i;
        }
    }
};
// Euclidean Algorithm (Iterative)
const getGCD = (num1, num2) => {
    console.log('Input num1:', num1, ' and num2:', num2);
    while(num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
       // console.log('Num1:', num1, " num2:", num2);
    }

    return num1;
}

export const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
x    }
    return a;
};

export const run = () => {
    console.log('Euclidean GCD:');
    console.log(getGCD(48, 18)); // Output: 6
        console.log("---------***----------")
    console.log(getGCD(100, 25)); // Output: 25    
    console.log("---------***----------")

    console.log(getGCD(7, 3)); // Output: 1
        console.log("---------***----------")

    console.log(getGCD(12, 8)); // Output: 4

    console.log('---------***----------');

    console.log('Brute Force GCD:');
    console.log(gcdBruteForce(48, 18)); // Output: 6
        console.log("---------***----------")

    console.log(gcdBruteForce(100, 25)); // Output: 25
        console.log("---------***----------")

    console.log(gcdBruteForce(7, 3)); // Output: 1
        console.log("---------***----------")

    console.log(gcdBruteForce(12, 8)); // Output: 4
};