# 7. Reverse Integer

## Problem Statement

[![LeetCode Badge](https://img.shields.io/badge/LeetCode-7-green)](https://leetcode.com/problems/reverse-integer/)

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

## Input

* A signed 32-bit integer `x`
* Constraints: `-2^31 <= x <= 2^31 - 1`

## Output

* A reversed integer, or `0` if overflow occurs

## Examples

### Example 1

Input: `x = 123`
Output: `321`

### Example 2

Input: `x = -123`
Output: `-321`

### Example 3

Input: `x = 120`
Output: `21`

### Encouragement Before You Peek 👀

Try reversing the digits manually and think about how you'd handle the negative sign and boundary conditions.

## Intuition

We can treat the number as a string to reverse the digits, but we need to ensure we handle signs and overflow correctly. Alternatively, we can build the reversed number mathematically digit by digit.

## Approach

[Solution Here](./solution.js)

**Tags**: Math, Integer Manipulation

* Extract digits one by one from the original number using modulus and integer division.
* Rebuild the number in reverse.
* Before every step, check if appending the next digit would overflow 32-bit signed integer boundaries.

### Edge Cases:

* x = 0
* x is negative
* x ends in 0 (like 120 -> 21)
* x when reversed exceeds 32-bit signed int range

### Pseudocode

```
function reverse(x):
    rev = 0
    while x is not 0:
        pop = x % 10
        x = x // 10
        if rev will overflow after multiplying by 10 and adding pop:
            return 0
        rev = rev * 10 + pop
    return rev
```

## Walkthrough Example

Input: x = -123

* pop = -3, rev = 0 \* 10 + (-3) = -3
* pop = -2, rev = -3 \* 10 + (-2) = -32
* pop = -1, rev = -32 \* 10 + (-1) = -321

Return: -321

## Data Evolution

| Step | x   | pop | rev Before | rev After |
| ---- | --- | --- | ---------- | --------- |
| 1    | 123 | 3   | 0          | 3         |
| 2    | 12  | 2   | 3          | 32        |
| 3    | 1   | 1   | 32         | 321       |


## Time and Space Complexity

* **Time Complexity**: O(log10(x)) since we're processing each digit once
* **Space Complexity**: O(1) since no extra space is used
