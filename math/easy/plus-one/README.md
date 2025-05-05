# 66. Plus One

## Problem Statement  
You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the i<sup>th</sup> digit of the integer.  
The digits are ordered from most significant to least significant (left to right), and there are no leading zeros.

Increment the large integer by one and return the resulting array of digits.

## Input (with Constraints)
- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- No leading zeros in the input array.

## Output  
- Return an integer array representing the incremented value.

## Examples

```
Input:  digits = [1,2,3]
Output: [1,2,4]

Input:  digits = [4,3,2,1]
Output: [4,3,2,2]

Input:  digits = [9]
Output: [1,0]
```

## Approach 
[View solution](./solution.js)  

**Tags**: Array, Math   

We're given a number in the form of an array of digits. Our task is to increment that number by 1 and return the result in the same format.This is effectively a manual simulation of addition, the same way we add numbers on paper:

- Add `1` to the last digit.
- If the sum becomes 10, we set that digit to 0 and carry over the 1 to the previous digit.
- Continue this until no carry is needed or we reach the beginning.
- If we still have a carry at the end, we insert `1` at the beginning.
    - If all digits are 9 (like [9,9,9]), we’ll end up needing an extra digit at the front ([1,0,0,0]).

## Pseudocode
```
FUNCTION plusOne(digits):
    FOR i from (digits.length - 1) to 0:
        IF digits[i] < 9:
            digits[i] += 1
            RETURN digits
        ELSE:
            digits[i] = 0
    END FOR

    INSERT 1 at the beginning of digits
    RETURN digits
```

## Walkthrough Example

Input: `[9, 9, 9]`

| Step | Index | Digit Value | Action                | Resulting Digits |
|------|-------|--------------|------------------------|------------------|
| 1    | 2     | 9            | Set to 0, carry over   | [9, 9, 0]        |
| 2    | 1     | 9            | Set to 0, carry over   | [9, 0, 0]        |
| 3    | 0     | 9            | Set to 0, carry over   | [0, 0, 0]        |
| 4    | -     | -            | Insert 1 at front      | [1, 0, 0, 0]     |


#### Time and Space Complexity

- **Time Complexity**: `O(n)` – Worst case all digits are 9.
- **Space Complexity**: `O(1)` – Output modified in-place except one case when we insert `1` in front.
