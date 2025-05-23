# 31. Next Permutation

## Problem Statement

Given an array of integers `nums`, find the **next lexicographically greater permutation** of its integers. If such arrangement is not possible (i.e., the current permutation is the largest), rearrange it as the lowest possible order (sorted ascending).

You must do this **in-place** with only constant extra memory.

## Input

* An integer array `nums` of length `n` where

  * `1 <= n <= 100`
  * `0 <= nums[i] <= 100`

## Output

* Modify the array `nums` to its next permutation in place.
* Return the modified array for convenience (optional).

## Examples

```
Input:  [1,2,3]  
Output: [1,3,2]

Input:  [3,2,1]  
Output: [1,2,3]

Input:  [1,1,5]  
Output: [1,5,1]
```

### Encouragement Before You Peek 👀

Try to think about the permutation order and how you can find the next larger permutation by minimal changes. Consider how to revert to the smallest permutation if no larger one exists.

## Intuition

* We want to find the next greater permutation **just after** the current one in lexicographical order.
* If you look at the permutation from right to left, it often decreases (e.g., 3,2,1).
* Find the **pivot**, the first number from the right which is smaller than the number next to it.
* Swap this pivot with the smallest number **larger** than it on its right.
* Reverse the numbers to the right of the pivot to get the smallest order (because they are currently in descending order).

## Approach

[Solution Here](./solution.js)

1. Start from the second last element, move left until you find an element that is smaller than the element to its right — this is the **pivot**.
2. If no such pivot is found, the array is in descending order, so reverse it and return.
3. From the end of the array, find the first element that is **greater** than the pivot.
4. Swap this element with the pivot.
5. Reverse the sub-array to the right of the pivot index.
6. Return the modified array.

### Edge Cases
* The array is already the highest permutation (e.g., `[3,2,1]`): must reverse to the lowest.
* The array has duplicate elements (e.g., `[1,1,5]`): swapping and reversing still applies.
* The array length is 1 (e.g., `[0]`): no change.
* The pivot element is at the start of the array.

### Pseudocode

```
pivotIndex = -1
for i from length-2 down to 0:
    if arr[i] < arr[i+1]:
        pivotIndex = i
        break

if pivotIndex == -1:
    reverse(arr)
    return arr

for j from length-1 down to pivotIndex+1:
    if arr[j] > arr[pivotIndex]:
        swap(arr[j], arr[pivotIndex])
        break

reverse sub-array from pivotIndex+1 to end

return arr
```

## Walkthrough Example

Input: `[1,2,3]`

* Find pivot:

  * Check `2 < 3` → pivotIndex = 1
* Find number greater than `arr[1]` (which is 2) from right:

  * `3 > 2` → swap 2 and 3
* Array becomes `[1,3,2]`
* Reverse suffix after pivotIndex (index 1 to end):

  * Suffix `[2]` reversed stays `[2]`
* Final array: `[1,3,2]`

## Data Evolution

| Step           | Array        | Explanation                          |
| -------------- | ------------ | ------------------------------------ |
| Initial        | \[1, 2, 3]   | Given input array                    |
| Find pivot     | pivotIndex=1 | arr\[1]=2 < arr\[2]=3                |
| Swap elements  | \[1, 3, 2]   | Swap arr\[1] and arr\[2]             |
| Reverse suffix | \[1, 3, 2]   | Suffix after pivot is single element |
| Final Result   | \[1, 3, 2]   | Next permutation                     |

## Time and Space Complexity

* **Time Complexity:** O(n) — we scan from right to left a few times, and reverse the suffix.
* **Space Complexity:** O(1) — all done in-place with constant extra space.