# 18. 4Sum

## Problem Statement

Given an array `nums` of `n` integers, return all unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

* `0 <= a, b, c, d < n`
* `a, b, c, and d` are distinct indices.
* `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in **any order**.

## Input

* `nums`: integer array of length `n`
* `target`: integer target sum

**Constraints:**

* `1 <= nums.length <= 200`
* `-10^9 <= nums[i] <= 10^9`
* `-10^9 <= target <= 10^9`

## Output

* Array of all unique quadruplets `[a, b, c, d]` where the sum is `target`.

## Examples

### Example 1:

Input: `nums = [1,0,-1,0,-2,2], target = 0`
Output: `[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`

### Example 2:

Input: `nums = [2,2,2,2,2], target = 8`
Output: `[[2,2,2,2]]`

## Intuition

This problem is a generalization of the 3Sum problem.
We want to find 4 numbers whose sum equals the target.
We can fix two numbers and then use the two-pointer technique to find the remaining two numbers efficiently.

## Approach

1. **Sort the array** to handle duplicates and use two-pointer technique.
2. Use **two nested loops** to fix the first two numbers, `nums[i]` and `nums[j]`.
3. Then apply the **two-pointer approach** on the remaining part of the array to find pairs which sum to `target - nums[i] - nums[j]`.
4. While moving pointers, skip duplicates to avoid repeated quadruplets.
5. Collect all valid quadruplets in the result array.

## Steps

* Sort `nums`.
* For `i` from 0 to `n-4`:

  * If `i > 0` and `nums[i] === nums[i-1]`, skip to avoid duplicates.
  * For `j` from `i+1` to `n-3`:

    * If `j > i+1` and `nums[j] === nums[j-1]`, skip duplicates.
    * Initialize two pointers: `left = j+1`, `right = n-1`.
    * While `left < right`:

      * Calculate current sum: `total = nums[i] + nums[j] + nums[left] + nums[right]`.
      * If `total === target`, add quadruplet to results, move both pointers skipping duplicates.
      * If `total < target`, move `left++`.
      * If `total > target`, move `right--`.

## Complexity

* Time Complexity:
  Sorting is `O(n log n)`.
  Two nested loops `O(n²)` and two-pointer scan `O(n)` inside → overall `O(n³)`.

* Space Complexity:
  `O(1)` extra space ignoring output space.
