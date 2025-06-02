/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    console.log('Input matrix:',matrix, 'target:', target);
    let colEnd = matrix[0].length-1;
    let row = 0;

    while(colEnd >= 0 && row < matrix.length) {
        if(matrix[row][colEnd] === target) return true;
        
        if(target < matrix[row][colEnd]) {
            colEnd--;
        } else {
            row++;
        }

    }

    return false;
};

var searchMatrix2 = function(matrix, target) {

    for(let i=0; i< matrix.length; i++){
        let arr = matrix.pop();

        if(arr.includes(target)) return true;
    }

    return false;
};


export function run(){
    let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
    console.log('Sum of Matrix diagonals', searchMatrix(matrix, 5) ); // true
    console.log('-------------------------------------------------------------------');
    console.log('Sum of Matrix diagonals', searchMatrix(matrix, 20) ); // false
    console.log('-------------------------------------------------------------------');
}