## 53. Maximum Subarray

## Problem Statement
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Input
- `nums`: an array of integers
- Constraints:
  - `1 <= nums.length <= 10^5`
  - `-10^4 <= nums[i] <= 10^4`

## Output
- An integer representing the largest sum of a contiguous subarray.

## Examples
```js
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23
```

### Encouragement Before You Peek 👀
Try solving this problem by thinking about how to track the sum as you scan through the array. What information do you need to keep at each step to find the largest sum?   
what is subArray?  continous part of array. 
e.g [1,2,3] -> 1,2,3,12,23,123 
```
(n*(n+1))/2 = (3*(3+1))/2 = (3*4)/2 = 6
```

## Intuition
We are trying to find a **subarray** with the **maximum sum**. A brute-force approach would try every possible subarray, but that would be too slow for large input sizes.

Instead, we observe that we can process the array in a single pass:
- At each index, we decide whether to **extend** the previous subarray or **start fresh**.
- We keep track of the maximum seen so far and update it as needed.

This is famously known as **Kadane's Algorithm**.
> If the **current sum drops below zero**, it can only hurt future results. So **you drop it** and **start fresh** from the next number.

## Approach
[Solution Here](./solution.js)
We iterate through the array and at each step:
- Decide whether to include the current number in the running subarray or start a new subarray from current number.
- Keep track of the global maximum encountered.

### Pseudocode
```
Initialize maxSum = nums[0]
Initialize currentSum = nums[0]

For i = 1 to nums.length - 1:
    currentSum = max(nums[i], currentSum + nums[i])
    maxSum = max(maxSum, currentSum)

Return maxSum
```

## Walkthrough Example (not a table)
Input: `[-2,1,-3,4,-1,2,1,-5,4]`

Start with first element:
- currentSum = -2, maxSum = -2

Move to 1:
- max(1, -2+1) = 1 → currentSum = 1, maxSum = 1

Move to -3:
- max(-3, 1-3) = -2 → currentSum = -2

Move to 4:
- max(4, -2+4) = 4 → currentSum = 4, maxSum = 4

Move to -1:
- max(-1, 4-1) = 3 → currentSum = 3

Move to 2:
- max(2, 3+2) = 5 → currentSum = 5, maxSum = 5

Move to 1:
- max(1, 5+1) = 6 → currentSum = 6, maxSum = 6

Move to -5:
- max(-5, 6-5) = 1 → currentSum = 1

Move to 4:
- max(4, 1+4) = 5 → currentSum = 5

Final maxSum = 6

## Data evolution
| Index | Num | Current Sum= max(arr[i], arr[i]+currSum) | Max Sum = max(maxSum, currSum)|
|-------|-----|------------------------------------------|-------------------------------|
| 0     | -2  | -2                                       | -2                            |
| 1     | 1   | 1  = (1, 1-2)                            | 1 = (1, 1)                    |
| 2     | -3  | -2 = (-3, -3+1)                          | 1 = (1, -2)                   |
| 3     | 4   | 4 = (4, 4+(-2))                          | 4 = (1, 4)                    |
| 4     | -1  | 3 = (-1, -1+4)                           | 4 = (3, 4)                    |
| 5     | 2   | 5 = (5, 3)                               | 5 = (5, 4)                    |
| 6     | 1   | 6 = (1, 1+5)                             | 6 = (6, 5)                    |
| 7     | -5  | 1 = (-5, -5+6)                           | 6  = (1, 6)                   |
| 8     | 4   | 5 = (4, 4+1)                             | 6  = (5, 6)                   |

## Time and Space Complexity
- **Time Complexity**: O(n) – We traverse the array once.
- **Space Complexity**: O(1) – We use constant extra space.

