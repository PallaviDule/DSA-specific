# 456. 132 Pattern

## Problem Statement

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]`, and `nums[k]` such that:

```
i < j < k and nums[i] < nums[k] < nums[j]
```

Return `true` if there is at least one 132 pattern in `nums`, otherwise return `false`.

## Input

* `nums`: an array of integers
* Constraints:

  * `1 <= nums.length <= 2 * 10⁵`
  * `-10⁹ <= nums[i] <= 10⁹`

## Output

* Boolean value indicating whether a 132 pattern exists.

## Examples

### Example 1:

**Input:**
`nums = [1, 2, 3, 4]`
**Output:**
`false`
**Explanation:**
No 132 pattern exists.

### Example 2:

**Input:**
`nums = [3, 1, 4, 2]`
**Output:**
`true`
**Explanation:**
132 pattern exists: \[1, 4, 2]

### Example 3:

**Input:**
`nums = [-1, 3, 2, 0]`
**Output:**
`true`
**Explanation:**
132 patterns: \[-1, 3, 2], \[-1, 3, 0], \[-1, 2, 0]

### Encouragement Before You Peek 👀

Try to think in reverse: can you track potential "middle" and "end" values in a 132 pattern by scanning from the back?

# Intuition

We want to find three elements in order such that:

* First is the smallest (`nums[i]`)
* Second is the largest (`nums[j]`)
* Third is between them (`nums[k]`), with `i < j < k`

The trick is to iterate **from right to left**, keeping track of a candidate for `nums[k]` (the middle value) and using a **stack** to help us track potential `nums[j]`.

## Approach

[Solution Here](./solution.js)

1. We scan the array **in reverse**, maintaining:
    * A stack that stores potential `nums[j]` (taller values)
    * A variable `third` that remembers the best `nums[k]` we've seen so far    
2. If we find a `nums[i]` that's less than `third`, it means:
    ```
    nums[i] < third < nums[j]
    ```
3. ...so we return true.

#### Tags: Stack, Greedy, Monotonic Stack
### Pseudocode

```
Initialize stack = []
Initialize third = -Infinity

Loop i from end to start:
    If nums[i] < third:
        Return true

    While stack not empty and nums[i] > stack.top:
        third = stack.pop()

    Push nums[i] onto stack

Return false
```

## Walkthrough Example (no table)

Let's walk through `nums = [3, 1, 4, 2]` in reverse:

* Start from right:
* `nums[3] = 2`, stack empty ⇒ push 2
* `nums[2] = 4`, 4 > 2 ⇒ pop 2 → `third = 2`, push 4
* `nums[1] = 1`, 1 < third (=2) ⇒ 132 pattern found ⇒ return true

## Data evolution

| Step | i | nums\[i] | Stack | third | Action                                      |
| ---- | - | -------- | ----- | ----- | ------------------------------------------- |
| 1    | 3 | 2        | \[2]  | -∞    | push 2                                      |
| 2    | 2 | 4        | \[]   | 2     | pop 2, update third, push 4                 |
| 3    | 1 | 1        | \[4]  | 2     | 1 < third ⇒ 132 pattern found ⇒ return true |

## Time and Space Complexity

* **Time:** O(n) — each element is pushed and popped at most once
* **Space:** O(n) — for the stack used to track candidates for `nums[j]`


## Another exampe walkthrough:
Here’s a **table-based walkthrough** of the example:    
**Input:** `nums = [6, 12, 3, 4, 6, 11, 20]`    
We're looking for a 132 pattern → `nums[i] < nums[k] < nums[j]` with `i < j < k`.

### Walkthrough Table

| Step | i | nums\[i] | Stack (top right) | third (candidate for nums\[k]) | Action                                                     |
| ---- | - | -------- | ----------------- | ------------------------------ | ---------------------------------------------------------- |
| 1    | 6 | 20       | \[]               | -∞                             | Stack empty, push 20                                       |
| 2    | 5 | 11       | \[20]             | -∞                             | 11 < 20, push 11                                           |
| 3    | 4 | 6        | \[20, 11]         | -∞                             | 6 < 11, push 6                                             |
| 4    | 3 | 4        | \[20, 11, 6]      | -∞                             | 4 < 6, push 4                                              |
| 5    | 2 | 3        | \[20, 11, 6, 4]   | -∞                             | 3 < 4, push 3                                              |
| 6    | 1 | 12       | \[20,11,6,4,3]    | -∞ → 3 → 4 → 6 → 11            | Pop 3, 4, 6, 11 → third = 11, push 12                      |
| 7    | 0 | 6        | \[20,12]          | 11                             | 6 < 11 → ✅ 132 pattern found (6 < 11 < 12) → return `true` |

### Result

**Output:** `true`
**132 Pattern Found:** `[6, 12, 11]`
Where `i=0`, `j=1`, `k=5`
