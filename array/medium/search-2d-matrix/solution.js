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