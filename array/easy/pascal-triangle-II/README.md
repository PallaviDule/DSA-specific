# 119. Pascal's Triangle II

## Problem Statement  
Given an integer `rowIndex`, return the `rowIndex`<sup>th</sup> (0-indexed) row of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

## Input  
- `rowIndex`: an integer  
- Constraints: `0 <= rowIndex <= 33`

## Output  
- An array representing the row at index `rowIndex` in Pascal’s Triangle.

## Examples  
> Input  : `rowIndex = 3`  
  Output :`[1,3,3,1]`

> Input  : `rowIndex = 0`  
  Output :`[1]`

> Input  : `rowIndex = 1`  
  Output :`[1,1]`

### Encouragement Before You Peek 👀  
Try to observe how each row of Pascal’s Triangle builds upon the previous one. Can you identify the pattern and recreate just the row you need?


## Intuition  
Pascal's Triangle grows row by row, and each new element in a row is the sum of the two elements directly above it. We can build each row iteratively until we reach the desired row. But since the question asks for **only one specific row**, we can optimize both time and space by computing just that row using a rolling update strategy.

# Approach  
We can start with the first row `[1]` and build up to the desired `rowIndex`.  
For each iteration:
- We simulate the growth of Pascal's Triangle by updating the array **from the end to the start** (to prevent overwriting values that are still needed in the calculation).
- This allows us to reuse the same array and keep space usage at **O(rowIndex)**.

### Pseudocode  

```
function getRow(rowIndex):
    row = [1]
    for i from 1 to rowIndex:
        append 0 to row  // makes room for the next element
        for j from i down to 1:
            row[j] = row[j] + row[j - 1]
    return row
```

## Walkthrough Example  
Let’s say `rowIndex = 3`  
We want the 4th row (0-based index):  
Start with `row = [1]`  
- i = 1 → row becomes `[1, 1]`
- i = 2  
  - row becomes `[1,1,0]` 
  - j = 2 → `row[2] = row[2] + row[1] = 0 + 1 = 1`  
  - j = 1 → `row[1] = row[1] + row[0] = 1 + 1 = 2`  
  → row = `[1, 2, 1]`  
- i = 3  
  - row becomes `[1,2,1,0]` 
  - j = 3 → `row[3] = row[3] + row[2] = 0 + 1 = 1`  
  - j = 2 → `row[2] = row[2] + row[1] = 1 + 2 = 3`  
  - j = 1 → `row[1] = row[1] + row[0] = 2 + 1 = 3`  
  → row = `[1, 3, 3, 1]`

## Data evolution  

| Iteration (i) | Row               |
|---------------|-------------------|
| 0             | [1]               |
| 1             | [1, 1]            |
| 2             | [1, 2, 1]         |
| 3             | [1, 3, 3, 1]      |


## Time and Space Complexity  
- **Time**: O(rowIndex²), due to nested loop computation  
- **Space**: O(rowIndex), as we are updating a single array in-place  
