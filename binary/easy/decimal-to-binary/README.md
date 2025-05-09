## Decimal to Binary

## Problem Statement  
Convert a given non-negative decimal number to its binary representation.

## Input  
- A non-negative integer `num`  
- Constraints:  
  - 0 <= num <= 2³¹ - 1  

## Output  
- The binary representation of the number in decimal format (not as a string).  
  For example:  
  - Input: 5 → Output: 101  
  - Input: 8 → Output: 1000  

## Examples  

**Input:** `42`  
**Output:** `101010`

**Input:** `8`  
**Output:** `1000`

### Encouragement Before You Peek 👀  
Try thinking how binary numbers are formed. Each bit is either 0 or 1 based on remainders when the number is repeatedly divided by 2.
## Manual Division Example: Convert 45 to Binary
We repeatedly divide 45 by 2, keeping track of the quotient and remainder.
(45) -> 101101

```
2 | 45 | 1  ← remainder (LSB)
-------------
2 | 22 | 0
-------------
2 | 11 | 1
-------------
2 |  5 | 1
-------------
2 |  2 | 0
-------------
2 |  1 | 1  ← remainder (MSB)
-------------
0 |
```
Now, read the remainders from bottom to top:    
Binary of 45 = 101101
## Intuition  
When converting from decimal to binary, we keep dividing the number by 2 and record the remainders. These remainders, when reversed, form the binary representation. Instead of storing a string, we build a number by accumulating powers of 10.

## Approach  
[Solution Here](./solution.js)  

We use a `while` loop to extract each binary digit (0 or 1) by taking `num % 2`, then divide the number by 2. We multiply the binary digit by `10^power` to construct the binary representation numerically.

### Pseudocode  
```
function decimalToBinary(num):
    result = 0
    power = 0

    while num > 0:
        remainder = num % 2
        quotient = num // 2
        result = result + (remainder * (10^power))
        power += 1
        num = quotient

    return result
```

## Walkthrough Example  
Let’s convert `42`:

- 42 % 2 = 0 → result = 0  
- 21 % 2 = 1 → result = 10  
- 10 % 2 = 0 → result = 010  
- 5 % 2 = 1 → result = 1010  
- 2 % 2 = 0 → result = 01010  
- 1 % 2 = 1 → result = 101010

Final result: `101010`

## Data evolution  

| Step | Num | Remainder | Power | Partial Result |
|------|-----|-----------|-------|----------------|
| 1    | 42  | 0         | 0     | 0              |
| 2    | 21  | 1         | 1     | 10             |
| 3    | 10  | 0         | 2     | 10             |
| 4    | 5   | 1         | 3     | 1010           |
| 5    | 2   | 0         | 4     | 1010           |
| 6    | 1   | 1         | 5     | 101010         |

## Time and Space Complexity  
- **Time Complexity:** O(log₂N) because we divide the number by 2 at each step.  
- **Space Complexity:** O(1), as we use only constant extra space.  
