/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // brute : O(n^2)
var productExceptSelf1 = function(nums) {
    let result = [];
    for(let i=0; i<nums.length; i++){
        let current =1 ;
        for(let j=0; j<nums.length; j++){
            if(j !== i) {
                current *= nums[j];
            }
        }
        result.push(current);
    }

    return result;
};

 // better:  no division but O(n)
var productExceptSelf2 = function(nums) {
    let prefix = [1];
    let suffix = new Array(nums.length).fill(1);
    let result = [];

    for(let i=1; i<nums.length; i++){ 
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    for(let i=nums.length-2; i>=0; i--){  // i=3
        suffix[i] = suffix[i+1]*nums[i+1];
    }
    for(let i=0; i<nums.length; i++){ 
       result[i] = prefix[i]*suffix[i];
    }

    return result;
};

 // optimised:  no division but O(n)
var productExceptSelf3 = function(nums) {
    let result = new Array(nums.length).fill(1);
    let suffix =1;

    for(let i=1; i<nums.length; i++){ 
        result[i] = result[i-1] * nums[i-1];
    }
    for(let i=nums.length-2; i>=0; i--){  // i=3
        suffix *= nums[i+1];
        result[i] *= suffix;
    }
    return result;
};

// optimised:  no division but O(n) and O(1) space
var productExceptSelf4 = function(nums) { // [1,2,3,4]
    let result = new Array(nums.length).fill(1); // [1,1,1,1]
    let suffix =1;
    let prefix = 1;
        console.log('result:', result);

    for(let i=0; i<nums.length; i++){  //0 //1 // 2
        result[i] = prefix; // [1,1,1,1] // [1,1,1,1] //[1,1,2,1] // [1,1,2,6]
        prefix *= nums[i]; // [1*1]=1 //[1*2]=2 // [2*3]=6 // [6*4]
    }
    console.log('result:', result);
    for(let i=nums.length-1; i>=0; i--){  // 3
        result[i] *= suffix; // [1,1,1,1]
        suffix *= nums[i]; //[1*4]
    }
    console.log('result:', result);

    return result;
};



 // optimised:  no division but O(n)
 var productExceptSelf = function(nums) { // [1,2,3,4]
    let result = new Array(nums.length).fill(1); // [1,1,1,1]
    let suffix =1;

    for(let i=1; i<nums.length; i++){  //1 // 2
        result[i] = result[i-1]*nums[i-1]; // [1,`1`,1,1] //[1,1,`2`,1] // [1,1,2,`6`]
    }
    
    // console.log('result:', result);
    for(let i=nums.length-1; i>=0; i--){  // 3
        result[i] *= suffix; // [1,1,1,1]
        suffix *= nums[i]; //[1*4]
    }

    return result;
};


export function run(){
    console.log('Result:', productExceptSelf([1,2,3,4])); // [24,12,8,6]
    console.log('Result:', productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]
}