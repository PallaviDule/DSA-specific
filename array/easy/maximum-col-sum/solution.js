const colMaxSum = (matrix) => {
    let maxSum = - Infinity;
    let rowCount = matrix.length;
    let colCount = matrix[0].length;
    let result = [];

    for(let col=0; col < colCount; col++){
        let sum = 0;
        for(let row=0; row<rowCount; row++){
            sum += matrix[row][col]; 
        }
        if(sum > maxSum) {
            maxSum = sum;
            result[0] = sum;
            result[1] = col+1;
        }
    }

    return result;
};


export function run(){
    let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];
    let result =  colMaxSum(matrix);         
    console.log('Column', result[1], ' has maximum sum of:', result[0] );
    console.log('-------------------------------------------------------------------');
    matrix = [
                [1, 2, 3, 4, 5 ],
                [5, 3, 1, 4, 2],
                [5, 6, 7, 8, 9],
                [ 0, 6, 3, 4, 12],
                [ 9, 7, 12, 4, 3]
            ];
    result =  colMaxSum(matrix);         
    console.log('Column', result[1], ' has maximum sum of:', result[0] );
        console.log('-------------------------------------------------------------------');

    matrix =  [
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9]
    ];
    result =  colMaxSum(matrix);         
    console.log('Column', result[1], ' has maximum sum of:', result[0] );
    console.log('-------------------------------------------------------------------');
}