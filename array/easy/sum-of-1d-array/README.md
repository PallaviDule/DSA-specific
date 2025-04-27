# Running Sum of 1d Array

## Problem Statement
Given an array `nums`, we define a **running sum** of an array as:  
> `runningSum[i] = sum(nums[0] + nums[1] + ... + nums[i])`

Return the **running sum** of `nums`.

## Input
- A 1D array of integers `nums`.

## Output
- A 1D array where each element is the running sum at that index.

## Examples

#### Example 1:
```javascript
Input: nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]
Explanation: 
- Index 0: 1
- Index 1: 1 + 2 = 3
- Index 2: 1 + 2 + 3 = 6
- Index 3: 1 + 2 + 3 + 4 = 10
```

#### Example 2:
```javascript
Input: nums = [1, 1, 1, 1, 1]
Output: [1, 2, 3, 4, 5]
```

#### Example 3:
```javascript
Input: nums = [3, 1, 2, 10, 1]
Output: [3, 4, 6, 16, 17]
```

## Constraints
- `1 <= nums.length <= 1000`
- `-10⁶ <= nums[i] <= 10⁶`


### Encouragement Before You Peek 👀
✨ It is encouraged to first attempt solving the problem yourself. Once done, come back here to review the approach and solution in the respective file.

## Approach
Solution is [Here](./solution.js)

1. Start from the first index (index `1`).
2. For each element, **add the value of the previous element** to the current element.
3. Continue this till the end of the array.

This updates the original array to represent the running sum directly.

### Pseudocode:
```plaintext
for i = 1 to nums.length:
    nums[i] = nums[i] + nums[i-1]
return nums
```

## Walkthrough Example

For `nums = [1, 2, 3, 4]`:

| Step | i | nums[i-1] | nums[i] (before) | nums[i] (after) | nums array       |
|-----|---|------------|------------------|-----------------|------------------|
| 1   | 1 | 1          | 2                | 3               | [1, 3, 3, 4]      |
| 2   | 2 | 3          | 3                | 6               | [1, 3, 6, 4]      |
| 3   | 3 | 6          | 4                | 10              | [1, 3, 6, 10]     |

✅ Final Output: `[1, 3, 6, 10]`


## Time and Space Complexity
Complexity | Details
---|---
Time | O(n) - We iterate through the array exactly once.
Space | O(1) - We modify the input array itself without using extra space. (Ignoring output space)