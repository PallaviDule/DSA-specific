## Bitwise Operators in JavaScript

## Problem Statement  
Bitwise operators allow you to perform operations at the **bit level** on integers. These are useful in low-level programming, performance-critical applications, bitmasking, and toggling specific bits.

## Input  
Two integers `a` and `b`.

## Output  
Result of bitwise operations between `a` and `b`.

## Examples

```js
let a = 5;     // Binary: 0101
let b = 3;     // Binary: 0011

a & b          // AND     -> 0001 => 1
a | b          // OR      -> 0111 => 7
a ^ b          // XOR     -> 0110 => 6
~a             // NOT     -> 1010 => -6 (in 2's complement)
a << 1         // Left Shift  -> 1010 => 10
a >> 1         // Right Shift -> 0010 => 2
```

### Encouragement Before You Peek 👀  
Try converting the numbers to binary and apply each operation manually — you'll gain a lot of clarity doing this step by step.

## Intuition  
Think of numbers as binary sequences. Bitwise operations let you manipulate these bits directly — which can be much faster than higher-level operations. They're especially useful when you need to:

- Set, toggle, or clear specific bits
- Perform quick multiplication/division by powers of 2
- Compress multiple flags or boolean values into a single number

## Approach  
Bitwise operators act on the **binary representation** of numbers. Here’s a breakdown of each:

- **& (AND)**: Only sets a bit if both bits are 1  
- **| (OR)**: Sets a bit if either of the bits is 1  
- **^ (XOR)**: Sets a bit if the bits are different  
- **~ (NOT)**: Inverts all bits (flips 0s to 1s and vice versa)  
- **<< (Left Shift)**: Shifts bits to the left (multiplies by 2^n)  
- **>> (Right Shift)**: Shifts bits to the right (divides by 2^n, preserving sign)

### Pseudocode

```
Given two integers a and b:
  - Perform a & b
  - Perform a | b
  - Perform a ^ b
  - Perform ~a
  - Perform a << 1
  - Perform a >> 1
```

## Walkthrough Example

Take a = 5, b = 3:

- 5 = `0101`  
- 3 = `0011`

- a & b = `0001` → 1  
- a | b = `0111` → 7  
- a ^ b = `0110` → 6  
- ~a    = `1010` → -6 (JavaScript uses 32-bit signed integers internally)  
- a << 1 = `1010` → 10  
- a >> 1 = `0010` → 2  

## Data Evolution

| Operation | Binary Form         | Result |
|----------|---------------------|--------|
| a = 5    | 0101                | 5      |
| b = 3    | 0011                | 3      |
| a & b    | 0001                | 1      |
| a | b    | 0111                | 7      |
| a ^ b    | 0110                | 6      |
| ~a       | 11111111111111111111111111111010 | -6 |
| a << 1   | 1010                | 10     |
| a >> 1   | 0010                | 2      |

## Time and Space Complexity  
All bitwise operations are **O(1)** — they execute in constant time and use constant space.

## When Should You Use Bitwise Operators?

- **Set/Clear/Toggle individual bits** (common in embedded systems)
- **Check if a number is a power of two**:  
  ```js
  function isPowerOfTwo(n) {
    return (n > 0) && (n & (n - 1)) === 0;
  }
  if 8 is power two
    1000
    0111
    ----
    0000
  ```
- **Quick multiplication or division** by 2 using `<<` or `>>`
- **Compression** of multiple boolean flags into a single number using bitmasking
- **Performance-sensitive code**, where low-level manipulation is needed