## 26.Remove Duplicates from Sorted Array

## Problem Statement

Given a sorted array of integers `nums`, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same.

Return the number `k` of unique elements.

The modified array should have the first `k` elements as the unique values, and the rest can be left as any value.

## Input

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.

## Output

- Return `k`, the count of unique elements.
- Modify `nums` in-place such that first `k` elements hold the unique values.

## Examples

 >  Input: nums = [1,1,2]  
    Output: 2, nums = [1,2,_]

 >  Input: nums = [0,0,1,1,1,2,2,3,3,4]  
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

> **Try solving it on your own before looking at the approach and solution.**

## Approach

**Thought process:**

Since the array is sorted, all duplicates are adjacent.

We can use the **two-pointer approach**:
- One pointer `i` tracks the position of the last unique element.
- Another pointer `j` scans the array from index 1.
- Whenever `nums[j]` is different from `nums[i]`, we know it's a unique element, so we increment `i` and write `nums[j]` at position `i`.

This method keeps the first `k` elements unique and in order.

## Pseudocode

```csharp
If the array is empty:
    Return 0

Initialize a variable lastUniqueIndex to 0
// This keeps track of the position where the next unique element should be placed

Loop through the array: currentIndex from 1 to nums.length - 1
    If the element at currentIndex is not equal to the element at lastUniqueIndex:
        Increment lastUniqueIndex by 1
        // Found a new unique element, so move the pointer forward

        Assign the value at currentIndex to the position at lastUniqueIndex
        // Place the unique element in the correct position in the front part of the array

After the loop ends:
    Return lastUniqueIndex + 1
    // The number of unique elements is index + 1 (since it's 0-based)

```

## Walkthrough Example

Input: [0,0,1,1,1,2,2,3,3,4]

- i = 0  
- j = 1 → nums[j] = 0 → same as nums[i] → skip  
- j = 2 → nums[j] = 1 ≠ nums[i] → i = 1, nums[1] = 1  
- j = 3 → nums[j] = 1 → skip  
- j = 5 → nums[j] = 2 ≠ nums[i] → i = 2, nums[2] = 2  
- j = 7 → nums[j] = 3 ≠ nums[i] → i = 3, nums[3] = 3  
- j = 9 → nums[j] = 4 ≠ nums[i] → i = 4, nums[4] = 4  

Final array: [0, 1, 2, 3, 4, _, _, _, _, _]  
Return: 5

## Data Evolution

| Step | i (unique end) | j | nums[j] | Action                          | Array After Change            |
|------|----------------|---|---------|---------------------------------|-------------------------------|
| 1    | 0              | 1 | 0       | Duplicate, skip                 | [0,0,1,...]                   |
| 2    | 0 → 1          | 2 | 1       | New value → nums[1] = 1         | [0,1,1,...]                   |
| 3    | 1              | 3 | 1       | Duplicate, skip                 | [0,1,1,...]                   |
| 4    | 1              | 4 | 1       | Duplicate, skip                 | [0,1,1,...]                   |
| 5    | 1 → 2          | 5 | 2       | New value → nums[2] = 2         | [0,1,2,...]                   |
| 6    | 2              | 6 | 2       | Duplicate, skip                 | [0,1,2,...]                   |
| 7    | 2 → 3          | 7 | 3       | New value → nums[3] = 3         | [0,1,2,3,...]                 |
| 8    | 3              | 8 | 3       | Duplicate, skip                 | [0,1,2,3,...]                 |
| 9    | 3 → 4          | 9 | 4       | New value → nums[4] = 4         | [0,1,2,3,4,...]               |

## Time and Space Complexity

- **Time Complexity:** O(n) — traverse the list once
- **Space Complexity:** O(1) — no extra space used (in-place modification)
