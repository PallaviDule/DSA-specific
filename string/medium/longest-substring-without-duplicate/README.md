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

We use a dynamic array (`arr`) to represent the current substring without repeating characters.

1. Loop through each character in the input string.
2. While the character already exists in the array (i.e., it's a duplicate), remove characters from the start using `shift()` — this ensures the substring stays unique.
3. Add the current character to the array.
4. After each addition, update `maxLength` by comparing it with the current array length (converted to string using `arr.join('')` to ensure character count).

This approach ensures we're always tracking the longest valid substring without duplicates by shrinking the window from the start whenever a repeat is found.

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

**Time:** O(n) — This approach ensures that we only traverse the string once, resulting in an optimal time complexity of **O(n)**.
**Space:** O(min(n, m)) — We store characters in a set (or hashmap), where `n` is the length of the string and `m` is the number of unique characters.

