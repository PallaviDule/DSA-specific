# Armstrong Number

## Problem Statement

An **Armstrong number** (also known as a **narcissistic number**) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

For example:

* 153 is an Armstrong number because it has 3 digits and
  $1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$.
* 9474 is an Armstrong number because it has 4 digits and
  $9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474$.

Given an integer `num`, determine whether it is an Armstrong number.

## Input

* A positive integer `num`.

## Output

* Return `true` if `num` is an Armstrong number.
* Otherwise, return `false`.

## Examples

| Input | Output | Explanation                     |
| ----- | ------ | ------------------------------- |
| 153   | true   | $1^3 + 5^3 + 3^3 = 153$         |
| 9474  | true   | $9^4 + 4^4 + 7^4 + 4^4 = 9474$  |
| 123   | false  | $1^3 + 2^3 + 3^3 = 36 \neq 123$ |
| 0     | true   | $0^1 = 0$                       |

## Approach

1. Convert the number to a string to determine the number of digits, say `n`.
2. For each digit in the number:

   * Convert it back to an integer.
   * Raise it to the power of `n`.
   * Add it to a running sum.
3. After processing all digits, compare the sum to the original number.
4. If equal, the number is an Armstrong number; otherwise, it is not.

## Edge Cases

* Single-digit numbers are always Armstrong numbers since $d^1 = d$.
* Zero (`0`) is an Armstrong number.
* Large numbers may require careful handling of integer overflow in some languages.

## Pseudocode

```
function isArmstrong(num):
    convert num to string and store length in n
    sum = 0

    for each character c in string:
        digit = integer value of c
        sum += digit^n

    return sum == num
```

## Time and Space Complexity

* **Time Complexity:** $O(k)$, where $k$ is the number of digits in the number. We iterate through all digits once.
* **Space Complexity:** $O(k)$ for converting the number to a string.
