# 125. Valid Palindrome

## Problem Statement

A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.
Return `true` if the given string is a palindrome, otherwise return `false`.

## Input

* A string `s`
* `1 <= s.length <= 2 * 10^5`
* `s` consists only of printable ASCII characters

## Output

* Return `true` if `s` is a valid palindrome, else return `false`.

## Examples

### Example 1

**Input:**
`s = "A man, a plan, a canal: Panama"`
**Output:**
`true`
**Explanation:**
After removing non-alphanumerics and lowercasing → "amanaplanacanalpanama", which is a palindrome.

### Example 2

**Input:**
`s = "race a car"`
**Output:**
`false`
**Explanation:**
After cleaning → "raceacar", which is **not** a palindrome.

### Example 3

**Input:**
`s = " "`
**Output:**
`true`
**Explanation:**
After cleaning, it's an empty string `""`, which is considered a palindrome.

### Encouragement Before You Peek 👀

Try to solve the problem by thinking about two-pointer traversal from both ends and skip non-alphanumeric characters.

# Intuition

We want to compare characters from the start and end of the string while ignoring case and non-alphanumeric characters.

# Approach

* Use two pointers: one from the start and one from the end.
* Skip all non-alphanumeric characters.
* Convert characters to lowercase before comparing.
* If characters don't match, return false.
* If we reach the middle without mismatch, return true.

### Pseudocode

```
left = 0
right = s.length - 1

while left < right:
    if s[left] is not alphanumeric:
        move left forward
    else if s[right] is not alphanumeric:
        move right backward
    else if lowercase(s[left]) != lowercase(s[right]):
        return false
    else:
        move both pointers
return true
```

## Walkthrough Example

**s = "A man, a plan, a canal: Panama"**
After cleanup: "amanaplanacanalpanama"

Compare:

* a vs a ✅
* m vs m ✅
* ...
* All characters match —> ✅ return true

## Data evolution (for `"race a car"`)

| Step | Left Char | Right Char | Action                     |
| ---- | --------- | ---------- | -------------------------- |
| 0    | 'r'       | 'r'        | Match → move both pointers |
| 1    | 'a'       | 'a'        | Match → move both pointers |
| 2    | 'c'       | 'c'        | Match → move both pointers |
| 3    | 'e'       | 'a'        | ❌ Mismatch → return false  |

## Time and Space Complexity

* **Time:** O(n) — we traverse each character at most once.
* **Space:** O(1) — constant space used (no extra array or string).
