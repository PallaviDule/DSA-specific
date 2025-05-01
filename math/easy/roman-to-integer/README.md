# 13. Roman to Integer

## Problem Statement

Given a Roman numeral string, convert it to an integer.

Roman numerals are represented by seven different symbols with fixed integer values:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Roman numerals are typically written largest to smallest from left to right. However, in some cases, a smaller value before a larger value means subtraction. The six special cases are:

- I before V (5) or X (10) → 4 and 9
- X before L (50) or C (100) → 40 and 90
- C before D (500) or M (1000) → 400 and 900

## Input

- A string `s` containing only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
- `1 <= s.length <= 15`
- It is guaranteed that `s` is a valid Roman numeral in the range [1, 3999]

## Output

- An integer representing the Roman numeral value

## Examples
```
Input: `"III"`  
Output: `3`
```
```
Input: `"LVIII"`  
Output: `58`  
Explanation: L = 50, V = 5, III = 3
```
```
Input: `"MCMXCIV"`  
Output: `1994`  
Explanation: M = 1000, CM = 900, XC = 90, IV = 4
```

> Try solving it on your own before looking at the approach and solution.


## Approach

Before writing code, we need to recognize patterns in how Roman numerals are structured:

- Most characters add their value (e.g., `XII` = 10 + 1 + 1)
- But sometimes a smaller value appears before a larger one (e.g., `IV` = 5 - 1)

So, we should think in terms of **value comparison between current and next symbol**.

**Thought process:**
- Map Roman symbols to integer values using an object/dictionary.
- Loop from left to right.
- If the current value is **less than** the next value, subtract it (because it’s a special subtractive case).
- Else, add it normally.
- Use a simple loop with comparison logic to accumulate the total.

We choose a dictionary for fast lookup and a linear loop to process the string efficiently.

## Walkthrough Example
## Roman to Integer

## Problem Statement

Given a Roman numeral string, convert it to an integer.

Roman numerals are represented by seven different symbols with fixed integer values:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Roman numerals are typically written largest to smallest from left to right. However, in some cases, a smaller value before a larger value means subtraction. The six special cases are:

- I before V (5) or X (10) → 4 and 9  
- X before L (50) or C (100) → 40 and 90  
- C before D (500) or M (1000) → 400 and 900  

## Input

- A string `s` containing only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
- `1 <= s.length <= 15`
- It is guaranteed that `s` is a valid Roman numeral in the range [1, 3999]

## Output

- An integer representing the Roman numeral value

## Examples

Input: `"III"`  
Output: `3`

Input: `"LVIII"`  
Output: `58`  
Explanation: L = 50, V = 5, III = 3

Input: `"MCMXCIV"`  
Output: `1994`  
Explanation: M = 1000, CM = 900, XC = 90, IV = 4

---

> Try solving it on your own before looking at the approach and solution.

---

## Approach

Before writing code, we should observe the structure of Roman numerals.

We usually add the value of each character, **except** when a smaller numeral comes before a larger one (e.g., `IV`, `IX`, `XC`, etc.) — in those cases, we subtract.

**How to think:**
- We need to process each character and compare it to the next one.
- If current < next → subtract current
- Otherwise → add current
- Use a map for quick symbol-to-value lookup.
- Use a loop to walk through the string and apply the rule.

We’re not solving this using pattern matching or regex — just simple math based on Roman numeral rules.

---

## Walkthrough Example

Input: `"MCMXCIV"`

Step-by-step:

- **M (1000)** followed by **C (100)** → 1000 >= 100 → add 1000 → total = 1000  
- **C (100)** followed by **M (1000)** → 100 < 1000 → subtract 100 → total = 1000 - 100 = 900  
- **M (1000)** followed by **X (10)** → 1000 >= 10 → add 1000 → total = 1900  
- **X (10)** followed by **C (100)** → 10 < 100 → subtract 10 → total = 1900 - 10 = 1890  
- **C (100)** followed by **I (1)** → 100 >= 1 → add 100 → total = 1990  
- **I (1)** followed by **V (5)** → 1 < 5 → subtract 1 → total = 1990 - 1 = 1989  
- **V (5)** has no next → add 5 → total = 1994 

## Data Evolution

| Index | Char | Value | Next Char | Next Value | Action       | Total |
|-------|------|--------|-----------|------------|--------------|-------|
| 0     | M    | 1000   | C         | 100        | Add 1000     | 1000  |
| 1     | C    | 100    | M         | 1000       | Subtract 100 | 900   |
| 2     | M    | 1000   | X         | 10         | Add 1000     | 1900  |
| 3     | X    | 10     | C         | 100        | Subtract 10  | 1890  |
| 4     | C    | 100    | I         | 1          | Add 100      | 1990  |
| 5     | I    | 1      | V         | 5          | Subtract 1   | 1989  |
| 6     | V    | 5      | -         | -          | Add 5        | 1994  |


## Time and Space Complexity

- **Time Complexity:** O(n) — One pass through the input string
- **Space Complexity:** O(1) — Constant space for the symbol map
