var fourSum = function(nums, target) {
        console.log('Input array:', nums, ' and target:', target);
    nums.sort((a,b) => a - b);
    const result = [];
    const n = nums.length;

    for(let i=0; i < n - 3; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;  // skip duplicates

        for(let j = i + 1; j < n - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j-1]) continue;  // skip duplicates

            let left = j + 1;
            let right = n - 1;

            while(left < right) {
                const total = nums[i] + nums[j] + nums[left] + nums[right];

                if(total === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    // skip duplicates
                    while(left < right && nums[left] === nums[left+1]) left++;
                    while(left < right && nums[right] === nums[right-1]) right--;
                    left++;
                    right--;
                } else if(total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};

export function run() {
    console.log('Sum of 4 numbers:', fourSum([-1,0,1,2,-1,-4], 0));
    console.log('--------------------------------------------------');
    console.log('Sum of 4 numbers:', fourSum([2,2,2,2,2], 8));
}