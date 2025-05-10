/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastIndex=0;

    for(let i=0; i<=nums.length-1; i++){
        if(nums[i] !== 0){
            [nums[i], nums[lastIndex]] = [nums[lastIndex], nums[i]];
            lastIndex++;
        }
    }
    return nums;
};

// var moveZeroes = function(nums) {
//     let lastIndex=0;

//     for(let i=0; i<=nums.length-1; i++){
//         if(nums[i] !== 0){
//             nums[lastIndex] = nums[i];
//             lastIndex++;
//         }
//     }

//     for(let i=lastIndex; i<=nums.length-1; i++){
//         nums[i] = 0;
//     }
//     return nums;
// };


export function run () {
    console.log('Move Zeros:', moveZeroes([0,1,0,3,12]));
    console.log('-----------------------------------');
    console.log('Move Zeros:', moveZeroes([1,0,2,0,3,12]));
    console.log('-----------------------------------');
    console.log('Move Zeros:', moveZeroes([0]));
}
