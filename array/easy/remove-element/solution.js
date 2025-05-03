let removeElement = function(nums, val) {
    console.log('----------------+++---------------');
    console.log('Input array:',nums, ', and value:', val);
    let i = 0;
    for (let j = 0; j<nums.length; j++){
        if(val !== nums[j]) {
            nums[i] = nums[j];
            i++
        }
    }
    console.log('Updated input without value:', nums);
    return i;
}

export function run() {
    console.log('Length of array having no given element', removeElement([3,2,2,3], 3));
    console.log('Length of array having no given element', removeElement([0,1,2,2,3,0,4,2],2));
}