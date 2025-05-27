## 151. Reverse Words in a String

## Problem Statement
[![LeetCode Badge](https://img.shields.io/badge/LeetCode-151-green)](https://leetcode.com/problems/reverse-words-in-a-string/)  
Given an input string `s`, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Note:

* `s` may contain leading or trailing spaces or multiple spaces between two words.
* The returned string should only have a single space separating the words.
* Do not include any extra spaces.

## Input

* A string `s` containing English letters (upper-case and lower-case), digits, and spaces `' '`.
* `1 <= s.length <= 10^4`
* There is at least one word in `s`.

## Output

* Return a string with words in reverse order, separated by a single space.

## Examples

### Example 1:

Input: `s = "the sky is blue"`
Output: `"blue is sky the"`

### Example 2:

Input: `s = "  hello world  "`
Output: `"world hello"`

### Example 3:

Input: `s = "a good   example"`
Output: `"example good a"`

---

### Encouragement Before You Peek 👀

Try solving it by trimming and reversing the words manually instead of using built-in utilities if possible.

---

# Intuition

We need to reverse the **order of words**, not the characters. Spaces need to be cleaned up. The main steps are to **split**, **filter**, **reverse**, and **join**.

# Approach

**Tags:** String, Two Pointers, Trimming, Reversal

The task is to reverse the **order of words**, not the characters in the string. The tricky part is handling **extra spaces** — leading, trailing, and multiple in-between.

### How to think about it:

1. **Ignore unnecessary spaces** – We don’t want extra spaces at the start, end, or between words.
2. **Split the string into words** – Use space as a delimiter.
3. **Filter out empty words** – This removes multiple spaces.
4. **Reverse the words list** – The order of words must be flipped.
5. **Join them back with a single space** – This gives the final, clean result.

### Edge Cases:

* Input has only spaces → Output should be an empty string.
* Input has leading/trailing/multiple spaces → Should be reduced to a single space between words.
* Input has one word → Output should be the same word without extra spaces.

### Pseudocode

```
function reverseWords(s):
    words = split s by spaces
    cleanWords = filter out empty strings from words
    reversedWords = reverse the cleanWords list
    return join reversedWords with single space
```

## Walkthrough Example

Input: `s = "  a good   example  "`

1. After split: `['', '', 'a', 'good', '', '', 'example', '', '']`
2. Filter: `['a', 'good', 'example']`
3. Reverse: `['example', 'good', 'a']`
4. Join: `'example good a'`

Output: `'example good a'`

## Data evolution

| Step      | Value                                             |
| --------- | ------------------------------------------------- |
| Raw input | "  a good   example  "                            |
| Split     | \['', '', 'a', 'good', '', '', 'example', '', ''] |
| Filtered  | \['a', 'good', 'example']                         |
| Reversed  | \['example', 'good', 'a']                         |
| Joined    | "example good a"                                  |

## Time and Space Complexity

* **Time:** O(n), where n is the length of the string. We split and iterate through the words.
* **Space:** O(n), for storing the split words and final result string.

---
## Two Pointers Approach (In-Place Style)

### Intuition

We treat the input string as a character array and manipulate it directly:

1. First reverse the **entire string**.
2. Then, reverse each **individual word**.
3. Finally, **clean up spaces** — remove leading, trailing, and multiple intermediate spaces.

This approach uses two pointers to reverse words and trim spaces efficiently.

---

### 🧩 Pseudocode

```
function reverseWords(s):
    Convert s to array if needed (e.g., s = s.split(''))

    Reverse the entire array
    Initialize slow = 0 for writing characters

    for fast from 0 to length of s:
        Skip multiple spaces

        If a word starts:
            If slow > 0, insert a single space
            Copy characters from fast to slow until space or end
            Reverse that word in-place

    Resize array to slow (cut off trailing part if needed)
    Return the string formed by the first 'slow' characters
```

---

### 🔁 Example Walkthrough

Input: `"  the   sky  is  blue  "`

1. **Reverse all characters**:
   `"  eulb  si  yks   eht  "`

2. **Reverse each word in place**:
   `"  blue  is  sky   the  "`

3. **Remove extra spaces**:
   `"blue is sky the"`

---

### 📌 Time and Space Complexity

* **Time**: `O(n)` — each character is visited a constant number of times
* **Space**: `O(1)` extra if working in-place (or `O(n)` if using a new string/array)
