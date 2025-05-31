var searchMatrix = function(matrix, target) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let start = 0;
    let end = (rowLength * colLength)-1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        let col = mid%colLength;
        let row = Math.floor(mid/colLength);
        
        if(matrix[row][col]=== target) return true;

        if(matrix[row][col] < target) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }

    return false;
};

export function run(){
    let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];
    console.log('Sum of Matrix diagonals', searchMatrix(matrix, 4) );
    console.log('-------------------------------------------------------------------');
    matrix = [[1]];
    console.log('Sum of Matrix diagonals', searchMatrix(matrix, 1) );
    console.log('-------------------------------------------------------------------');
    matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
    console.log('Sum of Matrix diagonals', searchMatrix(matrix, 13) );
    console.log('-------------------------------------------------------------------');
}