## 35. Search Insert Position

## Problem Statement  
Given a sorted array of distinct integers and a target value, return the index if the target is found.  
If not, return the index where it would be if it were inserted in order.

## Input  
- `nums`: an array of integers sorted in ascending order  
- `target`: an integer to search for  
    #### Constraints  
- `1 <= nums.length <= 10⁴`  
- `-10⁴ <= nums[i] <= 10⁴`  
- `nums` contains distinct values  
- `-10⁴ <= target <= 10⁴`

## Output  
- Integer representing the index of the target or the position where it should be inserted

> **✨ It is encouraged to first attempt solving the problem yourself. Once done, come back here to review the approach and solution in the respective file.**

## Approach  
 **Tags: Binary Search** 

- We are told to aim for O(log n), which immediately points to Binary Search.
- The array is sorted, and we need to find the correct position — either where the element exists or where it should go.
- So, instead of a linear scan, we can perform a binary search and return the index of the first value that is greater than or equal to the target.
- Why binary search?
    - Sorted array
    - Need O(log n) efficiency
    - Problem is about positioning, which binary search handles well

### Pseudocode  
```
Initialize low = 0, high = nums.length - 1

While low <= high:
    mid = floor((low + high) / 2)

    If nums[mid] == target:
        Return mid

    If target < nums[mid]:
        high = mid - 1
    Else:
        low = mid + 1

Return low  // correct insert position
```

## Walkthrough Example  
**Input:** nums = [1,3,5,6], target = 2

```
low = 0, high = 3

mid = 1, nums[1] = 3
3 > 2 → move high to 0

mid = 0, nums[0] = 1
1 < 2 → move low to 1

→ low now points to index 1, so return 1
```

## Data Evolution  
For the input `nums = [1,3,5,6]`, `target = 2`:

| Step | low | high | mid | nums[mid] | Comparison         | Action              |
|------|-----|------|-----|-----------|---------------------|---------------------|
| 1    | 0   | 3    | 1   | 3         | 3 > 2               | high = mid - 1 → 0  |
| 2    | 0   | 0    | 0   | 1         | 1 < 2               | low = mid + 1 → 1   |
|      |     |      |     |           | loop ends (low > high) | return low → 1 |


## Time and Space Complexity  
- **Time Complexity:** O(log n) — because we're halving the search space at each step  
- **Space Complexity:** O(1) — no extra space used beyond variables  
