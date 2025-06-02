# 240. Search a 2D Matrix II

[![LeetCode](https://img.shields.io/badge/LeetCode-240%20Search%20a%202D%20Matrix%20II-green)](https://leetcode.com/problems/search-a-2d-matrix-ii/)

## Problem Statement

Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:

* Integers in each row are sorted in ascending from left to right.
* Integers in each column are sorted in ascending from top to bottom.

## Input

* `matrix`: A 2D array of size `m x n` where

  * `1 <= m, n <= 300`
  * `-10^9 <= matrix[i][j] <= 10^9`
* `target`: An integer value in the range `-10^9 <= target <= 10^9`.

## Output

* Return `true` if `target` is in `matrix`; otherwise, return `false`.

## Examples

### Example 1

**Input:**

```
matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
]
target = 5
```

**Output:**

```
true
```

### Example 2

**Input:**

```
matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
]
target = 20
```

**Output:**

```
false
```

## Approach

* Start from the top-right corner of the matrix.
* If the current element equals the target, return `true`.
* If the current element is greater than the target, move left.
* If the current element is less than the target, move down.
* Repeat until either you find the target or you exit the bounds of the matrix.

### Pseudocode

```
row = 0
col = n - 1
while row < m and col >= 0:
    if matrix[row][col] == target:
        return true
    else if matrix[row][col] > target:
        col -= 1
    else:
        row += 1
return false
```

## Walkthrough Example

* Start at (0,4): 15 > 5 → move left to (0,3): 11 > 5 → move left to (0,2): 7 > 5 → move left to (0,1): 4 < 5 → move down to (1,1): 5 == 5 → found.

## Time and Space Complexity

* Time Complexity: O(m + n)
* Space Complexity: O(1)
