/**
 * @param {number[]} nums
 * @return {boolean}
 */
// brute force with O(n^3) - definitely worst way
var find132pattern1 = function(nums) {
    for(let i=0; i< nums.length-2; i++){
        let j= i+1;
        while(nums[j] != nums[i] && j<=nums.length-2) {
            if(nums[i] < nums[j]) {
                let m = j+1;
                while (nums[m] !== nums[j] && m <= nums.length-1) {
                    if(nums[i] < nums[m] && nums[m] < nums[j]) {
                        return true;
                    }
                    m++;
                }
            }
            j++;
        }
    }

    return false;
};

// O(n^2) - may not work for large set
var find132pattern2 = function(nums) {
    console.log('Input array:', nums);
    for(let i=1; i< nums.length-1; i++){
        let smallestLeft = nums[0];

        for(let j = 0; j< i; j++){
            smallestLeft = Math.min(nums[j], smallestLeft);
        }

        if(smallestLeft < nums[i]) {
            for(let k = i+1; k <= nums.length-1; k++){
                if(smallestLeft < nums[k] && nums[k] < nums[i]) {
                        console.log('Pattern is: [', smallestLeft, nums[i], nums[k], ']');
                        return true;
                }
            }
        }
    }

    return false;
};

// optimized O(n)
var find132pattern = function(nums) {
    let stack =[]; // storing possible largest 3 value
    let third = - Infinity; // storing possible second largest 2 value;

    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] < third) return true; 

        while(stack.length > 0 && nums[i] > stack[stack.length-1]) {
            third = stack.pop(); // looks for the largest value in stack which is lower than nums[i] 
        }

        stack.push(nums[i]); // stack will have almost values of nums
    }

    return false;
};

export function run(){
    console.log("Does array have 132 pattern:", find132pattern([1,2,3,4])); // false
    console.log('----------------------------------------------------------------------');
    console.log("Does array have 132 pattern:", find132pattern([3,1,4,2])); //true
    console.log('----------------------------------------------------------------------');
    console.log("Does array have 132 pattern:", find132pattern([-1,3,2,0])); //true
    console.log('----------------------------------------------------------------------');
    console.log("Does array have 132 pattern:", find132pattern([3,5,0,3,4])); // true
        console.log('----------------------------------------------------------------------');
    console.log("Does array have 132 pattern:", find132pattern([3,0,5,3,4])); // true
}