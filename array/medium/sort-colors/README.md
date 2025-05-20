# 75. Sort Colors

## Problem Statement

Given an array `nums` with `n` objects colored red, white, or blue (represented by `0`, `1`, and `2`), sort them **in-place** so that objects of the same color are adjacent, with the order: red (0), white (1), and blue (2).

You must solve this problem **without** using the library’s sort function.

## Input
* `nums`: array of integers where each element is `0`, `1`, or `2`
* `1 <= nums.length <= 300`

## Output

* The array sorted in-place such that all `0`s come first, followed by all `1`s, then all `2`s

## Examples

Input: `nums = [2,0,2,1,1,0]`
Output: `[0,0,1,1,2,2]`

Input: `nums = [2,0,1]`
Output: `[0,1,2]`

### Encouragement Before You Peek 👀

Try solving this problem **in one pass**, with only **constant space**. Think about how you would simulate buckets, or use multiple pointers to "partition" the array in-place.

## Intuition

This is a variation of the **Dutch National Flag** problem.
We need to **partition** the array into three sections:

* All `0`s on the left
* All `1`s in the middle
* All `2`s on the right

Since we're not allowed to use extra space or built-in sort, we can do this in one traversal by using three pointers:

* `low`: for boundary of `0`s
* `mid`: current element to evaluate
* `high`: for boundary of `2`s

## Approach

[Solution Here](./solution.js)

We use a single-pass algorithm with constant space:

* Swap `0` to the front
* Leave `1` in the middle
* Push `2` to the end
  This is done using **three pointers**.

### Pseudocode

```
Initialize low = 0, mid = 0, high = nums.length - 1

While mid <= high:
    If nums[mid] == 0:
        swap nums[low] and nums[mid]
        low++, mid++
    Else if nums[mid] == 1:
        mid++
    Else if nums[mid] == 2:
        swap nums[mid] and nums[high]
        high--
```

## Walkthrough Example

Given:
`nums = [2, 0, 2, 1, 1, 0]`

Initial:
`low = 0, mid = 0, high = 5`

1. `nums[mid] = 2` → swap with `nums[high]`
   → nums: `[0, 0, 2, 1, 1, 2]`
   → high = 4

2. `nums[mid] = 0` → swap with `nums[low]`
   → nums: `[0, 0, 2, 1, 1, 2]`
   → low = 1, mid = 1

3. `nums[mid] = 0` → swap with `nums[low]`
   → nums: `[0, 0, 2, 1, 1, 2]`
   → low = 2, mid = 2

4. `nums[mid] = 2` → swap with `nums[high]`
   → nums: `[0, 0, 1, 1, 2, 2]`
   → high = 3

5. `nums[mid] = 1` → mid++ → `mid = 3`

6. `nums[mid] = 1` → mid++ → `mid = 4`

Now mid > high, loop ends.
Final output: `[0, 0, 1, 1, 2, 2]`

## Data evolution

| Step | low | mid | high | nums                | Action                         |
| ---- | --- | --- | ---- | ------------------- | ------------------------------ |
| 0    | 0   | 0   | 5    | \[2, 0, 2, 1, 1, 0] | nums\[mid]=2 → swap mid & high |
| 1    | 0   | 0   | 4    | \[0, 0, 2, 1, 1, 2] | nums\[mid]=0 → swap mid & low  |
| 2    | 1   | 1   | 4    | \[0, 0, 2, 1, 1, 2] | nums\[mid]=0 → swap mid & low  |
| 3    | 2   | 2   | 4    | \[0, 0, 2, 1, 1, 2] | nums\[mid]=2 → swap mid & high |
| 4    | 2   | 2   | 3    | \[0, 0, 1, 1, 2, 2] | nums\[mid]=1 → mid++           |
| 5    | 2   | 3   | 3    | \[0, 0, 1, 1, 2, 2] | nums\[mid]=1 → mid++           |

## Time and Space Complexity

* **Time**: `O(n)` → Each element is checked at most once
* **Space**: `O(1)` → Only pointers are used, no extra space
