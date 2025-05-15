## 33. Search in Rotated Sorted Array

## Problem Statement

There is an integer array `nums` sorted in ascending order (with distinct values).
Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (1 <= k < nums.length), such that the resulting array is:
`[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`.

Given the rotated array and an integer `target`, return the **index** of target if it is in `nums`, or **-1** if it is not in `nums`.
You must write an algorithm with **O(log n)** runtime complexity.

## Input

* `nums`: array of integers, rotated from a sorted array
* `target`: integer value to search
* Constraints:

  * `1 <= nums.length <= 5000`
  * `-10⁴ <= nums[i] <= 10⁴`
  * All values of `nums` are **unique**
  * `nums` is an ascending array that is **possibly rotated**
  * `-10⁴ <= target <= 10⁴`

## Output

* Index of target if found
* `-1` if not found

## Examples

**Example 1:**
Input: `nums = [4,5,6,7,0,1,2]`, `target = 0`
Output: `4`

**Example 2:**
Input: `nums = [4,5,6,7,0,1,2]`, `target = 3`
Output: `-1`

**Example 3:**
Input: `nums = [1]`, `target = 0`
Output: `-1`

### Encouragement Before You Peek 👀

Can you identify the pivoted nature of the array? Think about where sorted subarrays still exist after rotation. A smart way of applying binary search exists here!

## Intuition

Normally, binary search works on fully sorted arrays. In a rotated sorted array, even though the full array isn’t sorted, **one half always is**.
So at each step, we:

* Check which half is sorted.
* Decide if `target` lies within that half.
* Narrow down the search accordingly.

This way, we reduce the search space logarithmically.

## Approach

[Solution Here](./solution.js)

* Use **binary search** with two pointers `left` and `right`.
* At each step:

  * Find `mid`.
  * Check if `nums[mid] === target`.
  * Decide whether to search in the **left** or **right** part based on which is sorted and whether the target lies within that sorted half.
* Repeat until the target is found or the window collapses.

### Pseudocode

```
initialize left = 0, right = nums.length - 1

while left <= right:
    mid = Math.floor((left + right) / 2)

    if nums[mid] == target:
        return mid

    if nums[left] <= nums[mid]:  // left half is sorted
        if nums[left] <= target < nums[mid]:
            right = mid - 1
        else:
            left = mid + 1
    else:  // right half is sorted
        if nums[mid] < target <= nums[right]:
            left = mid + 1
        else:
            right = mid - 1

return -1
```

## Walkthrough Example

**Input:** `nums = [4, 5, 6, 7, 0, 1, 2]`, `target = 0`

* Initial `left = 0`, `right = 6`

* `mid = 3`, `nums[mid] = 7`
  → Left half `[4,5,6,7]` is sorted, but target `0` is not in this half
  → Search right → `left = 4`, `right = 6`

* `mid = 5`, `nums[mid] = 1`
  → Right half `[1,2]` is sorted, but target `0` is less than 1
  → Search left → `left = 4`, `right = 4`

* `mid = 4`, `nums[mid] = 0` → **found!**

## Data Evolution

| Step | left | mid | right | nums\[mid] | Action                        |
| ---- | ---- | --- | ----- | ---------- | ----------------------------- |
| 1    | 0    | 3   | 6     | 7          | Search right (0 < 7 not true) |
| 2    | 4    | 5   | 6     | 1          | Search left (0 < 1)           |
| 3    | 4    | 4   | 4     | 0          | Found                         |

## Time and Space Complexity

* **Time:** `O(log n)` → Binary search cuts space in half each time
* **Space:** `O(1)` → Only pointers used (no extra space)
