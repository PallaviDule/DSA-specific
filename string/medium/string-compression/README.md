# 443. String Compression

## Problem Statement
[![LeetCode Badge](https://img.shields.io/badge/LeetCode-443-green)](https://leetcode.com/problems/string-compression/)  
Given an array of characters `chars`, compress it using the following algorithm:

* Begin with an empty string `s`.
* For each group of **consecutive repeating characters** in `chars`:

  * If the group's length is 1, append the character to `s`.
  * Otherwise, append the character followed by the group's length.

The compressed string should **not** be returned separately, but instead, be stored in the input character array `chars`.
Note that group lengths that are 10 or longer will be split into multiple characters in `chars`.

After modifying the input array, return the **new length** of the array.
You must write an algorithm that uses only **constant extra space**.

## Input

* `chars.length` in the range \[1, 2000]
* Each element in `chars` is a lowercase/uppercase English letter, digit, or symbol

## Output

* Return the new length of the compressed array.
* The input array `chars` must be modified in-place to hold the first `new length` characters of the compressed string.

## Examples

### Example 1

Input: `chars = ["a","a","b","b","c","c","c"]`
Output: `6`
Modified `chars`: `["a","2","b","2","c","3"]`

### Example 2

Input: `chars = ["a"]`
Output: `1`
Modified `chars`: `["a"]`

### Example 3

Input: `chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]`
Output: `4`
Modified `chars`: `["a","b","1","2"]`

### Encouragement Before You Peek 👀

Try to come up with an efficient in-place solution that only uses constant space.

## Intuition

We want to process the array in-place, counting consecutive characters and writing the character and its count as we go. If a character appears once, we just write it. If more, we write the character followed by each digit of the count.

## Approach

**Tags:** Two Pointers, In-place, String
We use two pointers:

* One for **reading** the characters (`read`)
* One for **writing** the compressed output (`write`)

**Steps:**

1. Initialize `read = 0` and `write = 0`.
2. While `read < chars.length`:

   * Set `start = read` and move `read` forward while the same character continues.
   * Write the character at `chars[write++]`.
   * Calculate the count = `read - start`.
   * If count > 1, convert count to string and write each digit at `chars[write++]`.
3. Return `write` as the new length.

### Pseudocode

```
function compress(chars):
    write = 0
    read = 0
    while read < chars.length:
        start = read
        while read < chars.length and chars[read] == chars[start]:
            read += 1

        chars[write] = chars[start]
        write += 1

        count = read - start
        if count > 1:
            for digit in str(count):
                chars[write] = digit
                write += 1

    return write
```

---

## Walkthrough Example

Input: `["a", "a", "b", "b", "c", "c", "c"]`

Steps:

* Group `"aa"` → write `'a'`, then `'2'`
* Group `"bb"` → write `'b'`, then `'2'`
* Group `"ccc"` → write `'c'`, then `'3'`

Result: `["a","2","b","2","c","3"]`, length = 6

---

## Data evolution

| Step | Read | Write | Group | Action     | chars (partial)                 |
| ---- | ---- | ----- | ----- | ---------- | ------------------------------- |
| 1    | 2    | 1     | "aa"  | Write a, 2 | \["a", "2"]                     |
| 2    | 4    | 3     | "bb"  | Write b, 2 | \["a", "2", "b", "2"]           |
| 3    | 7    | 6     | "ccc" | Write c, 3 | \["a", "2", "b", "2", "c", "3"] |

## Time and Space Complexity

* **Time:** O(n), where n is the length of `chars` — each character is processed once.
* **Space:** O(1), since we're modifying `chars` in-place using constant extra space.
