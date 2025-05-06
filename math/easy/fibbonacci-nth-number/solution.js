/**
 * @param {number} n
 * @return {number}
 */
// avoid this recurrsion option, as it becomes inefficient due to repeated calculations.  
// var fib = function(n) {
//     if(n<=1) {
//         return n
//     } else {
//         return fib(n-1) + fib(n-2)
//     }
// };

var fib = function(n) {
    console.log('-----------------');
    console.log('number:', n);
    if(n <= 1) return n;
   let current, first = 0, second = 1;
    while(n>1){   // for(let i=2; i<n; i++)
        current = first + second;  // [first, second] = [second, first + second]; and return second
        first = second;
        second = current;
        n--;
    }

    return current;
};

var fib = function(n) {
    console.log('-----------------');
    console.log('number:', n);
    if(n <= 1) return n;
   let current, first = 0, second = 1;
    for(let i =2; i<=n; i++ ){   // for(let i=2; i<n; i++)
        [first, second] = [second, first + second];
    }

    return second;
};

// use this only when you need whole fib series 
// var fib = function(n) {
//     let series = [0, 1];
//     for(let i=2; i<=n; i++) {
//         series.push(series[i-1]+series[i-2])
//     }
//     return series[n];
// };


export function run() {
    console.log('Fibbonacci Nth number is:', fib(0));
    console.log('Fibbonacci Nth number is:', fib(1));
    console.log('Fibbonacci Nth number is:', fib(5));
    console.log('Fibbonacci Nth number is:', fib(10));
}