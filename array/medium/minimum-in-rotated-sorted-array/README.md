# 153. Find Minimum in Rotated Sorted Array

## Problem Statement

Given a **sorted array** of unique integers that has been **rotated between 1 and n times**, find the **minimum element**.
You must solve this in **O(log n)** time.

## Input

* `nums`: An array of unique integers sorted in ascending order and then rotated.
* `1 <= nums.length <= 5000`
* `-5000 <= nums[i] <= 5000`
* All elements are **unique**.

## Output

* The minimum element in the array.

## Examples

Input: `nums = [3,4,5,1,2]`
Output: `1`

Input: `nums = [4,5,6,7,0,1,2]`
Output: `0`

Input: `nums = [11,13,15,17]`
Output: `11`

### Encouragement Before You Peek 👀

Try to think about how you can use **binary search** to take advantage of the sorted structure!

## Intuition

Even though the array is rotated, it is composed of two sorted subarrays. The smallest element is the **pivot point** where this order breaks. We can use binary search to locate this break efficiently.

## Approach

### Tags: `Binary Search`, `Pivot Detection`

We want to find the smallest element in a rotated sorted array in `O(log n)` time.

1. If the array is not rotated (i.e., first element < last element), then the first element is the minimum.
2. Use binary search:

   * If `nums[mid] > nums[right]`, the minimum lies in the **right half**.
   * Else, the minimum lies in the **left half including mid**.
3. Keep narrowing down the range until `left == right`. That’s the minimum.

### Edge Cases:

* Array is not rotated (e.g., `[1, 2, 3]`)
* Rotation at one position (e.g., `[3, 1, 2]`)
* Minimum at the end (e.g., `[2, 3, 4, 5, 1]`)
* Only one element (e.g., `[5]`)

### Pseudocode

```
If nums.length == 1:
    return nums[0]

left = 0
right = nums.length - 1

If nums[left] < nums[right]:
    return nums[left]

while left < right:
    mid = floor((left + right) / 2)

    If nums[mid] > nums[right]:
        left = mid + 1
    Else:
        right = mid

return nums[left]
```

## Walkthrough Example

Input: `nums = [4, 5, 6, 7, 0, 1, 2]`

* Step 1: `left = 0`, `right = 6`, `mid = 3`
  `nums[mid] = 7`, `nums[right] = 2` → `7 > 2` ⇒ pivot in right → `left = 4`

* Step 2: `left = 4`, `right = 6`, `mid = 5`
  `nums[mid] = 1`, `nums[right] = 2` → `1 < 2` ⇒ pivot in left → `right = 5`

* Step 3: `left = 4`, `right = 5`, `mid = 4`
  `nums[mid] = 0`, `nums[right] = 1` → `0 < 1` ⇒ pivot in left → `right = 4`

* Now `left == right == 4` ⇒ Minimum is `nums[4] = 0`

## Data Evolution

| Step | Left | Right | Mid | nums\[mid] | Action                                |
| ---- | ---- | ----- | --- | ---------- | ------------------------------------- |
| 1    | 0    | 6     | 3   | 7          | `nums[mid] > nums[right]` → left = 4  |
| 2    | 4    | 6     | 5   | 1          | `nums[mid] < nums[right]` → right = 5 |
| 3    | 4    | 5     | 4   | 0          | `nums[mid] < nums[right]` → right = 4 |

## Time and Space Complexity

* **Time Complexity:** `O(log n)` — binary search halves the range each step
* **Space Complexity:** `O(1)` — constant space used
