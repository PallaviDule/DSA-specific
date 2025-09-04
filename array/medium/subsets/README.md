# 78. Subsets 

## Problem Statement  [![LeetCode](https://img.shields.io/badge/LeetCode-78-green.svg)](https://leetcode.com/problems/subsets/description/)

Given an integer array `nums` of unique elements, return *all possible subsets (the power set).*

The solution set must not contain duplicate subsets.

## Input

* An array of integers `nums`, where all elements are unique.
* Constraints:

  * `1 <= nums.length <= 10`
  * `-10 <= nums[i] <= 10`

## Output

* A 2D array containing all subsets of `nums`.
* The order of subsets does not matter.

## Examples

### Example 1

**Input:**
`nums = [1,2,3]`

**Output:**
`[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]`

### Example 2

**Input:**
`nums = [0]`

**Output:**
`[[], [0]]`


### Encouragement Before You Peek 👀

Try to think: subsets means *for each element, we can either include it or skip it.*
How would you simulate this decision process?

### Intuition

Backtracking

Each number has **two choices**:

1. Include it in the current subset.
2. Skip it.

By exploring all choices recursively, we generate the power set.


### Approach

We use **backtracking**:

* Maintain a temporary list `path` representing the current subset.
* At every step, add a *copy* of `path` into the results.
* Loop through the remaining elements, choose one, recurse deeper, and then undo the choice (pop).
* This ensures every possible combination is explored.

### Pseudocode

```
function backtrack(start, path):
    save copy of path into result

    for i from start to nums.length - 1:
        add nums[i] into path
        backtrack(i + 1, path)
        remove last element from path (undo choice)

start with backtrack(0, [])
return result
```

### Walkthrough Example (nums = \[1,2])

* Start: `[]` → add to result
* Choose `1` → path `[1]` → add to result

  * Then choose `2` → path `[1,2]` → add to result → backtrack to `[1]`
* Backtrack to `[]`
* Choose `2` → path `[2]` → add to result → backtrack to `[]`

Final subsets: `[[], [1], [1,2], [2]]`

### Data evolution

For `nums = [1,2,3]`

| Step | Action       | Path     | Result so far               |
| ---- | ------------ | -------- | --------------------------- |
| 1    | Save current | \[]      | `[[]]`                      |
| 2    | Choose 1     | \[1]     | `[[], [1]]`                 |
| 3    | Choose 2     | \[1,2]   | `[[], [1], [1,2]]`          |
| 4    | Choose 3     | \[1,2,3] | `[[], [1], [1,2], [1,2,3]]` |
| 5    | Backtrack 3  | \[1,2]   | ...                         |
| 6    | Backtrack 2  | \[1]     | ...                         |
| 7    | Choose 3     | \[1,3]   | ...                         |
| 8    | Backtrack 3  | \[1]     | ...                         |
| 9    | Backtrack 1  | \[]      | ...                         |
| 10   | Choose 2     | \[2]     | ...                         |
| 11   | Choose 3     | \[2,3]   | ...                         |
| 12   | Backtrack 3  | \[2]     | ...                         |
| 13   | Backtrack 2  | \[]      | ...                         |
| 14   | Choose 3     | \[3]     | ...                         |

Final result: `[[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]`

## Time and Space Complexity

* **Time Complexity**: `O(2^n)` because each element has two choices (include or skip).
* **Space Complexity**: `O(n)` for the recursion depth and temporary path.
