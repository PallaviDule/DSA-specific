/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length-1;

    while(start<=end){ 
        let mid = Math.floor((start+end)/2); // 1

        if(arr[mid] < arr[mid+1]) { // (10<5)
            start = mid+1;
        }
        else {
            end=mid-1; // 1-0=0
        }
    }

    return start;
};



export function run(){
    console.log('Peak Index:', peakIndexInMountainArray([0,1,0])); // 1
    console.log('Peak Index:', peakIndexInMountainArray([0,2,1,0])); // 1
    console.log('Peak Index:', peakIndexInMountainArray([0,5,6,10,5,2])); // 3
}