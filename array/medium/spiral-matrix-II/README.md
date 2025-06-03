#  [![LeetCode](https://img.shields.io/badge/LeetCode-59-green.svg)](https://leetcode.com/problems/spiral-matrix-ii/) Spiral Matrix II

## Problem Statement


Given a positive integer `n`, generate an `n x n` matrix filled with elements from `1` to `n²` in spiral order.

## Input

* `n`: An integer, `1 <= n <= 20`.

## Output

* Return an `n x n` 2D array filled with numbers from `1` to `n²` in spiral order.

## Examples

### Example 1

**Input:**

```
n = 3
```

**Output:**

```
[
 [1, 2, 3],
 [8, 9, 4],
 [7, 6, 5]
]
```

### Example 2

**Input:**

```
n = 1
```

**Output:**

```
[[1]]
```

## Encouragement Before You Peek 👀

Try solving it on your own before checking the approach and pseudocode!

# Intuition

* The problem is an extension of the spiral traversal problem but instead of reading values, we generate them sequentially from 1 to `n²` in spiral order.
* We need to manage the boundaries (top, bottom, left, right) and keep filling values while updating these boundaries appropriately.

# Approach

### Tags: `Matrix`, `Simulation`

* Initialize an empty `n x n` matrix.
* Maintain four pointers: `top`, `bottom`, `left`, and `right`.
* Initialize `num = 1` and fill values in the matrix while `num <= n²`:

  * Left to Right (Top Row)
  * Top to Bottom (Right Column)
  * Right to Left (Bottom Row)
  * Bottom to Top (Left Column)
  * After each direction, update the respective boundary pointer.
* Continue until all values are filled.

### Pseudocode

```
initialize matrix[n][n] with zeros
num = 1
top = 0
bottom = n-1
left = 0
right = n-1

while num <= n*n:
    for col from left to right:
        matrix[top][col] = num
        num += 1
    top += 1

    for row from top to bottom:
        matrix[row][right] = num
        num += 1
    right -= 1

    for col from right to left:
        matrix[bottom][col] = num
        num += 1
    bottom -= 1

    for row from bottom to top:
        matrix[row][left] = num
        num += 1
    left += 1

return matrix
```

## Walkthrough Example

**Input:**

```
n = 3
```

**Output:**

```
[
 [1, 2, 3],
 [8, 9, 4],
 [7, 6, 5]
]
```

**Step-by-step:**

1. Fill top row: 1, 2, 3
2. Fill right column: 4
3. Fill bottom row in reverse: 5, 6, 7
4. Fill left column in reverse: 8
5. Move inward: fill 9

## Data Evolution (Table)

| Step | Matrix                        | Top | Bottom | Left | Right | num | Notes                    |
| ---- | ----------------------------- | --- | ------ | ---- | ----- | --- | ------------------------ |
| 0    | \[\[0,0,0],\[0,0,0],\[0,0,0]] | 0   | 2      | 0    | 2     | 1   | Initialization           |
| 1    | \[\[1,2,3],\[0,0,0],\[0,0,0]] | 1   | 2      | 0    | 2     | 4   | Fill top row             |
| 2    | \[\[1,2,3],\[0,0,4],\[0,0,5]] | 1   | 2      | 0    | 1     | 6   | Fill right column        |
| 3    | \[\[1,2,3],\[0,0,4],\[7,6,5]] | 1   | 1      | 0    | 1     | 8   | Fill bottom row reverse  |
| 4    | \[\[1,2,3],\[8,0,4],\[7,6,5]] | 1   | 1      | 1    | 1     | 9   | Fill left column reverse |
| 5    | \[\[1,2,3],\[8,9,4],\[7,6,5]] | 2   | 1      | 1    | 1     | 10  | Fill remaining center    |


## Time and Space Complexity

* **Time:** O(n²) because each cell is filled exactly once.
* **Space:** O(n²) for the output matrix.
