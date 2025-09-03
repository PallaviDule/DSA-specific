/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minNum = Infinity;
    let maxNum = -Infinity;

    for(let i=0; i< nums.length; i++){
        minNum = minNum > nums[i] ? nums[i] : minNum;
        maxNum = maxNum > nums[i] ? maxNum : nums[i];
    }
    // Euclidean GCD
    while(minNum > 0){ // min = 3, max=7
        let temp = minNum; // 3 // 1
        minNum = maxNum % minNum; // 7%3= 1 // 3%1=0
        maxNum = temp ; // 3 // 1
    }

    return maxNum;
};

export const run = () => {
    console.log(findGCD([2,5,6,9,10])); // Output: 2
    console.log("---------***----------")
    console.log(findGCD([7,5,6,8,3])); // Output: 1   
    console.log("---------***----------")
    console.log(findGCD([3,3])); // Output: 3
};