## 69. Sqrt(x)

## Problem Statement  
Given a non-negative integer `x`, return the square root of `x` **rounded down to the nearest integer**.  
The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.  
For example, **do not use** `pow(x, 0.5)` or `x ** 0.5`.

## Input
- Integer `x` where `0 <= x <= 2³¹ - 1`

## Output
- Integer result representing the **floor** value of the square root of `x`.

## Examples

### Example 1:
Input: `x = 4`  
Output: `2`  
Explanation: The square root of 4 is 2, so we return 2.

### Example 2:
Input: `x = 8`  
Output: `2`  
Explanation: The square root of 8 is 2.82842..., and we return the floor value which is 2.

### Encouragement Before You Peek 👀  
Try to visualize how a number's square root behaves. What if you tried checking numbers from 1 upwards to see whose square exceeds `x`?

## Intuition  
At first, you might think about checking every number from `1` to `x` and squaring it to see if it matches `x`. This brute-force approach would work, but it's not optimal.  

Then comes the thought of **binary search**:  
- The square root lies between `1` and `x`.  
- We can use binary search to narrow down where the square root would lie.  
- If `mid * mid` is greater than `x`, the answer must be smaller; otherwise, it could be `mid` or larger.

Because the problem wants the **floor of the square root**, we can keep updating a `result` variable when `mid * mid` is less than or equal to `x`.

## Approach  
**Tags** : `Binary Search`
- Use binary search in the range `1` to `x`.  
- For each `mid`, calculate `mid * mid` and compare it with `x`.  
- If `mid * mid <= x`, it’s a possible answer. Store it and move `low = mid + 1` to try for a better answer.  
- Else, move `high = mid - 1`.  
- Return the last stored valid answer.  

### Pseudocode
```
function sqrt(x):
    If x is 0 or 1, return x

    Set low = 1, high = x

    While low <= high:
        mid = floor((low + high) / 2)
        square = mid * mid

        If 'square' is exactly equal to x, mid is the square root. Return mid.
        If 'square' is less than x, the answer must be higher, so move 'low' to mid + 1.
        If 'square' is more than x, the answer must be lower, so move 'high' to mid - 1.

    // After the loop ends
    Return high  // last valid mid where square <= x
```

## Walkthrough Example

Suppose `x = 10`

- Start with `low = 1`, `high = 10`, `result = 0`
- `mid = 5`, `5^2 = 25` → too big → `high = 4`
- `mid = 2`, `2^2 = 4` → good → `result = 2`, `low = 3`
- `mid = 3`, `3^2 = 9` → still good → `result = 3`, `low = 4`
- `mid = 4`, `4^2 = 16` → too big → `high = 3`

Now `low > high`, return `result = 3`

## Data Evolution

| Step | low | high | mid | mid*mid | Action                        | result |
|------|-----|------|-----|---------|-------------------------------|--------|
| 1    | 1   | 10   | 5   | 25      | too high → high = 4           | 0      |
| 2    | 1   | 4    | 2   | 4       | valid → result = 2, low = 3   | 2      |
| 3    | 3   | 4    | 3   | 9       | valid → result = 3, low = 4   | 3      |
| 4    | 4   | 4    | 4   | 16      | too high → high = 3           | 3      |
| End  |     |      |     |         | return result                 | 3      |

## Time and Space Complexity

- **Time Complexity**: O(log x), because we use binary search.  
- **Space Complexity**: O(1), only constant extra space is used.
