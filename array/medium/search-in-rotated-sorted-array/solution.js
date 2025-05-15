/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // brute - linear
var search1 = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target) return i;
    }

    return -1;
};

 // example says  O(log n) runtime complexity: which binary
 var search = function(nums, target) {
    console.log('Input array:', nums, ', target:', target);
    let start = 0;
    let end = nums.length -1;

    while(start<=end){
        let mid = Math.floor((start + end)/2); // (0+2)/2 //

        if(nums[mid] === target) return mid; 

        if(nums[start]<=nums[mid]){ // 5 <= 1
            if(nums[start] <= target && target < nums[mid]) { 
                end = mid-1;
            } else {
                start = mid+1;
            }
        } else {
            if(nums[mid] < target && target <= nums[end]) { 
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
    } 

    return -1;
};
export function run() {
    console.log('Index of target in rotated sorted array', search([4,5,6,7,0,1,2], 0));
    console.log('-------------------------------------------------------------------');
    console.log('Index of target in rotated sorted array', search([4,5,6,7,0,1,2], 3));
    console.log('-------------------------------------------------------------------');
    console.log('Index of target in rotated sorted array', search([1], -1));
    console.log('-------------------------------------------------------------------');
    console.log('Index of target in rotated sorted array', search([5,1,3], 3));    
}