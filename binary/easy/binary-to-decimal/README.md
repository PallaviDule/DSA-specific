## Binary to Decimal

## Problem Statement  
Convert a given binary number (represented as a base-10 integer) into its decimal representation.

## Input  
- A number composed only of 0s and 1s  
- The number is assumed to be a valid binary, entered as a base-10 integer (e.g., `101101`)  
- **Constraints:**  
  - 0 ≤ num ≤ 10⁹  
  - num contains only digits `0` or `1`  

## Output  
- An integer representing the decimal equivalent of the binary input  

## Examples  
**Input:** `101101`  
**Output:** `45`  

**Input:** `1000`  
**Output:** `8`  

### Encouragement Before You Peek 👀  
Remember how binary represents powers of 2 — each position from right to left stands for 2⁰, 2¹, 2², etc. Multiply and add them up!

## Intuition  
A binary number is just a sum of powers of 2 based on its bits. By traversing the digits from right to left and multiplying each digit by the corresponding power of 2, we can get its decimal value.

## Approach  
[Solution Here](./solution.js)

We initialize a result to `0` and a `power` to `1` (2⁰). We extract each digit from the right using modulo 10, multiply it by the current power of 2, and add it to the result. We increase the power by multiplying it by 2 in every step.

### Pseudocode  
```
function binaryToDecimal(num):
    result ← 0
    power ← 1

    while num > 0:
        digit ← num % 10
        result ← result + (digit * power)
        power ← power * 2
        num ← floor(num / 10)

    return result
```

## Walkthrough Example (Convert `101101` to Decimal)  
Starting from right (least significant bit):

```
Step 1: 1 × 2⁰ = 1
Step 2: 0 × 2¹ = 0
Step 3: 1 × 2² = 4
Step 4: 1 × 2³ = 8
Step 5: 0 × 2⁴ = 0
Step 6: 1 × 2⁵ = 32
Total = 1 + 0 + 4 + 8 + 0 + 32 = 45
```

## Data evolution  

| Step | Digit (Remainder) | Power (2^n) | Product | Running Total |
|------|-------------------|-------------|---------|----------------|
| 1    | 1                 | 1           | 1       | 1              |
| 2    | 0                 | 2           | 0       | 1              |
| 3    | 1                 | 4           | 4       | 5              |
| 4    | 1                 | 8           | 8       | 13             |
| 5    | 0                 | 16          | 0       | 13             |
| 6    | 1                 | 32          | 32      | 45             |

## Time and Space Complexity  
- **Time Complexity:** O(log₁₀N) — The number of digits in the input number  
- **Space Complexity:** O(1) — Only uses constant extra space  


## Math logic
1. Math(right to left)
    ``` 
     1           0       1       1       0       1
    2^5=32    2^4=16   2^3=8   2^2=4  2^1=2   2^0=1 
    ```    
2. last digit decide if number is odd or even;
3. Manual Paper-Style Breakdown :  
    Convert binary `101101` to decimal using powers of 2:

    ```
    Start from the rightmost digit (least significant bit):

    1 × 2⁰ = 1  
    0 × 2¹ = 0  
    1 × 2² = 4  
    1 × 2³ = 8  
    0 × 2⁴ = 0  
    1 × 2⁵ = 32  

    Now sum them up:
    32 + 0 + 8 + 4 + 0 + 1 = 45
    ```

    So, `101101` (binary) = `45` (decimal)
