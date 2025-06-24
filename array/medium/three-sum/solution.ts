/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b);
    let result = new Set<string>();

    for(let i=0; i< nums.length-1; i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skipping duplicates

        let start = i+1;
        let end = nums.length-1;

        while(start < end) {
            let add = nums[i]+nums[start] + nums[end];
            if( add === 0) {
                result.add([nums[i],nums[start],nums[end]].toString());

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

     return Array.from(result).map(s => s.split(',').map(Number));
};

export function run() {
    console.log('Three numbers that sum to zero:', threeSum([-1,0,1,2,-1,-4]));
    console.log('Three numbers that sum to zero:', threeSum([0,1,1]));
    console.log('Three numbers that sum to zero:', threeSum([0,0,0]));
}

// npx ts-node ./array/medium/three-sum/solution.ts
run();