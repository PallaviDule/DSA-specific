/**
 * @param {number[]} nums
 * @return {number}
 */
 // it uses O(n) space
var majorityElement1 = function(nums) {
    let frequency = new Map();

    for(let i=0; i<nums.length; i++){
        let count = frequency.get(nums[i]) || 0;
            count +=1;
        
        frequency.set(nums[i], count);

        if(count > nums.length/2) return nums[i];
    }
};

// Boyer-Moore Voting Algorithm
var majorityElement = function(nums) {
    console.log('input array:', nums);
    let count = 0;
    let num;

    for(let i=0; i<nums.length; i++){
        if(count === 0) {
            num = nums[i]
        } 

        if(nums[i] === num) {
            count++;
        } else {
            count--;
        }
        
        if(count > Math.floor(nums.length/2)) return num;
    }

    return num;
};



export function run() {
    console.log('Majority Element:', majorityElement([3,2,3]));
    console.log('-------------------------------')
    console.log('Majority Element:', majorityElement([2,2,1,1,1,2,2]));
}