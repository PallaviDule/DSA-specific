## 204. Count Primes

## Problem Statement

Given an integer `n`, return the number of prime numbers **strictly less than** `n`.

## Input

* `n`: an integer (`0 <= n <= 5 * 10⁶`)

## Output

* An integer count of prime numbers strictly less than `n`

## Examples

```js
Input: n = 10  
Output: 4  
// Primes: 2, 3, 5, 7

Input: n = 0  
Output: 0

Input: n = 1  
Output: 0
```

### Encouragement Before You Peek 👀

Try a brute-force solution first by checking each number less than `n` for primality. Then explore if we can optimize it using a sieve!

## Intuition

Checking each number one by one for primality works but becomes too slow as `n` increases.
Instead, we can use the **Sieve of Eratosthenes** – a classic, efficient algorithm to find all primes up to a number.

## Approach

[Solution Here](./solution.js)
Use a boolean array `isPrime` of size `n`, initialized to `true`.
Iterate from 2 to `sqrt(n)`, and for each prime, mark its multiples as `false`.
Finally, count the number of `true` values in `isPrime`.

### Pseudocode

```
function countPrimes(n):
    if n <= 2:
        return 0

    isPrime = array of n elements set to true
    isPrime[0] = false
    isPrime[1] = false

    for i from 2 to sqrt(n):
        if isPrime[i]:
            for j from i*i to n with step i:
                isPrime[j] = false

    count = 0
    for i from 2 to n-1:
        if isPrime[i] is true:
            count++

    return count
```

## Walkthrough Example

Let’s calculate `countPrimes(10)`:

1. Initialize `isPrime` = `[false, false, true, true, true, true, true, true, true, true]`
2. Start from `i = 2`:

   * Mark multiples of 2: 4, 6, 8
3. `i = 3`:

   * Mark multiples of 3: 9
4. Remaining `true` indices: 2, 3, 5, 7 → total = 4

## Data evolution

| i  | Action                | isPrime Status (only for i=2 to 10)           |
| -- | --------------------- | --------------------------------------------- |
| 2  | Mark multiples of 2   | \[T, T, F, T, F, T, F, T, F]                  |
| 3  | Mark multiples of 3   | \[T, T, F, T, F, T, F, T, F] (9 marked false) |
| 4+ | Skip (already marked) | Final primes: 2, 3, 5, 7                      |

## Time and Space Complexity

* **Time Complexity**: `O(n log log n)` — Sieve of Eratosthenes - work more than n but less (n log n).
* **Space Complexity**: `O(n)` — Boolean array to track prime status
