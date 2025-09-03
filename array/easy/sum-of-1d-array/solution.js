var runningSum = function(nums) { 
    console.log('input:', nums);
    for(let i=1; i<nums.length; i++){
        nums[i] = nums[i] + nums[i-1];
    }
    console.log('output:', nums);
    console.log('--------***-------');
}

// npm start sumOf1dArray
export function run() {
    runningSum([1, 2, 3, 4]); // [ 1, 3, 6, 10 ]
    runningSum([1, 1, 1, 1, 1]);
    runningSum([3, 1, 2, 10, 1]);
}