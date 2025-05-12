## 50. Pow(x, n)

## Problem Statement

Implement pow(x, n), which calculates x raised to the power n (i.e., xⁿ).

## Input

* `x`: a floating-point number (`-100.0 < x < 100.0`)
* `n`: an integer (`-2³¹ <= n <= 2³¹ - 1`)
* Additional constraints:

  * Either `x` is not zero or `n > 0`
  * The final result lies within `[-10⁴, 10⁴]`

## Output

* A floating-point number representing `xⁿ`

## Examples

```js
Input: x = 2.00000, n = 10  
Output: 1024.00000  

Input: x = 2.10000, n = 3  
Output: 9.26100  

Input: x = 2.00000, n = -2  
Output: 0.25000  
```

### Encouragement Before You Peek 👀

Try solving it using brute force first, then think: Can we reduce the number of multiplications? Can we break the power in half?

## Intuition

Multiplying `x` by itself `n` times works, but it’s inefficient for large `n`.
If we observe powers:

* `x^10 = (x^5)^2`
* `x^5 = x * x^4 = x * (x^2)^2`
  We can use **divide and conquer**: reduce the power at each step by half.
  For negative powers, we just return `1 / (x^|n|)`.

## Approach

[Solution Here](./solution.js)
We use **Exponentiation by Squaring**:

* If `n` is even: `xⁿ = (x²)^(n/2)`
* If `n` is odd: `xⁿ = x * xⁿ⁻¹`
  Handle negative `n` by computing reciprocal of result.

### Pseudocode

```
function myPow(x, n):
    if n == 0:
        return 1
    if n < 0:
        x = 1 / x
        n = -n

    result = 1
    while n > 0:
        if n is odd:
            result *= x
        x *= x
        n = floor(n / 2)

    return result
```

## Walkthrough Example

Let's calculate `myPow(2, 10)`:

1. Initial `result = 1`, `x = 2`, `n = 10`
2. `n` is even → square x → `x = 4`, halve `n = 5`
3. `n` is odd → `result = 1 * 4 = 4`, square x → `x = 16`, `n = 2`
4. `n` is even → square x → `x = 256`, halve `n = 1`
5. `n` is odd → `result = 4 * 256 = 1024`, `n = 0`

Final result = 1024

## Data evolution

| Step | x   | n  | result | Action                  |
| ---- | --- | -- | ------ | ----------------------- |
| 1    | 2   | 10 | 1      | Start                   |
| 2    | 4   | 5  | 1      | x \*= x, n = n / 2      |
| 3    | 4   | 5  | 4      | n is odd → result \*= x |
| 4    | 16  | 2  | 4      | x \*= x, n = n / 2      |
| 5    | 256 | 1  | 4      | x \*= x, n = n / 2      |
| 6    | 256 | 1  | 1024   | n is odd → result \*= x |
| 7    |     | 0  | 1024   | Done                    |

## Time and Space Complexity

* **Time Complexity**: `O(log n)` — We reduce power by half at each step
* **Space Complexity**: `O(1)` — Constant space used
