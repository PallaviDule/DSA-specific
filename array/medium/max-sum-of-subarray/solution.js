// Brute force 
const maxSumOfSubArray1 = (arr) => {
    console.log('Array:', arr);
    let maxSumSubArray = 0;

    for(let i=0; i<arr.length; i++){
        let currSum=0;
        
        for(let end=i; end<arr.length; end++){
            currSum +=arr[end];
            maxSumSubArray = Math.max(maxSumSubArray, currSum); 

        }
    }
    return maxSumSubArray;
}


// kadane's algorithm 
const maxSumOfSubArray2 = (arr) => {
    console.log('Array:', arr);
    let maxSum= arr[0];
    let currSum = arr[0];

    for(let i=0; i<arr.length; i++){        
            currSum = Math.max(arr[i], arr[i]+currSum);
            maxSum = Math.max(maxSum, currSum); 
    }
    return maxSum;
}

var maxSumOfSubArray = function(arr) {
    console.log('Array:', arr);
    let maxSum = arr[0]; 
    let currSum = 0;

    for(let i=0; i<arr.length; i++){
        currSum = currSum+arr[i];
        maxSum = Math.max(maxSum, currSum);
       
        if(currSum<0) currSum = 0;
    }

    return maxSum;
};

export function run() {
    console.log('Max sum of subarray:', maxSumOfSubArray([1]));
    console.log('--------------------------------------------');
    console.log('Max sum of subarray:', maxSumOfSubArray([-2,1,-3,4,-1,2,1,-5,4]));
    console.log('--------------------------------------------');
    console.log('Max sum of subarray:', maxSumOfSubArray([5,4,-1,7,8]));
    console.log('--------------------------------------------');
}