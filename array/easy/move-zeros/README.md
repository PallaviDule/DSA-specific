## 283. Move Zeroes  

## Problem Statement  
Given an integer array `nums`, move all `0`'s to the **end** of it while maintaining the **relative order** of the non-zero elements.  
**Do this in-place** without making a copy of the array.

## Input  
- An array `nums` of integers  
- Constraints:  
  - `1 <= nums.length <= 10⁴`  
  - `-2³¹ <= nums[i] <= 2³¹ - 1`

## Output  
- Modify the input array in-place so that all zeroes are moved to the end  
- The order of non-zero elements must remain the same  

## Examples  

### Example 1  
**Input:**  
`nums = [0, 1, 0, 3, 12]`  
**Output:**  
`[1, 3, 12, 0, 0]`

### Example 2  
**Input:**  
`nums = [0]`  
**Output:**  
`[0]`

### Encouragement Before You Peek 👀  
Try solving this without creating a new array and minimizing the number of operations.


# Intuition  
The main idea is to shift all non-zero elements to the front and then fill the remaining positions with zeroes.

# Approach  
[Solution is here](./solution.js)
We use a **two-pointer** technique. One pointer (`lastNonZeroIndex`) keeps track of the position where the next non-zero element should be placed.

### Tags  
`Array`, `Two Pointers`, `In-Place`, `Simulation`

### Pseudocode  

```
initialize lastNonZeroIndex = 0

for i from 0 to nums.length - 1:
    if nums[i] != 0:
        swap nums[i] with nums[lastNonZeroIndex]
        lastNonZeroIndex++
```

---

## Walkthrough Example  

Input: `[0, 1, 0, 3, 12]`  
Steps:  
- i = 0 → 0 → skip  
- i = 1 → nums[1] = 1 → swap with nums[0] → `[1, 0, 0, 3, 12]`  
- i = 2 → 0 → skip  
- i = 3 → nums[3] = 3 → swap with nums[1] → `[1, 3, 0, 0, 12]`  
- i = 4 → nums[4] = 12 → swap with nums[2] → `[1, 3, 12, 0, 0]`

## Data evolution  

| i | nums[i] | lastNonZeroIndex | Array State       | Action                   |
|---|---------|------------------|--------------------|---------------------------|
| 0 | 0       | 0                | [0,1,0,3,12]       | skip                      |
| 1 | 1       | 0 → 1            | [1,0,0,3,12]       | swap 1 with nums[0]       |
| 2 | 0       | 1                | [1,0,0,3,12]       | skip                      |
| 3 | 3       | 1 → 2            | [1,3,0,0,12]       | swap 3 with nums[1]       |
| 4 | 12      | 2 → 3            | [1,3,12,0,0]       | swap 12 with nums[2]      |

## Time and Space Complexity  
- **Time:** O(n) – Each element is visited once.  
- **Space:** O(1) – No extra space used, in-place modification.