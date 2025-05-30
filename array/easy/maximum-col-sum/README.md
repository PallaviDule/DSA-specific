# Find Column with Maximum Sum in a Matrix

## Problem Statement

[![GeeksforGeeks Badge](https://img.shields.io/badge/GeeksforGeeks-Find%20Column%20with%20Maximum%20Sum-green)](https://www.geeksforgeeks.org/problems/diagonal-sum0158/1)

Given a 2D matrix of integers, the task is to identify the column with the maximum sum of its elements.

## Input

* A 2D array `matrix` of dimensions `N x M`, where:

  * `1 <= N, M <= 1000`
  * `-10^5 <= matrix[i][j] <= 10^5`

## Output

* An integer representing the **1-based index** of the column with the maximum sum.

## Examples

### Example 1

**Input:**

```javascript
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

**Output:**

```
3
```

**Explanation:**

* Column 1 sum: 1 + 4 + 7 = 12
* Column 2 sum: 2 + 5 + 8 = 15
* Column 3 sum: 3 + 6 + 9 = 18

Column 3 has the maximum sum.

### Example 2

**Input:**

```javascript
matrix = [
  [-1, -2, -3],
  [-4, -5, -6],
  [-7, -8, -9]
]
```

**Output:**

```
1
```

**Explanation:**

* Column 1 sum: -1 + (-4) + (-7) = -12
* Column 2 sum: -2 + (-5) + (-8) = -15
* Column 3 sum: -3 + (-6) + (-9) = -18

Column 1 has the maximum sum.

### Encouragement Before You Peek 👀

Try to solve this problem by iterating through the matrix column-wise and keeping track of the sums. Remember, understanding the traversal of 2D arrays is key!

## Intuition

To find the column with the maximum sum:

* Traverse each column of the matrix.
* For each column, sum up all its elements.
* Keep track of the maximum sum encountered and the corresponding column index.

## Approach

[Solution Here](./solution.js)

**Tags:** Array, Matrix, Iteration

* **Step 1:** Initialize variables to store the maximum sum and the index of the corresponding column.
* **Step 2:** Loop through each column:

  * Sum all elements in the current column.
  * If this sum is greater than the current maximum, update the maximum and the index.
* **Step 3:** After traversing all columns, return the index of the column with the maximum sum.

**Edge Cases:**

* Multiple columns with the same maximum sum: Return the first one encountered.
* All negative numbers: The column with the least negative sum is considered the maximum.

### Pseudocode

```
function findMaxColumnSum(matrix):
    maxSum = -Infinity
    maxIndex = -1
    for col in range(0, number_of_columns):
        sum = 0
        for row in range(0, number_of_rows):
            sum += matrix[row][col]
        if sum > maxSum:
            maxSum = sum
            maxIndex = col
    return maxIndex + 1  // Assuming 1-based indexing
```

## Walkthrough Example

**Input:**

```javascript
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

**Process:**

* Column 1 sum: 1 + 4 + 7 = 12
* Column 2 sum: 2 + 5 + 8 = 15
* Column 3 sum: 3 + 6 + 9 = 18

**Output:**

```
3
```

## Data Evolution

| Column Index | Column Elements | Column Sum | Max Sum | Max Index |
| ------------ | --------------- | ---------- | ------- | --------- |
| 1            | \[1, 4, 7]      | 12         | 12      | 1         |
| 2            | \[2, 5, 8]      | 15         | 15      | 2         |
| 3            | \[3, 6, 9]      | 18         | 18      | 3         |

## Time and Space Complexity

* **Time Complexity:** O(N \* M), where N is the number of rows and M is the number of columns.
* **Space Complexity:** O(1), as we use a constant amount of extra space.
