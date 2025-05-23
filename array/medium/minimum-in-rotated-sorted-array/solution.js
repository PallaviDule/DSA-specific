/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length-1;

    if(nums.length === 1) return nums[0];

    if(nums[start] < nums[end]) return nums[start];

    while(start < end){
        let mid = Math.floor((start+end)/2);

        if(nums[mid] > nums[end]){
            start= mid+1;
        } else {
            end= mid;
        } 
    }

    return nums[start];
};


export function run() {
    console.log('Minimun in rotated sorted array:', findMin([3,4,5,1,2])); // 1
    console.log('-------------------------------------------');
    console.log('Minimun in rotated sorted array::', findMin([4,5,6,7,0,1,2])); // 0
    console.log('-------------------------------------------');
    console.log('Minimun in rotated sorted array::', findMin([11,13,15,17])); // 11
    console.log('-------------------------------------------');
    console.log('Minimun in rotated sorted array::', findMin([1,2,3,4,5])); //1
    console.log('-------------------------------------------');    
    console.log('Minimun in rotated sorted array::', findMin([5,4,1,2,3])); // 1
    console.log('-------------------------------------------');    
    console.log('Minimun in rotated sorted array::', findMin([2,3,4,5,1])); // 1
    console.log('-------------------------------------------');
}