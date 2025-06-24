/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 // brute force: time limit exceeded
var threeSum1 = function(nums) {
    let result = new Set()
    for(let i=0; i< nums.length-2; i++){
        for(let j=i+1; j < nums.length-1; j++){
            for(let k=j+1; k < nums.length; k++){
                if((nums[i]+nums[j]+nums[k]) === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }

    return Array.from(result).map(s => s.split(',').map(Number));
};

// two pointers
var threeSum = function(nums) {
    let result = new Set()
    for(let i=0; i< nums.length; i++){
         let target = -nums[i];
         let set = new Set();
        for(let j=i+1; j < nums.length; j++){ 
            let target2 = target - nums[j];
            if(set.has(target2)) {
                const triplet = [nums[i], nums[j], target2].sort((a, b) => a - b);
                result.add(triplet.toString());
            } 
            set.add(nums[j]);
        }
    }

     return Array.from(result).map(s => s.split(',').map(Number));
}