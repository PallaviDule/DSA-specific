/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    console.log('------***------');
    console.log('Number:', x);
    if(x=== 0 || x===1) return x;

    let start=1, end = x;

    while(start<=end){
        let mid = Math.floor((start + end) / 2);
        let squareOfMid = mid*mid;
        if(squareOfMid === x) return mid;
        else if(squareOfMid < x) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }  

    return end;
};

// Run function to test examples
export const run = () => {
    console.log('Square root:',mySqrt(0));
    console.log('Square root:',mySqrt(1));
    console.log('Square root:',mySqrt(16));
    console.log('Square root:',mySqrt(8));
};
