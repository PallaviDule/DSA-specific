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
var threeSum2 = function(nums) {
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

// optimized: two pointers 
var threeSum = function(nums) {
    let newArr = nums.sort((a,b) => a-b);
    let result = [];

    for(let i=0; i< newArr.length; i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skipping duplicates: it actually reduced time 983ms to 70ms in leetcode
        if(nums[i] > 0) break;
        
        let start = i+1;
        let end = newArr.length-1;

        while(start < end) {
            let add = newArr[i]+newArr[start] + newArr[end];
            if( add === 0) {
                result.push([newArr[i],newArr[start],newArr[end]]);

                // Skip duplicates for left and right
                while (start < end && nums[start] === nums[start + 1]) start++;
                while (start < end && nums[end] === nums[end - 1]) end--;

                start++; end--;
            } else if(add > 0){
                end--;
            } else {
                start++;
            }
        }
    }

     return result;
}



export function run() {
    console.log('Three numbers that sum to zero:', threeSum([-1,0,1,2,-1,-4]));
    console.log('Three numbers that sum to zero:', threeSum([0,1,1]));
    console.log('Three numbers that sum to zero:', threeSum([0,0,0]));
}