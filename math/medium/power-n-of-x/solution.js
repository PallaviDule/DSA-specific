/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 // brute // time: O(n) worst with bigger number.
 var myPow1 = function(x, n) {
    if(n===0) return 1.0;
    if(n===1) return x;
    if(x===0) return 0.0;
    if(x=== 1) return 1;
    if(x=== -1 && n%2=== 0) return 1;
    if(x=== -1 && n%2 !== 0) return -1;

    let result = 1;
    let num = n > 0 ? x : (1/x);
    let power = Math.abs(n);
    for(let i=1; i<=power; i++){
        result *= num;  
    }

    return result;
};

// better: Exponentiation by Squaring, which reduces time complexity to O(log n).
var myPow = function(x, n) {
    if(n===0) return 1;

    let result = 1;
    if(n<0){ // if power is negative make it positive first
        n = -n; // making number positive
        x = 1/x
    }
    
    // if x=2, n=10 => 1010 in binary
    while (n > 0) {
        if(n%2===1){ // If it is 1, then only it should be added to result
            result *= x; // 
        }
        x *= x; // 3*3 //9*9 // 81*81
        n = Math.floor(n/2);
    }

    return result;
};


export function run() {
    console.log('2^5:', myPow(2,5));
    console.log('3^6:', myPow(3,6));
    console.log('2^10', myPow(2,10));
    console.log('7^3:', myPow(7,3));
}