# 567. Permutation in String

## Problem Statement
[![LeetCode Badge](https://img.shields.io/badge/LeetCode-567-orange)](https://leetcode.com/problems/permutation-in-string/)

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

A permutation of `s1` is any rearrangement of its characters. If one of those permutations is a substring in `s2`, return true.

## Input

* `s1`: string (1 <= s1.length <= 10⁴)
* `s2`: string (1 <= s2.length <= 10⁴)
* Both consist of lowercase English letters.

## Output

* Return `true` if any permutation of `s1` is a substring of `s2`, otherwise `false`.

## Examples

### Example 1

**Input**: s1 = "ab", s2 = "eidbaooo"
**Output**: true
**Explanation**: "ba" is a permutation of "ab" and a substring of s2.

### Example 2

**Input**: s1 = "ab", s2 = "eidboaoo"
**Output**: false

## Encouragement Before You Peek 👀

Try to think how you can use character frequencies and sliding window to keep track of what's needed.

## Intuition

We need to detect if any window of length `s1.length` in `s2` has the exact same character frequency count as `s1`. This is a classic sliding window problem.

## Approach

**Tags**: Sliding Window, Hashing, Frequency Map

### Pseudocode

```js
1. If s1.length > s2.length → return false

2. Initialize arrays:
   - s1Freq[26] = frequency of characters in s1
   - windowFreq[26] = frequency of characters in current window of s2

3. Fill s1Freq with frequencies of characters in s1
4. Traverse first s1.length characters of s2 and fill windowFreq

5. Slide the window over s2:
   a. For each index i starting from s1.length to s2.length:
      - If s1Freq === windowFreq → return true
      - Slide the window: remove s2[i - s1.length] and add s2[i]

6. Final check after loop for the last window
7. Return false
```

### Edge Cases

* If `s1.length > s2.length`, return `false` immediately.
* If both strings are the same and already permutations, return `true`.
* If s1 has unique letters and s2 is missing any of them, return `false`.

## Walkthrough Example

**s1** = "ab", **s2** = "eidbaooo"

Window size = 2 (same as s1.length)

* Window "ei": frequency doesn't match
* Window "id": frequency doesn't match
* Window "db": frequency doesn't match
* Window "ba": frequency **matches** → return true

## Data evolution

| i | Window (s2\[i..i+len]) | WindowFreq | Matches s1Freq? |
| - | ---------------------- | ---------- | --------------- |
| 0 | "ei"                   | \[1e, 1i]  | No              |
| 1 | "id"                   | \[1i, 1d]  | No              |
| 2 | "db"                   | \[1d, 1b]  | No              |
| 3 | "ba"                   | \[1b, 1a]  | **Yes**         |

## Time and Space Complexity

* **Time**: O(n) where n = s2.length (sliding window and constant comparison)
* **Space**: O(1) since frequency arrays are fixed size (26 letters)


