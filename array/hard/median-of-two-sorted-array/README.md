## 4. Median of Two Sorted Arrays

## Problem Statement
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.

## Input Constraints
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## Output
- A single number representing the median value. If the total number of elements is even, return the average of the two middle numbers.

## Examples
**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5
```

## Encouragement Before You Peek 🙀
Try solving it using binary search. Focus on minimizing the search space over the smaller array. Think in terms of partitioning both arrays such that elements on the left are less than or equal to those on the right.

## Approach
To meet the `O(log(min(m, n)))` requirement:

1. Perform binary search on the **smaller** array (let's say `nums1`).
2. Partition both arrays such that:
   - `left_part` from both arrays contains half of the total elements.
   - `right_part` contains the remaining half.
3. Let `partitionX` be the position in `nums1`, and calculate `partitionY = (m + n + 1)/2 - partitionX`.
4. Get `maxLeftX`, `minRightX`, `maxLeftY`, and `minRightY` from partitions.
5. Check:
   - If `maxLeftX <= minRightY` and `maxLeftY <= minRightX`, we have the correct partition.
   - If total length is odd, return `max(maxLeftX, maxLeftY)`.
   - If even, return average of `max(maxLeftX, maxLeftY)` and `min(minRightX, minRightY)`.
6. If `maxLeftX > minRightY`, move binary search to the left.
7. Otherwise, move it to the right.

## Walkthrough Example
**Example:** `nums1 = [1, 3], nums2 = [2]`
- Total length = 3 → odd
- We binary search on nums1

## Iteration / Data Evolution:
| PartitionX | PartitionY | maxLeftX | minRightX | maxLeftY | minRightY |
|------------|-------------|-----------|-------------|-----------|-------------|
|     1      |      1      |     1     |     3       |     2     |   ∞         |

## Action:
- Since `maxLeftX (1) <= minRightY (∞)` and `maxLeftY (2) <= minRightX (3)`, we found the correct partition.
- Total length is odd → return `max(maxLeftX, maxLeftY)` = `max(1, 2)` = `2`

## Time and Space Complexity
- **Time:** `O(log(min(m, n)))`
- **Space:** `O(1)`

