/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) { // using binary search
    console.log('-----------***----------');
    console.log('Input array', nums, ', target:', target);
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target) return mid;
        // console.log('mid num:', nums[mid], ', target:', target);
        if(nums[mid] <  target){
            left = mid+1;
            // console.log('mid+1 = left = :', left);
        } else {
            right = mid-1 ;
            // console.log('mid-1 = right = :', right);
        }
    }
    return left;
};

export function run() {
    console.log('Search Insert Index', searchInsert([1,2,3,4,5], 3));
    console.log('Search Insert Index', searchInsert([1,3,5,6], 2));
    console.log('Search Insert Index', searchInsert([1,3,5,6], 7));
    console.log('Search Insert Index', searchInsert([1,3,5,6], 0));
}