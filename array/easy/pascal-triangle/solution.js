/**
 * @param {number} numRows
 * @return {number[][]}
 */
// [                     row values    pushing 1st and last element(if i>1), 
//                                     numbers of value to print
//   [1],           i=0     1(i+1)     [1]    remains 0 (i)
//   [1,1],         i=1     2(i+1)     [1][1] remains 0(i-1)
//   [1,2,1],       i=2     3(i+1)     [1][1] remains 1
//   [1,3,3,1],     i=3     4(i+1)     [1][1] remains 2
//   [1,4,6,4,1]    i=4     5(i+1)     [1][1] remains 3
// ]
var generatePascalTriangle = function(numRows) {
    let result = [];

    for(let i=0; i<numRows; i++) {
        let current = [1];
        // starting from 1 as we are already pushing 1st element
        // 
        for(let j=1; j<= i-1; j++) { 
            current.push(result[i-1][j] + result[i-1][j-1]);
        }
        if (i > 0) current.push(1);
        
        result.push(current);
    }

    return result;
};



export function run() {
    console.log('Generated PascalTriangle:', generatePascalTriangle(5));
    console.log('Generated PascalTriangle:', generatePascalTriangle(3));
    console.log('Generated PascalTriangle:', generatePascalTriangle(1));
}