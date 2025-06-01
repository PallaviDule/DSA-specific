const spiralMatrix = (matrix) => {

}

export function run(){
    let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];
    console.log('Spiral Matrix:', searchMatrix(matrix) );
    console.log('-------------------------------------------------------------------');
    matrix = [[1]];
    console.log('Spiral Matrix:', searchMatrix(matrix));
    console.log('-------------------------------------------------------------------');
    matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
    console.log('Spiral Matrix:', searchMatrix(matrix) );
    console.log('-------------------------------------------------------------------');
}