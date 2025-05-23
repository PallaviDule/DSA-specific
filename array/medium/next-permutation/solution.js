// Brute way
// 1. Generate all permutations of the array.
// 2. Sort them lexicographically.
// 3. Find the index of the current permutation.
// 4. Return the next one in order.
// 5. If current is last, return the first.


const nextPermutation = (arr) =>{
    let pivotIndex = -1;
     // Step 1: Find the first element (from the end) that is smaller than its next
    for(let i=arr.length-2; i >=0; i--){
        if(arr[i] < arr[i+1]) {
            pivotIndex = i;
            break;
        }
    }
    // where we don't find element smaller than next element like 54321
    if(pivotIndex=== -1){
        return arr.reverse();
    }

    // find smallest element > pivot element in right part which is already in decreasing order
    for(let i=arr.length-1; i > pivotIndex; i--){ 
        if(arr[i] > arr[pivotIndex]){ // e.g. 
              [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
              break;
        }
    }
        console.log('array:', arr, 'pivot Index:', pivotIndex);

  
    // reverse right part after pivot
    let start = pivotIndex + 1;
    let end = arr.length - 1;  
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr;
}

function getNextPermutationDev(nums) {
    let j = nums.length - 1;

    while (j > 0 && nums[j] < nums[j - 1]) {
        j--;
    }

    if (j == nums.length - 1) {
        [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
        return nums;
    } else if (j == 0) {
        nums.reverse();
        return nums;
    } else {
        const prev = nums[j - 1];
        const curr = nums[j];
        
        for (let i = j - 1; i <= nums.length - 3; i++) {
            nums[i] = nums[i + 2];
        }

        nums[nums.length - 1] = curr;
        nums[nums.length - 2] = prev;
        return nums;
    }
}

export function run() {
    console.log('Next Permutation:', nextPermutation([1,2,3])); // [1,3,2]
    console.log('-------------------------------------------');
    console.log('Next Permutation:', nextPermutation([3,2,1,4])); // [1,2,3]
    console.log('-------------------------------------------');
    console.log('Next Permutation:', nextPermutation([1,1,5])); // [1,5,1]
    console.log('-------------------------------------------');
    console.log('Next Permutation:', nextPermutation([1,3,2])); // [2,1,3]
    console.log('-------------------------------------------');
    console.log('Next Permutation:', nextPermutation([2,3,1])); // [3,1,2]
    console.log('-------------------------------------------');
    console.log('Next Permutation:', nextPermutation([5,4,3,2,1])); // [1,2,3,4,5]
    console.log('-------------------------------------------');
    console.log('Next Permutation:', nextPermutation([1, 3, 5, 4, 2])); // [1,4,2,3,5]
    console.log('-------------------------------------------');
    
}
// [1,2,3], [1,3,2], [2,1,3], [2,3,1] [3,1,2] [3,2,1]