# 1910. Remove All Occurrences of a Substring

## Problem Statement

Given two strings `s` and `part`, perform the following operation repeatedly until all occurrences of the substring `part` are removed from `s`:

* Find the leftmost occurrence of the substring `part` and remove it from `s`.

Return the final string after all removals.

A **substring** is a contiguous sequence of characters within a string.

## Input

* `s`: A lowercase string (1 <= s.length <= 1000)
* `part`: A lowercase substring (1 <= part.length <= 1000)

## Output

* Final string after removing all occurrences of `part`

## Examples

### Example 1

**Input:**
s = `"daabcbaabcbc"`
part = `"abc"`
**Output:** `"dab"`
**Explanation:**

1. Remove "abc" → `"dabaabcbc"`
2. Remove "abc" → `"dababc"`
3. Remove "abc" → `"dab"`

### Example 2

**Input:**
s = `"axxxxyyyyb"`
part = `"xy"`
**Output:** `"ab"`
**Explanation:**

1. Remove "xy" → `"axxxyyyb"`
2. Remove "xy" → `"axxyyb"`
3. Remove "xy" → `"axyb"`
4. Remove "xy" → `"ab"`

### Encouragement Before You Peek 👀

Try solving it yourself by thinking: how can you check if a part exists and keep removing it efficiently?

## Intuition

We need to keep removing the first occurrence of `part` in `s`. The easiest way to do that is to use `indexOf` and `substring`, or even better: use a stack-like approach to efficiently build the string while checking if `part` is formed.

## Approach

**Tags**: Stack, String, Simulation

We use a stack-based approach (technically just a string in JavaScript) to efficiently build the final string:
1. Traverse the original string s one character at a time.
2. Append each character to a result string.
3. After each append, check if the end of the result string matches the part substring.
4. If it does, remove the last part.length characters (i.e., remove the part from result).
5. Repeat this until the end of the string.
This way, you don’t have to use indexOf and replace, which may be slower due to repeated full string traversals.

**Why This Works**  
Because we only check the last few characters (equal to the length of part) after each addition, we maintain a linear traversal with an efficient match check.

### Pseudocode

```
Initialize empty result string
Iterate each character of s
  - Add character to result
  - If the end of result matches part
    - Remove that part from result
Return result
```

## Walkthrough Example

Input: s = `"daabcbaabcbc"`, part = `"abc"`

```
Step 1: Add 'd'         → res = "d"
Step 2: Add 'a'         → res = "da"
Step 3: Add 'a'         → res = "daa"
Step 4: Add 'b'         → res = "daab"
Step 5: Add 'c'         → res = "daabc" → ends with "abc", remove → "da"
Step 6: Add 'b'         → res = "dab"
Step 7: Add 'a'         → res = "daba"
Step 8: Add 'a'         → res = "dabaa"
Step 9: Add 'b'         → res = "dabaab"
Step 10: Add 'c'        → res = "dabaabc" → ends with "abc", remove → "daba"
...
Final result: `"dab"`
```

## Data Evolution

| Step | Char | Current Result | Action              |
| ---- | ---- | -------------- | ------------------- |
| 1    | d    | d              | append              |
| 2    | a    | da             | append              |
| 3    | a    | daa            | append              |
| 4    | b    | daab           | append              |
| 5    | c    | daabc          | remove 'abc' → da   |
| 6    | b    | dab            | append              |
| 7    | a    | daba           | append              |
| 8    | a    | dabaa          | append              |
| 9    | b    | dabaab         | append              |
| 10   | c    | dabaabc        | remove 'abc' → daba |
| 11   | b    | dabab          | append              |
| 12   | c    | dababc         | remove 'abc' → dab  |

## Time and Space Complexity

* **Time Complexity:** O(n \* m) in the worst case (n = s.length, m = part.length), but with a stack approach, it becomes effectively O(n)
* **Space Complexity:** O(n) for the result string as a stack
