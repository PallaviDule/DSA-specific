## 167. Two Sum II - Input Array Is Sorted  

## Problem Statement  
Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.  
Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]`.

Your solution must use only constant extra space.

## Input  
- An integer array `numbers` sorted in non-decreasing order  
- An integer `target`  
- ### Constraints  
    - 2 <= numbers.length <= 3 * 10⁴  
    - -1000 <= numbers[i] <= 1000  
    - -1000 <= target <= 1000  
    - There is exactly one solution.  
    - You may not use the same element twice.  

## Output  
- An array of two integers `[index1, index2]` (1-indexed)

## Examples  
**Input:** numbers = [2,7,11,15], target = 9  
**Output:** [1,2]  

**Input:** numbers = [2,3,4], target = 6  
**Output:** [1,3]  

**Input:** numbers = [-1,0], target = -1  
**Output:** [1,2]  

### Encouragement Before You Peek 👀  
Think about the properties of sorted arrays. Can you take advantage of that to reduce time and space usage?

## Intuition  
Since the array is sorted, a brute-force approach using two nested loops would work but isn't optimal.  
Instead, we can use the **two-pointer technique** — one pointer at the start and one at the end — and move them based on the sum comparison.  
This takes advantage of the sorted nature and eliminates unnecessary checks.

## Approach  
[Solution Here](./solution.js)

- Initialize two pointers: `left` at index 0 and `right` at the last index.
- While `left < right`:
  - Calculate the sum of `numbers[left] + numbers[right]`.
  - If the sum is equal to the target, return `[left + 1, right + 1]` (since it's 1-indexed).
  - If the sum is less than the target, move `left` forward.
  - If the sum is greater than the target, move `right` backward.

This ensures we always move toward a better result without needing extra space.

### Pseudocode  
```
function twoSumSorted(numbers, target):
    left = 0
    right = numbers.length - 1

    while left < right:
        currentSum = numbers[left] + numbers[right]

        if currentSum == target:
            return [left + 1, right + 1]
        else if currentSum < target:
            left = left + 1
        else:
            right = right - 1
```

## Walkthrough Example  
**Input:** numbers = [2, 7, 11, 15], target = 9

Start with:  
- left = 0 (value = 2)  
- right = 3 (value = 15)  
Sum = 2 + 15 = 17 → too high → move `right` back

Next:  
- left = 0 (2)  
- right = 2 (11)  
Sum = 2 + 11 = 13 → still high → move `right` back

Next:  
- left = 0 (2)  
- right = 1 (7)  
Sum = 2 + 7 = 9 → perfect match → return [1, 2]

## Data evolution (should be table)  

| Step | Left Pointer | Right Pointer | Sum   | Action           |
|------|--------------|---------------|-------|------------------|
| 1    | 0 (2)        | 3 (15)        | 17    | Move right -1    |
| 2    | 0 (2)        | 2 (11)        | 13    | Move right -1    |
| 3    | 0 (2)        | 1 (7)         | 9     | Match → return   |

## Time and Space Complexity  
- **Time Complexity:** O(n), where n is the length of the array. Each pointer moves at most n steps.
- **Space Complexity:** O(1) — no extra space used apart from variables.


## Optional Solution:
Here we are using map just like we do in two sum.
🚫 Why this solution works fine but doesn't satisfy the problem's requirements:
- We are using a Map to store values → This uses O(n) extra space.
- Given array is sorted now, this solution works at finest with unsorted array.
- The problem requires a solution that works in O(1) extra space, leveraging the fact that the input array is sorted.
```js
var twoSum = function(numbers, target) {
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
```