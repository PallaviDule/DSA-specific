# 540. Single Element in a Sorted Array

## Problem Statement

You are given a **sorted array** consisting of only integers where **every element appears exactly twice**, except for **one element which appears exactly once**.

Return the **single element** that appears only once.

You must solve this in **O(log n)** time and **O(1)** space.

## Input

* `nums`: a sorted array of integers
* Constraints:

  * `1 <= nums.length <= 10⁵`
  * `0 <= nums[i] <= 10⁵`
  * Every element appears twice except one

## Output

* An integer representing the single element

## Examples

**Example 1:**
Input: `nums = [1,1,2,3,3,4,4,8,8]`
Output: `2`

**Example 2:**
Input: `nums = [3,3,7,7,10,11,11]`
Output: `10`

### Encouragement Before You Peek 👀

The array is sorted and every element appears twice except one — can you think of how to use **binary search** to find the single element without checking every one?

## Intuition

In a **sorted** array with pairs, the first occurrence of a number is usually at an even index, and its duplicate is at the next **odd** index.

When this pattern **breaks**, we know the single element must be on that side of the array.
So we apply **binary search** and check where the pairing goes wrong.

## Approach

[Solution Here](./solution.js)

* Use binary search on the index range
* If `mid` is **even**, check if `nums[mid] === nums[mid + 1]`

  * If yes, the single element is on the right
  * Else, it’s on the left (including mid)
* If `mid` is **odd**, check if `nums[mid] === nums[mid - 1]`

  * If yes, the single element is on the right
  * Else, it’s on the left
* Continue narrowing the range until `left == right`, that is the single element

### Pseudocode

```
left = 0
right = nums.length - 1

while left < right:
    mid = floor((left + right) / 2)

    if mid is even:
        if nums[mid] == nums[mid + 1]:
            left = mid + 2
        else:
            right = mid
    else:
        if nums[mid] == nums[mid - 1]:
            left = mid + 1
        else:
            right = mid - 1

return nums[left]
```

## Walkthrough Example

**Input:** `nums = [1,1,2,3,3,4,4,8,8]`

* Start: `left = 0`, `right = 8`
* `mid = 4`, `nums[4] = 3`, `mid` is even → `nums[4] == nums[5]` ❌ → move `right = mid = 4`
* `mid = 2`, `nums[2] = 2`, `nums[2] != nums[3]` → move `right = 2`
* `mid = 1`, `nums[1] = 1`, `nums[1] == nums[0]` → `left = mid + 1 = 2`
* `left = 2`, `right = 2` → done

**Output:** `2`

## Data Evolution

| Step | left | mid | right | mid%2 | Comparison                 | Action    |
| ---- | ---- | --- | ----- | ----- | -------------------------- | --------- |
| 1    | 0    | 4   | 8     | 0     | nums\[4]=3 == nums\[5]=3   | left = 6  |
| 2    | 6    | 7   | 8     | 1     | nums\[7]=8 == nums\[6]=4 ❌ | right = 6 |
| 3    | 6    | -   | 6     | -     | -                          | done      |

## Time and Space Complexity

* **Time:** `O(log n)` — binary search halves the search space each time
* **Space:** `O(1)` — only constant pointers used
