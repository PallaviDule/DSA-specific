var removeDuplicates = function(nums) {
    console.log('-----------***----------');
    console.log('Input array with duplicates:', nums);

    let lastUniqueIndex = 0;
    for(let j = 1; j< nums.length; j++){
        if(nums[lastUniqueIndex] !== nums[j]) { // no duplicate as it is a sorted array
            lastUniqueIndex++; // store next unique value in next index
            nums[lastUniqueIndex] = nums[j];
        }
    }

    return lastUniqueIndex+1;
}


export function run() {
    console.log('Length of array with unique elements', removeDuplicates([1, 1, 2]));
    console.log('Length of array with unique elements', removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
}