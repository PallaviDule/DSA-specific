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
- Use Merge of Merge Sort – O(m + n) Time and O(1) Space
- The given arrays are sorted, so merge the sorted arrays in an efficient way and keep the count of elements merged so far. 
- So when we reach half of the total, print the median. There can be two cases: 
    - Case 1: m+n is odd, the median is the ((m+n)/2)th element while merging the arrays.
    - Case 2: m+n is even, the median will be the average of ((m+n)/2 – 1)th and ((m+n)/2)th element while merging the arrays.