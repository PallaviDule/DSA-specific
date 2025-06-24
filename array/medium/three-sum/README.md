# 15. Three Sum

## Problem Statement: [LeetCode Link](https://leetcode.com/problems/3sum/)


Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that:

* `i != j`, `i != k`, and `j != k`
* `nums[i] + nums[j] + nums[k] == 0`

The solution set must not contain duplicate triplets.

## Input

* `nums`: integer array
* `3 <= nums.length <= 3000`
* `-10^5 <= nums[i] <= 10^5`

## Output

* A list of triplets where each triplet sums to 0
* No duplicate triplets in the output

## Examples

### Example 1

Input: `nums = [-1, 0, 1, 2, -1, -4]`   
Output: `[[-1, -1, 2], [-1, 0, 1]]`

### Example 2

Input: `nums = [0, 1, 1]`   
Output: `[]`

### Example 3

Input: `nums = [0, 0, 0]`   
Output: `[[0, 0, 0]]`

### Encouragement Before You Peek 🙀

Try brute force first. Then think of how sorting could help.

## Intuition

We need to find three numbers that sum to zero without duplicating triplets. Sorting allows us to efficiently skip duplicates and use a two-pointer approach.

## Approach

**Tags**: Sorting, Two Pointers, Hashing

### Brute Force:

* Use 3 nested loops to generate all triplets.
* Check if their sum is zero.
* Use a set to avoid duplicates.
* **Time Complexity**: O(n^3)

### Optimal (Two Pointer Approach):

1. Sort the array.
2. Fix one number at index `i` and use two pointers `left` and `right`.
3. For each triplet that sums to zero, push to result.
4. Skip duplicates by advancing the pointers.

### Pseudocode

```text
sort(nums)
for i from 0 to n - 2:
    if i > 0 and nums[i] == nums[i-1]:
        continue
    left = i + 1
    right = n - 1
    while left < right:
        sum = nums[i] + nums[left] + nums[right]
        if sum == 0:
            add [nums[i], nums[left], nums[right]] to result
            move left and right skipping duplicates
        else if sum < 0:
            left++
        else:
            right--
```

## Walkthrough Example

Input: `[-1, 0, 1, 2, -1, -4]`

Sorted: `[-4, -1, -1, 0, 1, 2]`

* i=0, nums\[i]=-4 → Too small, move pointers
* i=1, nums\[i]=-1 → Explore (0, 1), (2, -1) → valid triplets
* i=2, nums\[i]=-1 → skip (duplicate)
* i=3, nums\[i]=0 → (1,2) too big, no triplet

Final: `[[-1, -1, 2], [-1, 0, 1]]`

## Data Evolution

| i | left | right | triplet    | sum | Action                |
| - | ---- | ----- | ---------- | --- | --------------------- |
| 0 | 1    | 5     | \[-4,-1,2] | -3  | sum < 0, left++       |
| 1 | 2    | 5     | \[-1,-1,2] | 0   | valid, add & skip dup |
| 1 | 3    | 4     | \[-1,0,1]  | 0   | valid, add & skip dup |
| 3 | 4    | 5     | \[0,1,2]   | 3   | sum > 0, right--      |

## Time and Space Complexity

* **Time**: O(n^2) — Outer loop O(n), inner two-pointer loop O(n)
* **Space**: O(1) extra space (ignoring output), O(n) if storing output
