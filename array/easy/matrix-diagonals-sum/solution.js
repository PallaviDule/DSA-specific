/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
        console.log('Input matrix:', mat);
        let sum = 0;

        for(let i =0; i < mat.length; i++){
            sum += mat[i][i];

            if(i != mat.length - i -1) {
                sum += mat[i][mat.length-i-1]
            }
        }

    return sum;
};


export function run(){
    let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];
    console.log('Sum of Matrix diagonals', diagonalSum(matrix) ); // 1 + 5 + 9 + 3 + 7 = 25
    console.log('-------------------------------------------------------------------');
    matrix = [
                [1, 2, 3, 4, 5 ],
                [5, 3, 1, 4, 2],
                [5, 6, 7, 8, 9],
                [ 0, 6, 3, 4, 12],
                [ 9, 7, 12, 4, 3]
            ];
    console.log('Sum of Matrix diagonals', diagonalSum(matrix) );
    console.log('-------------------------------------------------------------------');
    matrix = [
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1]
    ];
    console.log('Sum of Matrix diagonals', diagonalSum(matrix) );
    console.log('-------------------------------------------------------------------');
}