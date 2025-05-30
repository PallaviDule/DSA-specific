const colMaxSum1 = (matrix) => {
    console.log('Input Matrix:', matrix);
    let row = 0;
    let maxSum = - Infinity;

    while(row < matrix.length){
        let currentRow = matrix[row];
        let currSum = currentRow.reduce((sum, curr) => sum += curr, 0);

        maxSum = Math.max(maxSum, currSum);
        row++;
    }

    return maxSum;
};

const colMaxSum = (matrix) => {
    console.log('Input Matrix:', matrix);
    let maxSum = - Infinity;

   for(let row of matrix){
        let currSum = 0;

        for(let col of row) {
            currSum += col;
        }

        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};


export function run(){
    let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];
    console.log('Max sum of row is', colMaxSum(matrix));
    console.log('-------------------------------------------------------------------');
    matrix = [
                [1, 2, 3, 4, 5 ],
                [5, 3, 1, 4, 2],
                [5, 6, 7, 8, 9],
                [ 0, 6, 3, 4, 12],
                [ 9, 7, 12, 4, 3]
            ];
    console.log('Max sum of row is', colMaxSum(matrix));
}