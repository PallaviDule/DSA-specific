## Sum of Digits

## Problem Statement  
Given a non-negative integer, return the sum of its digits.

## Input  
- A non-negative integer `num`

## Output  
- Integer representing the sum of the digits of `num`

## Examples  

**Example 1**  
Input: `num = 123`  
Output: `6`  
Explanation: `1 + 2 + 3 = 6`

**Example 2**  
Input: `num = 908`  
Output: `17`  
Explanation: `9 + 0 + 8 = 17`


### Encouragement Before You Peek 👀  
Think about how you might extract digits from a number one by one. What operation gives you the last digit? What reduces the number?

## Intuition  
To get each digit of a number, we can repeatedly take the last digit using the modulus operator `% 10` and then remove the last digit by using `Math.floor(num / 10)`. We can repeat this until the number becomes 0.

## Approach  
1. Initialize a variable `sum` to 0.
2. Use a loop to extract each digit of the number:
   - Add the last digit (`num % 10`) to `sum`.
   - Remove the last digit from `num` by doing `Math.floor(num / 10)`.
3. Return the final `sum`.

### Pseudocode  
```
FUNCTION getSumOfDigits(num):
    sum ← 0
    WHILE num > 0:
        digit ← num MOD 10
        sum ← sum + digit
        num ← FLOOR(num / 10)
    RETURN sum
```

### Walkthrough Example  

Let's say `num = 472`  

- Initial sum = 0  
- Loop 1:
  - Digit = 472 % 10 = 2  
  - sum = 0 + 2 = 2  
  - num = 472 / 10 = 47  
- Loop 2:
  - Digit = 47 % 10 = 7  
  - sum = 2 + 7 = 9  
  - num = 47 / 10 = 4  
- Loop 3:
  - Digit = 4 % 10 = 4  
  - sum = 9 + 4 = 13  
  - num = 4 / 10 = 0 → end  

Return: 13

### Data evolution

| Step | num | digit (num % 10) | sum | Updated num (Math.floor(num/10)) |
|------|-----|------------------|-----|----------------------------------|
| 1    | 472 | 2                | 2   | 47                               |
| 2    | 47  | 7                | 9   | 4                                |
| 3    | 4   | 4                | 13  | 0                                |

## Time and Space Complexity  
- **Time Complexity**: O(d), where d is the number of digits in `num`.  
- **Space Complexity**: O(1), only using a few variables.