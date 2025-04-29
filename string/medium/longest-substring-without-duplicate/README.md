## 3. Longest Substring Without Repeating Characters

## Problem Statement

Given a string `s`, find the length of the longest substring without duplicate characters.

## Input 
Constraints
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols, and spaces.

## Output

The length of the longest substring without repeating characters.

## Examples

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
```

## Encouragement Before You Peek 👀

Try solving it on your own first. Think about how you can use a sliding window approach to efficiently track characters.

## Approach

We use a **sliding window** technique with two pointers (`left` and `right`) to find the longest substring without repeating characters. Here's how it works:

1. Initialize two pointers, `left` and `right`, both starting at the beginning of the string.
2. Use a **set** or **hashmap** to store characters that are currently in the window between `left` and `right`.
3. Move the `right` pointer to expand the window and include new characters.
4. If a character repeats, increment the `left` pointer to shrink the window until there are no duplicate characters.
5. Track the maximum length of the window as `right` moves across the string.

This approach ensures that we only traverse the string once, resulting in an optimal time complexity of **O(n)**.

## Walkthrough Example

For input: `s = "abcabcbb"`

| Step | Left | Right | Current Window | Max Length | Action                           |
|------|------|-------|----------------|------------|----------------------------------|
| 1    | 0    | 0     | "a"            | 1          | Add 'a' to the set              |
| 2    | 0    | 1     | "ab"           | 2          | Add 'b' to the set              |
| 3    | 0    | 2     | "abc"          | 3          | Add 'c' to the set              |
| 4    | 1    | 3     | "bca"          | 3          | Move left to 1, add 'a' to set  |
| 5    | 2    | 4     | "cab"          | 3          | Move left to 2, add 'b' to set  |
| 6    | 3    | 5     | "abc"          | 3          | Move left to 3, add 'c' to set  |

Result: `3`

## Time and Space Complexity

**Time:** O(n) — We traverse the string once with both pointers moving from left to right.  
**Space:** O(min(n, m)) — We store characters in a set (or hashmap), where `n` is the length of the string and `m` is the number of unique characters.

