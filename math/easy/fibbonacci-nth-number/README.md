## 509. Fibonacci Number

## Problem Statement
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

- `F(0) = 0`  
- `F(1) = 1`  
- For `n > 1`: `F(n) = F(n-1) + F(n-2)`

Given an integer `n`, return `F(n)`.

## Input
- An integer `n`

**Constraints**:
- `0 <= n <= 30`

## Output
- Return the `n`th Fibonacci number.

## Examples

### Example 1:
**Input**: `n = 2`  
**Output**: `1`  
**Explanation**: `F(2) = F(1) + F(0) = 1 + 0 = 1`

### Example 2:
**Input**: `n = 3`  
**Output**: `2`  
**Explanation**: `F(3) = F(2) + F(1) = 1 + 1 = 2`

### Example 3:
**Input**: `n = 4`  
**Output**: `3`  
**Explanation**: `F(4) = F(3) + F(2) = 2 + 1 = 3`

### Encouragement Before You Peek 👀  
Try solving this without recursion first. Think about how the previous values relate to the current one — can you use just two variables?

## Intuition

This problem directly follows the Fibonacci sequence definition.  
You can solve it recursively, but that becomes inefficient due to repeated calculations.  
A better way is to **build from the bottom up**, calculating from `F(0)` to `F(n)`.

## Approach

Use **iterative dynamic programming**.  
Track only the last two Fibonacci numbers to compute the next one.

### Pseudocode
```
function fibonacci(n):
    if n is 0: return 0
    if n is 1: return 1

    prev2 = 0  // F(0)
    prev1 = 1  // F(1)

    for i from 2 to n:
        current = prev1 + prev2
        update prev2 = prev1
        update prev1 = current

    return current
```

## Walkthrough Example

Let's compute `F(5)`:

- F(0) = 0  
- F(1) = 1  
- F(2) = 1 → 0 + 1  
- F(3) = 2 → 1 + 1  
- F(4) = 3 → 2 + 1  
- F(5) = 5 → 3 + 2  

So, result = 5

## Data Evolution

| Step | prev2 (F(i-2)) | prev1 (F(i-1)) | current (F(i)) |
|------|----------------|----------------|----------------|
| Init | 0              | 1              | -              |
| 2    | 0              | 1              | 1              |
| 3    | 1              | 1              | 2              |
| 4    | 1              | 2              | 3              |
| 5    | 2              | 3              | 5              |


## Time and Space Complexity

- **Time Complexity**: `O(n)` — one loop up to `n`
- **Space Complexity**: `O(1)` — only two variables used


## ❌ Plain Recursion
```js
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```
- ❌ Exponential time: O(2^n)
- ❌ Poor performance for larger inputs
- ❌ May fail for n > 40 in interviews due to time constraints

Use it only to demonstrate the base logic before optimizing.

##  (Optional) If they ask for memoization with recursion
You can use:

```js
function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}
```
### Time and Space Complexity

- **Time Complexity**: `O(n)` — one loop up to `n`
- **Space Complexity**: `O(n)` 
Good to show understanding of top-down DP

Absolutely! Let's do a **step-by-step dry run** of the **memoized Fibonacci** approach with `n = 5`.

---

### 🧠 Memoized Recursive Fibonacci (Top-down)

```js
function fib(n, memo = {}) {
    if (n <= 1) return n;

    if (memo[n]) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

---

### 🪜 Dry Run for `fib(5)`

We start with an empty `memo = {}` and call `fib(5)`:

#### Step-by-step Calls and Memo Updates:

| Call         | Returns               | Memo Update               |
|--------------|------------------------|---------------------------|
| `fib(5)`     | `fib(4) + fib(3)`      | —                         |
| `fib(4)`     | `fib(3) + fib(2)`      | —                         |
| `fib(3)`     | `fib(2) + fib(1)`      | —                         |
| `fib(2)`     | `fib(1) + fib(0)`      | —                         |
| `fib(1)`     | `1`                    | base case                 |
| `fib(0)`     | `0`                    | base case                 |
| → `fib(2)`   | `1 + 0 = 1`            | `memo[2] = 1`             |
| → `fib(3)`   | `memo[2] + fib(1)`     | `memo[3] = 1 + 1 = 2`     |
| → `fib(4)`   | `memo[3] + memo[2]`    | `memo[4] = 2 + 1 = 3`     |
| → `fib(5)`   | `memo[4] + memo[3]`    | `memo[5] = 3 + 2 = 5`     |

---

### Final `memo` object:
```js
{
  2: 1,
  3: 2,
  4: 3,
  5: 5
}
```

Each value is only computed **once**, and all future calls use the stored result.
