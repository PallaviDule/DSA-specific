## Array/Two Sum
### Problem: 
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

### Input:
```js
nums = [2, 7, 11, 15]
target = 9
```

### Output:
```js
[0, 1] 
```

### Approach
- Use a hashmap to store visited elements and their indices.
- Loop through the array and for each element, check if target - element exists in map.

### Example Walkthrough
Solution:  [Code](./solution.js)    
Let's walk through the example twoSum([2, 7, 11, 15], 9) step-by-step.

1. Initialization:  
    nums = [2, 7, 11, 15]   
    target = 9  
    map = {} (empty)    

2. First Iteration:     
    i = 0, num = 2  
    complement = 9 - 2 = 7  
    We check if 7 is in map → It's not.    
    Store 2 in map → map = {2: 0} (key = number, value = index)

3. Second Iteration:    
    i = 1, num = 7  
    complement = 9 - 7 = 2  
    We check if 2 is in map → It is!    
    map.get(2) gives us the index of 2, which is 0.     
    We return [0, 1], because nums[0] + nums[1] = 9.

So, the final result is [0, 1], as nums[0] = 2 and nums[1] = 7, which sum up to 9.

Map Evolution:



Iteration   | num   | complement    | map before check  | map after storing
---         |---    |---            |---                |---
1           | 2     | 7             | {}                | {2: 0}
2           | 7     | 2             | {2: 0}            | {2: 0, 7: 1}