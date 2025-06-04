# [![LeetCode](https://img.shields.io/badge/LeetCode-371-green.svg)](https://leetcode.com/problems/sum-of-two-integers/) Sum of Two Integers

## Problem Statement

Given two integers `a` and `b`, return the sum of the two integers without using the operators `+` and `-`.

## Input

* `a` and `b`: Integers within the range `-1000 <= a, b <= 1000`.

## Output

* An integer representing the sum of `a` and `b` without using `+` or `-`.

## Examples

| a | b | Output |
| - | - | ------ |
| 1 | 2 | 3      |
| 2 | 3 | 5      |

### Encouragement Before You Peek 👀

Try solving this problem on your own first before peeking at the approach and solution!

## Intuition

This problem challenges us to perform addition without using `+` or `-`. Instead, we can leverage **bit manipulation**, specifically **bitwise operations** (`XOR`, `AND`, and `shift`) to simulate the addition process.

## Approach

### Tags

Bit Manipulation

### Pseudocode

```
while b is not zero:
    carry = (a AND b) shifted left by 1
    a = a XOR b
    b = carry
return a
```

* **a XOR b** computes the sum **without carry**.
* **(a AND b) << 1** computes the **carry**.
* Keep updating `a` and `b` until there's no carry left.

## Walkthrough Example

For `a = 1` and `b = 2`:

1. `carry = (1 & 2) << 1 = 0 << 1 = 0`
2. `a = 1 ^ 2 = 3`
3. `b = 0`
4. Since `b` is `0`, return `a = 3`.

## Data evolution

| Step | a | b | carry |
| ---- | - | - | ----- |
| 0    | 1 | 2 | 0     |
| 1    | 3 | 0 | 0     |

## Another Example: a=6, b=2;
| Step | a         | b | carry                       |
| ---- | --------- | - | --------------------------- |
| 0    | 6         | 2 | (6 & 2) << 1 = 2 << 1 = 4 |
| 1    | 6 ^ 2 = 4 | 4 | (4 & 4) << 1 = 4 << 1 = 8   |
| 2    | 4 ^ 4 = 0 | 8 | (0 & 8) << 1 = 0 << 1 = 0   |
| 3    | 0 ^ 8 = 8 | 0 | Done                        |


## Time and Space Complexity

* **Time Complexity:** O(1) (fixed number of bit positions)
* **Space Complexity:** O(1)
