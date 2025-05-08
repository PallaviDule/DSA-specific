## 88. Merge Sorted Array

## Problem Statement  
You are given two integer arrays `nums1` and `nums2`, both sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums2` into `nums1` such that the resulting array is also sorted in non-decreasing order.    
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



Note:  
- `nums1` has a size of `m + n`, where the first `m` elements are valid and the rest are 0 placeholders to accommodate the merge.
- Modify `nums1` in-place to hold the result.

## Input  
- `nums1`: integer array of size `m + n`  
- `nums2`: integer array of size `n`  
- `m`: number of initialized elements in `nums1`  
- `n`: number of initialized elements in `nums2`  

**Constraints**:
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10⁹ <= nums1[i], nums2[i] <= 10⁹`
- `nums1` and `nums2` are sorted in non-decreasing order

## Output  
- Modify `nums1` in-place to contain the merged, sorted array.

## Examples

### Example 1
Input:  
`nums1 = [1,2,3,0,0,0], m = 3`  
`nums2 = [2,5,6], n = 3`  
Output:  
`[1,2,2,3,5,6]`

### Example 2  
Input:  
`nums1 = [1], m = 1`  
`nums2 = [], n = 0`  
Output:  
`[1]`

### Example 3  
Input:  
`nums1 = [0], m = 0`  
`nums2 = [1], n = 1`  
Output:  
`[1]`

### Encouragement Before You Peek 👀  
Think about where the largest numbers should go. Since `nums1` has space at the end, we can start **filling from the back**.

## Intuition  
If we start filling from the end of `nums1`, we avoid overwriting useful values. Use three pointers:  
- `p1` at the end of the initialized part of `nums1`  
- `p2` at the end of `nums2`  
- `p` at the end of the entire `nums1` array  

Place the larger of `nums1[p1]` or `nums2[p2]` at `nums1[p]`, then move pointers accordingly.

## Approach  
Use three pointers from the end of the arrays to merge in reverse order (from largest to smallest), and fill `nums1` from the back.

### Pseudocode
```
function merge(nums1, m, nums2, n):
    p1 = m - 1
    p2 = n - 1
    p = m + n - 1

    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            place nums1[p1] at nums1[p]
            move p1 back
        else:
            place nums2[p2] at nums1[p]
            move p2 back
        move p back

    while p2 >= 0:
        copy remaining nums2[p2] into nums1[p]
        move p2 and p back
```

## Walkthrough Example  
Let’s walk through:  
`nums1 = [1,2,3,0,0,0], m = 3`  
`nums2 = [2,5,6], n = 3`  

Start with:  
- `p1 = 2` (points to 3)  
- `p2 = 2` (points to 6)  
- `p = 5`  

- Compare 3 and 6 → 6 is bigger → place 6 at `nums1[5]`  
- Now `p2 = 1`, `p = 4`  
- Compare 3 and 5 → 5 is bigger → place 5 at `nums1[4]`  
- Continue this until everything is merged.

Final `nums1` becomes: `[1,2,2,3,5,6]`

## Data Evolution  

| Step | p1 | p2 | p | nums1                    | Action                  |
|------|----|----|---|--------------------------|-------------------------|
| 1    | 2  | 2  | 5 | [1,2,3,0,0,6]            | 6 > 3 → nums1[5] = 6    |
| 2    | 2  | 1  | 4 | [1,2,3,0,5,6]            | 5 > 3 → nums1[4] = 5    |
| 3    | 2  | 0  | 3 | [1,2,3,3,5,6]            | 3 = 2 → nums1[3] = 3    |
| 4    | 1  | 0  | 2 | [1,2,2,3,5,6]            | 2 = 2 → nums1[2] = 2    |
| 5    | 0  | -1 | 1 | Done                     |                         |

## Time and Space Complexity  
- **Time**: O(m + n) → each element is visited once  
- **Space**: O(1) → in-place merge, no extra space used  