/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     let result = [];
//     for(let i=0; i<=rowIndex; i++){
//         let current=[1];
//         for(let j=1; j<=i-1; j++){
//             current.push(result[j] + result[j-1]);
//         }

//         if(i>0) current.push(1);
//         result = current;
//     }
    
//     return result;
// };

var getRow = function(rowIndex) {
    let currentRow = [1];

    if (rowIndex === 0) {
        return currentRow;
    }

    for(let i=1; i<=rowIndex; i++){
        currentRow.push(0); //i=1: [1,0] //i=2: [1,1,0] // i=3: [1,2,1,0]
        for(let j=i; j>=1; j--){// 1 //2
            currentRow[j] = currentRow[j] + currentRow[j-1]; // [1, 1+0] //[1,1,0]->[1,2,1] // 
        }

    }

    return currentRow;
};


export function run() {
    console.log('Get 5th row of PascalTriangle:', getRow(5));
    console.log('Get 3rd row of PascalTriangle:', getRow(3));
    console.log('Get 1st row of PascalTriangle:', getRow(1));
}