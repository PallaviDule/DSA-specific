## Check if a Number is Prime

### Problem Statement

Write a function to check whether a given number is a **prime number**. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Input

* A positive integer `num`
* `2 <= num <= 10⁶`

## Output

* `true` if the number is prime
* `false` otherwise

## Examples

```js
Input: 17  
Output: true

Input: 12  
Output: false

Input: 2  
Output: true

Input: 9  
Output: false
```

### Encouragement Before You Peek 👀

Think about how prime numbers work. What is the smallest number that can divide it? Can you optimize from checking all numbers?

## Intuition

Instead of checking all numbers from 2 to num-1, we only need to check up to √num.
If any number divides evenly in that range, then it's not prime.
> **Why √num?** Because if `a * b = num` and both `a` and `b` are greater than √num, then their product would be greater than `num`.

## Approach

[Solution Here](./solution.js)

* Return `false` if any number from 2 to `√num` divides the number.
* Otherwise, return `true`.

### Pseudocode

```
function isPrime(num):
    for i from 2 to √num:
        if num % i == 0:
            return false
    return true
```

## Walkthrough Example

Check if `num = 9` is prime:

* i = 2 → 9 % 2 ≠ 0 → continue
* i = 3 → 9 % 3 == 0 → divisible → not prime → return false

Check if `num = 17`:

* i = 2 to 4 → none divide 17 evenly
  → return true

## Data evolution

| num | i | num % i | Result          |
| --- | - | ------- | --------------- |
| 9   | 2 | 1       | Continue        |
| 9   | 3 | 0       | Not prime       |
| 17  | 2 | 1       | Continue        |
| 17  | 3 | 2       | Continue        |
| 17  | 4 | 1       | Prime confirmed |

## Time and Space Complexity

* **Time Complexity:** O(√n), since we only check divisors up to √n
* **Space Complexity:** O(1), constant space usage


## When it becomes more algorithmic:
- If you're checking many primes up to N → You’d use an algorithm like the **Sieve of Eratosthenes.**
- If you're doing very large primes → You might use probabilistic primality tests like **Miller-Rabin**.
- If you're doing prime factorization or checking primes in cryptography, then yes — algorithms are deeply involved.