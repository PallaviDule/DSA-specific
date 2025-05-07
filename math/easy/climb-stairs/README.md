## 70. Climbing Stairs

## Problem Statement  
You are climbing a staircase. It takes `n` steps to reach the top.  
Each time you can either climb **1** or **2** steps.  
Return the **number of distinct ways** to climb to the top.

## Input  
- An integer `n` representing the total number of steps.  
- **Constraints**: `1 <= n <= 45`

## Output  
- An integer representing the number of distinct ways to reach the top.

## Examples  
### Example 1  
Input: `n = 2`  
Output: `2`  
Explanation:  
1. 1 step + 1 step  
2. 2 steps  

### Example 2  
Input: `n = 3`  
Output: `3`  
Explanation:  
1. 1 step + 1 step + 1 step  
2. 1 step + 2 steps  
3. 2 steps + 1 step  

### Encouragement Before You Peek 👀  
Try thinking about what decisions you're allowed to make at each stair.  
Can you relate this to a well-known sequence or reuse previously solved subproblems?

## Intuition  
At each step, you have only two options: take **1 step** or **2 steps**.  
This branching leads to a **recurrence relation** — the number of ways to reach step `n` is the sum of the number of ways to reach `n-1` and `n-2`.  
It follows the **Fibonacci pattern**.

## Approach  
This problem is identical to computing the nth number in a shifted Fibonacci sequence.

We can solve it using:
- **Recursion + Memoization** (Top-down)
- **Dynamic Programming** (Bottom-up with array)
- **Space Optimized DP** (just two variables)

### Pseudocode  
```
function climbStairs(n):
    if n is 1 or 2:
        return n

    initialize first = 1, second = 2

    for step from 3 to n:
        current = first + second
        update first to second
        update second to current

    return second
```

## Walkthrough Example (n = 5)  
We want to know how many ways to reach step 5.

- Step 1 → only 1 way  
- Step 2 → [1+1], [2] → 2 ways  
- Step 3 → [1+1+1], [1+2], [2+1] → 3 ways  
- Step 4 → [1+1+1+1], [1+1+2], [1+2+1], [2+1+1], [2+2] → 5 ways  
- Step 5 → [1+1+1+1+1], [1+1+1+2], [1+1+2+1], [1+2+1+1], [2+1+1+1], [1+2+2], [2+1+2], [2+2+1] → 8 ways

Answer: 8

## Data Evolution (when using two variables)

| Step | first | second | current |
|------|-------|--------|---------|
| 2    | 1     | 2      | —       |
| 3    | 1     | 2      | 3       |
| 4    | 2     | 3      | 5       |
| 5    | 3     | 5      | 8       |

## Time and Space Complexity  
- **Time Complexity:** O(n) — We loop once from 3 to n  
- **Space Complexity:** O(1) — Only two variables are used  
