// 🚫 Why this solution works fine but doesn't satisfy the problem's requirements:
// You are using a Map to store values → This uses O(n) extra space.
// The problem requires a solution that works in O(1) extra space, leveraging the fact that the input array is sorted.
var twoSum2 = function(numbers, target) {
    if(!numbers) return [];
    let map = new Map();

    for(let i=0; i<numbers.length; i++){
        let compliment = target - numbers[i];
        if(map.has(compliment)){
            return [map.get(compliment), i+1];
        }

        map.set(numbers[i], i+1);
    } 
};

// using binary search
var twoSum1 = function(numbers, target) {
    if(!numbers) return [];
    for(let i=0; i<numbers.length; i++){
        let compliment = target - numbers[i];
        let start = i+1;
        let end = numbers.length-1;
        while(start <= end){
                // console.log('start:', start, ', end:', end, ', numbers[start]:', numbers[start], ', numbers[end]:', numbers[end]);
                let mid = Math.floor((start+end)/2);

                if(numbers[mid] === compliment) return [i+1, mid+1];
                if(numbers[mid] > compliment) end=mid-1
                else start=mid+1;
        }
    }
};

// two pointers
var twoSum = function(numbers, target) {
    console.log('----------------------------------------------------------------------');
    console.log('input array:', numbers, ', target:', target);
    if(!numbers) return [];
    let start = 0;
    let end = numbers.length-1;

    while(start <= end){
            // console.log('start:', start, ', end:', end, ', numbers[start]:', numbers[start], ', numbers[end]:', numbers[end]);
            if(numbers[start]+numbers[end] === target) return [start+1, end+1];

            if(numbers[start]+numbers[end] > target) end--;
            if(numbers[start]+numbers[end] < target) start++;
    }

    return [start+1, end+1];
};

export function run() {
    console.log('[Indices+1] of two numbers of which adding is target:', twoSum([2,7,11,15], 9));
    console.log('[Indices+1] of two numbers of which adding is target:', twoSum([5,25,75], 100));
    console.log('[Indices+1] of two numbers of which adding is target:', twoSum([-1, 0], -1));
    console.log('[Indices+1] of two numbers of which adding is target:', twoSum([2,3,4], 6));
}