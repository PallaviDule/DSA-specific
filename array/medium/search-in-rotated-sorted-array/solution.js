var search = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target) return i;
    }

    return -1;
};

export function run() {
    console.log('Index of target in rotated sorted array');
}