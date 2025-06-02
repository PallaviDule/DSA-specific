# 54. Spiral Matrix

## Problem Statement

[![LeetCode](https://img.shields.io/badge/LeetCode-54-green)](https://leetcode.com/problems/search-a-2d-matrix/description/)

Given an `m x n` matrix, return all elements of the matrix in spiral order.

## Input

* `matrix`: A 2D array of integers.

### Constraints

* `m == matrix.length`
* `n == matrix[i].length`
* `1 <= m, n <= 10`
* `-100 <= matrix[i][j] <= 100`

## Output

* An array of integers representing the elements of the matrix in spiral order.

## Examples

```
Example: 1
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### Encouragement Before You Peek 👀

Try to visualize the spiral traversal on paper. Think about moving boundaries!

## Intuition

The problem is a straightforward simulation of the spiral movement:

* Right ➡️
* Down ⬇️
* Left ⬅️
* Up ⬆️

Repeat this process by shrinking the boundaries each time.

## Approach

**Tags**: Simulation, Matrix

### Pseudocode

```
1. Initialize:
   - top = 0
   - bottom = m - 1
   - left = 0
   - right = n - 1
   - result = []

2. While top <= bottom and left <= right:
   a. Traverse from left to right across the top row.
   b. Increment top by 1.
   c. Traverse from top to bottom along the right column.
   d. Decrement right by 1.
   e. If top <= bottom:
      - Traverse from right to left across the bottom row.
      - Decrement bottom by 1.
   f. If left <= right:
      - Traverse from bottom to top along the left column.
      - Increment left by 1.

3. Return result.
```

## Walkthrough Example

Let’s take:

```
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Step-by-step:

* Traverse top row ➡️: \[1,2,3]
* Traverse right column ⬇️: \[6,9]
* Traverse bottom row ⬅️: \[8,7]
* Traverse left column ⬆️: \[4]
* Move to the next inner layer: top=1, bottom=1, left=1, right=1
* Traverse top row ➡️: \[5]
  Done!

Result: `[1,2,3,6,9,8,7,4,5]`

## Time and Space Complexity

* **Time Complexity**: O(m \* n), since each element is visited once.
* **Space Complexity**: O(1) (excluding the output array).
