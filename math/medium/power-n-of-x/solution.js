/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 // brute // time: O(n) worst with bigger number.
 var myPow = function(x, n) {
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
    if(n===0) return 1.0;
    if(n===1) return x;
    if(x===0) return 0.0;
    if(x=== 1) return 1;
    if(x=== -1 && n%2=== 0) return 1;
    if(x=== -1 && n%2 !== 0) return -1;



    return result;
};