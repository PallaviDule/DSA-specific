## 67. Add Binary

## Problem Statement  
Given two binary strings `a` and `b`, return their sum as a binary string.


## Input  
- Two binary strings `a` and `b`.

### Constraints
- 1 <= a.length, b.length <= 10⁴  
- Each string consists only of `'0'` or `'1'` characters.  
- Strings do not contain leading zeros (except for "0" itself).

## Output  
- A binary string representing the sum of `a` and `b`.

## Examples  
**Example 1**  
Input: `a = "11"`, `b = "1"`  
Output: `"100"`

**Example 2**  
Input: `a = "1010"`, `b = "1011"`  
Output: `"10101"`

### Encouragement Before You Peek 👀  
Try thinking how you’d add numbers manually (like we do in primary school), but in binary. Focus on simulating that process!

## Approach  
[View Solution](./solution.js)

**Tags**  `String`, `Math`, `Two Pointers`, `Simulation`  

When adding two binary strings:
- We simulate binary addition from the end of both strings, moving towards the start.
- We use a carry that may result from adding two bits and the carry from the previous step.
- Initialize two pointers at the end of both strings. At each step:
  - Convert characters to integers.
  - Sum the bits along with carry.
    - If the sum is 0 or 1, that’s directly the result bit.
    - If the sum is 2 (1+1), we write 0 and carry 1.
    - If the sum is 3 (1+1+1), we write 1 and carry 1.
- After the loop, if a carry remains, add `'1'` at the start.
- Return the reversed result (or construct it in reverse order to avoid reversing).

### Pseudocode  
```
Initialize i = a.length - 1, j = b.length - 1, carry = 0
Initialize result as an empty array

While i >= 0 or j >= 0 or carry > 0:
    digitA = i >= 0 ? Number(a[i]) : 0
    digitB = j >= 0 ? Number(b[j]) : 0
    total = digitA + digitB + carry
    result.push(total % 2) // 3%2=1; 2%2=0; 1%2=1; 0%2=0
    carry = Math.floor(total / 2) //3/2=1 ;2/2=1 ;1/2=0 ;0/2=0
    i--, j--

Reverse the result array and join it to get final string
Return result
```

## Walkthrough Example  
Inputs: `a = "1010"`, `b = "1011"`

| i (a) | j (b) | digitA | digitB | carry | total | result bit | updated carry |
|------|------|--------|--------|-------|-------|-------------|----------------|
| 3    | 3    |   0    |   1    |   0   |   1   |      1      |       0        |
| 2    | 2    |   1    |   1    |   0   |   2   |      0      |       1        |
| 1    | 1    |   0    |   0    |   1   |   1   |      1      |       0        |
| 0    | 0    |   1    |   1    |   0   |   2   |      0      |       1        |
| -    | -    |   0    |   0    |   1   |   1   |      1      |       0        |

Final result bits (before reverse): `1 0 1 0 1` → Output: `"10101"`

## Data Evolution  

```
a:    "1010"
b:    "1011"
carry: evolves as [0 → 0 → 1 → 0 → 1 → 0]
result: ["1", "0", "1", "0", "1"]
```

## Time and Space Complexity  

- **Time Complexity**: O(max(n, m)) — we traverse both strings once  
- **Space Complexity**: O(max(n, m)) — we store the result in a new array  
