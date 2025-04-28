# 9. Palindrome Number

## Problem
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

Constraints:
- -2³¹ <= x <= 2³¹ - 1

### Example 1:
    Input: `x = 121`
    Output: `true`
    Explanation: `121` reads the same from left to right and right to left.

### Example 2:
    Input: `x = -121`
    Output: `false`
    Explanation: From left to right, it reads `-121`. From right to left, it becomes `121-`, which is not a valid palindrome.

### Example 3:
    Input: `x = 10`
    Output: `false`
    Explanation: Reads `01` from right to left, which is not a palindrome.

## Approach

### Key Observations:
- Initialize `temp` as a copy of `num`.
- Initialize `reverse = 0`.
- While `temp > 0`:
  - Extract the last digit (`temp % 10`) and add it to `reverse` after shifting `reverse` one place left.
  - Remove the last digit from `temp` by integer division by 10.
- After the loop, compare `reverse` and `num`.
- Return `true` if they are equal, else return `false`.

## Walkthrough
You can find the solution [here](./solution.js)

Example: `x = 121`

| Step               | temp | reverse | Action                                                           |
|--------------------|------|---------|------------------------------------------------------------------|
| **Initial values** | 121  | 0       | temp = num, reverse = 0                                          |
| **First iteration**| 121  | 1       | reverse = 0*10 + (121%10) = 1, temp = Math.floor(121/10) = 12    |
| **Second iteration**| 12  | 12      | reverse = 1*10 + (12%10) = 12, temp = Math.floor(12/10) = 1      |
| **Third iteration**| 1    | 121     | reverse = 12*10 + (1%10) = 121, temp = Math.floor(1/10) = 0      |
| **Loop ends**       | 0    | 121     | Compare: reverse (121) == num (121), return true                 |

Example: `x = -121`

- As the number is negative, it cannot be a palindrome.
- Return `false` directly.

Example: `x = 10`

- Reverse is 1 (after processing).
- Compare 10 and 1 → they are not equal.
- Return `false`.

## Complexity
- Time Complexity: O(log₁₀n)  
  (We divide `n` by 10 each time, so the number of digits is approximately log₁₀n.)

- Space Complexity: O(1)  
  (We use only a few extra variables.)

## Conclusion

This solution checks if a given integer is a palindrome by reversing the digits and comparing the original number with the reversed part. The approach is efficient with a time complexity of **O(log x)**, making it suitable for large numbers within the given constraint range.
