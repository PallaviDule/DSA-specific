## 118. Pascal’s Triangle

## Problem Statement  
Given an integer `numRows`, return the first `numRows` of Pascal’s triangle. In Pascal’s triangle, each number is the sum of the two numbers directly above it.
```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

## Input  
- `numRows`: the number of rows to generate  
  **Constraints:** `1 <= numRows <= 30`

## Output  
- A two-dimensional array representing the first `numRows` of Pascal’s triangle.

## Examples  
```
Input: numRows = 5
Output: [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1]
]
```
```
Input: numRows = 1
Output: [
  [1]
]
```

### Encouragement Before You Peek 👀  
Notice how each row builds on the previous one—try drawing the first few rows by hand before writing any code.

# Intuition  
Because each entry (except the 1’s at the ends) is the sum of the two entries above it, you can generate each row by looking only at the row immediately before.

# Approach  
1. Initialize an empty result list.  
2. For each `row` from 0 to `numRows - 1`:
   - Start the new row with `[1]`.  
   - For each position `j` from 1 to `row - 1`, compute `prev[row-1][j-1] + prev[row-1][j]` and append.  
   - If `row > 0`, append `1` at the end.  
   - Add the new row to the result.  
3. Return the result.

### Pseudocode  
```js
function generatePascalTriangle(numRows):
    result = empty list

    for i from 0 to numRows - 1:
        current = [1]  // First element of every row is always 1

        for j from 0 to i - 2:
            // Add the sum of two numbers directly above
            value = result[i-1][j] + result[i-1][j+1]
            append value to current

        if i > 0:
            append 1 to current  // Last element of row is 1 when row length > 1

        append current to result

    return result
```

## Walkthrough Example  
Let’s generate `numRows = 4` by hand:

- **Row 0:** Start with `[1]`.  
- **Row 1:** Start `[1]`; no middle elements; then append `1` → `[1,1]`.  
- **Row 2:** Start `[1]`; compute middle: `1+1=2`; append `1` → `[1,2,1]`.  
- **Row 3:** Start `[1]`; middles: `1+2=3`, `2+1=3`; append `1` → `[1,3,3,1]`.

So we get:
```
[[1],
 [1,1],
 [1,2,1],
 [1,3,3,1]]
```

## Data evolution

| row | currentRow start | computed middles    | after append 1 | result so far                  |
|-----|------------------|---------------------|----------------|--------------------------------|
| 0   | [1]              | —                   | —              | [[1]]                          |
| 1   | [1]              | —                   | [1,1]          | [[1], [1,1]]                   |
| 2   | [1]              | [2]                 | [1,2,1]        | [[1], [1,1], [1,2,1]]          |
| 3   | [1]              | [3,3]               | [1,3,3,1]      | [[1], [1,1], [1,2,1], [1,3,3,1]] |

## Time and Space Complexity  
- **Time:** O(numRows²), since each row `r` requires O(r) work.  
- **Space:** O(numRows²), to store the entire triangle.