# Search a 2D Matrix

[![LeetCode Badge](https://img.shields.io/badge/LeetCode-74-green)](https://leetcode.com/problems/spiral-matrix)

## Problem Statement

You are given an `m x n` integer matrix `matrix` with the following two properties:

1. Each row is sorted in non-decreasing order.
2. The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.

**You must write a solution in O(log(m \* n)) time complexity.**

## Input

* `matrix`: a 2D array of size `m x n`

  * `1 <= m, n <= 100`
  * `-10^4 <= matrix[i][j], target <= 10^4`
* `target`: an integer to search for in the matrix.

## Output

* Return `true` if `target` is found in the matrix, otherwise return `false`.

## Examples

**Example 1:**
Input:

```
matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
]
target = 3
```

Output:

```
true
```

**Example 2:**
Input:

```
matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
]
target = 13
```

Output:

```
false
```

### Encouragement Before You Peek 👀

Think about how you can treat this 2D matrix like a 1D sorted array and apply binary search on it.

## Intuition

* The given matrix satisfies two important properties:

  * Each row is sorted left to right.
  * Each row's first element is greater than the previous row’s last element.
* If we treat the entire matrix as a single sorted array of size `m * n`, then we can apply classic binary search on the entire "virtual array" using index mapping.

## Approach

[Solution Here](./solution.js)
**Tags:** Binary Search, Matrix

* Treat the matrix as a flattened 1D array.
* Use binary search with:

  * `low = 0`
  * `high = m * n - 1`
* Calculate mid and convert it to 2D indices:

  * `row = mid // n`
  * `col = mid % n`
* Compare `matrix[row][col]` with `target` and adjust search bounds accordingly.

### Edge Cases

* Make sure to handle single row or single column matrices.

### Pseudocode

```
function searchMatrix(matrix, target):
    m = number of rows
    n = number of columns
    low = 0
    high = m * n - 1
    
    while low <= high:
        mid = (low + high)/ 2
        row = mid / n
        col = mid % n
        value = matrix[row][col]
        
        if value == target:
            return true
        else if value < target:
            low = mid + 1
        else:
            high = mid - 1
            
    return false
```

## Walkthrough Example

Given:

```
matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
]
target = 3
```

* `m = 3`, `n = 4`
* `low = 0`, `high = 11`
* First mid: `(0 + 11) // 2 = 5`

  * row = 5 // 4 = 1
  * col = 5 % 4 = 1
  * value = 11 > target => move high to 4
* Second mid: `(0 + 4) // 2 = 2`

  * row = 0
  * col = 2
  * value = 5 > target => move high to 1
* Third mid: `(0 + 1) // 2 = 0`

  * row = 0
  * col = 0
  * value = 1 < target => move low to 1
* Fourth mid: `(1 + 1) // 2 = 1`

  * row = 0
  * col = 1
  * value = 3 == target => return true

## Data evolution

| Step | low | high | mid | row | col | value | Action      |
| ---- | --- | ---- | --- | --- | --- | ----- | ----------- |
| 1    | 0   | 11   | 5   | 1   | 1   | 11    | high = 4    |
| 2    | 0   | 4    | 2   | 0   | 2   | 5     | high = 1    |
| 3    | 0   | 1    | 0   | 0   | 0   | 1     | low = 1     |
| 4    | 1   | 1    | 1   | 0   | 1   | 3     | return true |

## Time and Space Complexity

* **Time:** O(log(m \* n))
* **Space:** O(1) — we just use a few pointers and index variables.
