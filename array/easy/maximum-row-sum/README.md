# Maximum Row Sum

## Problem Statement

[![GeeksforGeeks Badge](https://img.shields.io/badge/GeeksforGeeks-Maximum%20Row%20Sum%20in%20Matrix-green)](https://www.geeksforgeeks.org/find-row-with-maximum-sum-in-a-matrix/)
Given a matrix of integers, find the row with the **maximum sum** of its elements and return that sum.

## Input

* A matrix represented as a 2D array, `matrix`, where:

  * `1 <= matrix.length <= 1000`
  * `1 <= matrix[i].length <= 1000`
  * `-10^5 <= matrix[i][j] <= 10^5`

## Output

* Return an integer representing the **maximum sum** of any row in the matrix.

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
24
**Explanation:**
Row 3 has the maximum sum of 7+8+9 = 24.

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
-6
**Explanation:**
Row 1 has the maximum sum of -1+-2+-3 = -6.

## Encouragement Before You Peek 👀

Try to solve this using **array iteration** and **row sum calculation** without any built-in magic functions like `.reduce()` if you want to practice fundamental skills!

## Intuition

First, we understand that the task is to calculate the sum of each row and find the maximum among them.

* Iterate through each row.
* Calculate the sum of that row’s elements.
* Keep track of the maximum sum seen so far.

## Approach

[Solution Here](./solution.js)

**Tags:** Array, Matrix, Math

* **Step 1:** Initialize `maxSum` to negative infinity or a very small value.
* **Step 2:** For each row, calculate the sum using a simple loop.
* **Step 3:** Update `maxSum` if the current row sum is greater.
* **Step 4:** Return `maxSum` after traversing all rows.

**Edge Cases:**

* All rows with negative numbers
* Single row matrix
* Large row size (e.g., 1000 elements)

### Pseudocode

```
function maxRowSum(matrix):
    maxSum = -Infinity
    for each row in matrix:
        sum = 0
        for each num in row:
            sum += num
        if sum > maxSum:
            maxSum = sum
    return maxSum
```

---

## Walkthrough Example

Input:

```
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Step-by-step:

* Row 1 sum: 1+2+3 = 6 (maxSum = 6)
* Row 2 sum: 4+5+6 = 15 (maxSum = 15)
* Row 3 sum: 7+8+9 = 24 (maxSum = 24)

Return: **24**

---

## Data Evolution

| Step | Current Row | Row Sum | maxSum |
| ---- | ----------- | ------- | ------ |
| 1    | \[1,2,3]    | 6       | 6      |
| 2    | \[4,5,6]    | 15      | 15     |
| 3    | \[7,8,9]    | 24      | 24     |

---

## Time and Space Complexity

* **Time Complexity:** O(N \* M) where N = number of rows, M = number of columns.
* **Space Complexity:** O(1) — we use constant extra space.
