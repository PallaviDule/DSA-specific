# Diagonal Sum of a Matrix

## Problem Statement
[![GFG Badge](https://img.shields.io/badge/GFG-Diagonal%20Sum%20of%20a%20Matrix-brightgreen)](https://www.geeksforgeeks.org/sum-of-diagonals-of-a-matrix/)

Given a **square matrix**, calculate the sum of both **primary** and **secondary** diagonals.

* **Primary diagonal**: Top-left to bottom-right
* **Secondary diagonal**: Top-right to bottom-left

If a cell is on both diagonals (e.g., the center of an odd-sized matrix), it is **counted only once** in the total sum.

---

## Input

* A 2D matrix of size **N x N** (1 ≤ N ≤ 100).
* Each element is an integer.

---

## Output

* An integer: the sum of both diagonals (excluding duplicates).

---

## Examples

### Example 1:

**Input:**

```
1 2 3  
4 5 6  
7 8 9  
```

**Output:**
25
**Explanation:**
Primary diagonal: 1 + 5 + 9 = 15
Secondary diagonal: 3 + 5 + 7 = 15
Overlap at (5) counted only once.
Sum = 15 + 15 - 5 = 25

---

### Encouragement Before You Peek 👀

Try to think about **which cells belong to the diagonals**. How would you avoid double-counting the center cell?

---

## Intuition

We iterate through the matrix once.

* For the primary diagonal, use indices where row and column are equal (i == j).
* For the secondary diagonal, use indices where row + column == N - 1.
* If the cell is the center (for odd-sized matrices), we ensure it's not counted twice.

---

## Approach

[Solution Here](./solution.js)

**Tags:** Matrix, 2D Array, Diagonal Sum

**Edge Case:**

* For a 1x1 matrix, there’s only one element and it belongs to both diagonals—so only add it once.

---

### Pseudocode

```
Initialize sum = 0
For i from 0 to N-1:
    sum += matrix[i][i]         // Primary diagonal
    sum += matrix[i][N-1-i]     // Secondary diagonal

If N is odd:
    Subtract the center element (matrix[N//2][N//2]) once to avoid double-counting

Return sum
```

---

## Walkthrough Example

For:

```
1 2 3  
4 5 6  
7 8 9  
```

* Primary diagonal: 1, 5, 9 → sum = 15
* Secondary diagonal: 3, 5, 7 → sum = 15
* 5 is counted twice (center) → Subtract 5 once
  Total Sum: 15 + 15 - 5 = 25

---

## Data Evolution

| Step | Primary Diagonal Sum | Secondary Diagonal Sum | Overlap Subtracted? | Total |
| ---- | -------------------- | ---------------------- | ------------------- | ----- |
| 1    | 15                   | 15                     | 5                   | 25    |

---

## Time and Space Complexity

* **Time:** O(N) — Single pass through the diagonals
* **Space:** O(1) — Only a few variables used
