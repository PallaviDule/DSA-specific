/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top =0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    let value = 0;
    let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while(value < n*n){
        for(let i=left; i<= right; i++){
            result[top][i] = ++value;
        }
        top++;

        for(let i=top; i<= bottom; i++){
            result[i][right] = ++value;
        }

        right--;
        if(top <= bottom) {
            for(let i=right; i>=left; i--) {
                result[bottom][i] = ++value;
            }
        }
        bottom--;

        if(left <=right){
            for(let i=bottom; i >= top; i--){
                result[i][left] = ++value;
            }
        }
        left++;
    }
    
    return result;
};

export function run(){
    console.log('Genrate Spiral Matrix:', generateMatrix(3) );
    console.log('-------------------------------------------------------------------');
    console.log('Generate Spiral Matrix:', generateMatrix(4));
    console.log('-------------------------------------------------------------------');
}
