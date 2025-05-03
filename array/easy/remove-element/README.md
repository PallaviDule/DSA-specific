## 27. Remove Element

## Problem Statement  
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place. The order of elements may change. Then return the number of elements that are not equal to `val`.

## Input  
- `nums`: an integer array  
- `val`: an integer value to remove  
- `0 <= nums.length <= 100`  
- `0 <= nums[i] <= 50`  
- `0 <= val <= 100`

## Output  
- Return the count of elements not equal to `val` after removing all occurrences in-place  
- The first `k` elements of `nums` should contain the result  
- Order does **not** matter  
- Remaining elements beyond `k` can be ignored

## Examples  

### Example 1  
**Input:** `nums = [3,2,2,3]`, `val = 3`  
**Output:** `2`, `nums = [2,2,_,_]`

### Example 2  
**Input:** `nums = [0,1,2,2,3,0,4,2]`, `val = 2`  
**Output:** `5`, `nums = [0,1,4,0,3,_,_,_]`

## Approach  
We want to remove all instances of a given value while modifying the array in-place.  
Since the order doesn’t matter, we don’t have to shift all elements — we can simply overwrite.

### Thought Process  
- We'll track the position to overwrite valid elements (not equal to `val`)  
- As we iterate, if the element is valid, we copy it to the current overwrite index  
- We don’t care about elements beyond the last valid one

### Pseudocode  
```
Initialize a variable overwriteIndex to 0
// This will mark the position where we place the next element that is not equal to the target value

Loop through the array: currentIndex from 0 to nums.length - 1
    If nums[currentIndex] is not equal to val:
        Assign nums[currentIndex] to nums[overwriteIndex]
        // Copy the valid element to the front part of the array
        Increment overwriteIndex by 1
        // Move overwrite pointer to the next position

After the loop ends:
    Return overwriteIndex
    // This represents the number of elements not equal to val
```

## Walkthrough Example  
**Input:** `nums = [0,1,2,2,3,0,4,2]`, `val = 2`

| currentIndex | nums[currentIndex] | overwriteIndex | Action                    | nums                  |
|--------------|--------------------|----------------|---------------------------|-----------------------|
| 0            | 0                  | 0              | Copy to index 0, ++index  | [0,1,2,2,3,0,4,2]     |
| 1            | 1                  | 1              | Copy to index 1, ++index  | [0,1,2,2,3,0,4,2]     |
| 2            | 2                  | 2              | Skip                      |                       |
| 3            | 2                  | 2              | Skip                      |                       |
| 4            | 3                  | 2              | Copy to index 2, ++index  | [0,1,3,2,3,0,4,2]     |
| 5            | 0                  | 3              | Copy to index 3, ++index  | [0,1,3,0,3,0,4,2]     |
| 6            | 4                  | 4              | Copy to index 4, ++index  | [0,1,3,0,4,0,4,2]     |
| 7            | 2                  | 5              | Skip                      |                       |

**Return:** `5`  
**Final array (first 5 elements):** `[0,1,3,0,4]`

## Time and Space Complexity  
- **Time:** O(n) — single pass through array  
- **Space:** O(1) — constant extra space  
