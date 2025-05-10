## 349. Intersection of Two Arrays

## Problem Statement
Given two integer arrays `nums1` and `nums2`, return an array of their intersection(common element). Each element in the result must be **unique**, and you may return the result in **any order**.

## Input
- `nums1`: array of integers (1 <= nums1.length <= 1000)
- `nums2`: array of integers (1 <= nums2.length <= 1000)
- `0 <= nums1[i], nums2[i] <= 1000`

## Output
- An array of unique integers representing the intersection of `nums1` and `nums2`.

## Examples

Input: `nums1 = [1,2,2,1]`, `nums2 = [2,2]`
Output: `[2]`

Input: `nums1 = [4,9,5]`, `nums2 = [9,4,9,8,4]`
Output: `[9,4]` or `[4,9]`

### Encouragement Before You Peek 👀
Think about how to find **common elements** efficiently. Can you use a **Set** to make checking faster?

## Intuition
To find common elements from both arrays, we want to:
- Keep only unique values (hint: Set).
- Check efficiently whether an element exists in the other array.

This means we can:
- Convert one array to a Set (for fast lookup).
- Iterate through the second array and collect elements that are found in the Set.
- Use another Set to ensure uniqueness in the final result.

## Approach
[Solution Here](./solution.js)

1. Convert `nums1` to a Set to remove duplicates and allow O(1) lookup.
2. Iterate through `nums2`, and if an element is in the Set, add it to the result Set.
3. Convert the result Set to an array and return.

### Pseudocode
```
create a Set from nums1
initialize resultSet as an empty Set
for each num in nums2:
    if nums1Set has num:
        add num to resultSet
return resultSet as an array
```

## Walkthrough Example

Input:
nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]

Step 1: Set of nums1 => {4, 9, 5}
Step 2: Check each element of nums2:
- 9: yes, add to result
- 4: yes, add to result
- 9: already in result
- 8: no
- 4: already in result

Output => [4, 9] (order doesn’t matter)

## Data evolution
| Step | nums2 Element | In nums1Set? | resultSet     |
|------|----------------|--------------|----------------|
| 1    | 9              | Yes          | {9}            |
| 2    | 4              | Yes          | {9, 4}         |
| 3    | 9              | Yes (skip)   | {9, 4}         |
| 4    | 8              | No           | {9, 4}         |
| 5    | 4              | Yes (skip)   | {9, 4}         |

## Time and Space Complexity
- **Time:** O(n + m), where n is length of `nums1` and m is length of `nums2`
- **Space:** O(n) for storing the Set of `nums1`


## Other Ways
| Method         | Requires Sorted | Extra Space | Time Complexity       |
|----------------|------------------|-------------|------------------------|
| Array (Brute)   | ❌                | ❌           | O(n × m)               |
| Hash Table      | ❌                | ✅           | O(n + m)               |
| Two Pointers    | ✅                | ❌           | O(n log n + m log m)   |
| Binary Search   | ✅ (one array)    | ❌           | O(n log m)             |
| Sorting         | ✅                | ❌           | Depends on combined method |