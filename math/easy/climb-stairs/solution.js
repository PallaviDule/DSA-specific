// var climbStairs = function(n) {
//     console.log('-----------------');
//     console.log('Steps:', n);
   
//     if(n <= 2) return n; // 1step = 1, 2step = [1+1], [2]
   
//     let first = 0, second = 1;
//     for(let i =3; i<=n; i++ ){  
//         [first, second] = [second, first + second];
//     }

//     return second;
// };

var climbStairs = function(n) {
    console.log('-----------------');
    console.log('Steps:', n);
    
    let steps = new Array(n+1);
    steps[1] = 1;
    steps[2] = 2;

    if(n<=2) return steps[n];

    for(let i=3; i<=n; i++){
        steps[i] = steps[i-1]+ steps[i-2];
    }

    return steps[n];
};

export function run() {
    console.log('Ways to reach step:', climbStairs(1));
    console.log('Ways to reach step:', climbStairs(5));
    console.log('Ways to reach step:', climbStairs(10));
}