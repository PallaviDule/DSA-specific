# [![LeetCode Badge](https://img.shields.io/badge/LeetCode-1572-green)](https://leetcode.com/problems/matrix-diagonal-sum/) Matrix Diagonal Sum

## Problem Statement

Given a square matrix `mat`, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

## Input

* `mat`: a square matrix of size n x n, where `1 <= n <= 100` and `1 <= mat[i][j] <= 100`.

## Output

* An integer representing the sum of the primary and secondary diagonals (excluding double-counted elements in the middle).

## Examples

**Example 1:**
Input:

```
mat = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
```

Output:

```
25
```

Explanation:
Diagonals sum = 1 + 5 + 9 + 3 + 7 = 25
(Note that the center element 5 is counted only once.)

**Example 2:**
Input:

```
mat = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
]
```

Output:

```
8
```

**Example 3:**
Input:

```
mat = [
  [5]
]
```

Output:

```
5
```

### Encouragement Before You Peek 👀

Try to visualize the diagonals and think of a way to avoid double-counting the center element!

## Intuition

Since the matrix is square, we have:

* Primary diagonal: `mat[i][i]`
* Secondary diagonal: `mat[i][n - 1 - i]`

We can iterate from `0` to `n - 1` and add both `mat[i][i]` and `mat[i][n - 1 - i]`. If the matrix size is odd, the center element will be counted twice, so we subtract it once at the end.

## Approach

[Solution Here](./solution.js)
**Tags:** Matrix, Diagonal Traversal

* Initialize `sum = 0`.
* Loop `i` from `0` to `n - 1`.

  * Add `mat[i][i]` (primary diagonal).
  * Add `mat[i][n - 1 - i]` (secondary diagonal).
* If `n` is odd, subtract `mat[Math.floor(n/2)][Math.floor(n/2)]` once to avoid double-counting.

### Edge Case

* For an odd-length matrix, the center element is on both diagonals, so it should be counted only once.

### Pseudocode

```
function diagonalSum(mat):
    sum = 0
    n = length of mat
    for i from 0 to n-1:
        sum += mat[i][i]  // primary diagonal
        sum += mat[i][n-1-i]  // secondary diagonal
    if n is odd:
        sum -= mat[n//2][n//2]  // center element
    return sum
```

## Walkthrough Example

Given:

```
mat = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
```

Step-by-step:

* Primary diagonal: 1, 5, 9  => sum += 1+5+9 = 15
* Secondary diagonal: 3, 5, 7 => sum += 3+5+7 = 15
  Total sum: 30
* Center element 5 is double-counted, subtract it once: 30-5=25

Output: 25

## Data evolution

| Step   | i | Primary Diagonal | Secondary Diagonal | Running Sum     |
| ------ | - | ---------------- | ------------------ | --------------- |
| 0      | 0 | 1                | 3                  | 1 + 3 = 4       |
| 1      | 1 | 5                | 5                  | 4 + 5 + 5 = 14  |
| 2      | 2 | 9                | 7                  | 14 + 9 + 7 = 30 |
| adjust | - | center (5)       | -                  | 30 - 5 = 25     |

## Time and Space Complexity

* Time: O(n)
* Space: O(1) since we just use a sum variable.
