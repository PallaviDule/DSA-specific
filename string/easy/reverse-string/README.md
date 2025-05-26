# 344. Reverse String

## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must reverse the characters **in-place**, using **O(1)** extra memory.

## Input

* `s`: an array of characters
* Constraints:

  * `1 <= s.length <= 10⁵`
  * `s[i]` is a printable ASCII character

## Output

* Reverse the array `s` in-place (i.e., modify the original array so that its characters are in reverse order)

## Examples

**Example 1**
Input: `["h","e","l","l","o"]`
Output: `["o","l","l","e","h"]`

**Example 2**
Input: `["H","a","n","n","a","h"]`
Output: `["h","a","n","n","a","H"]`

### Encouragement Before You Peek 👀

Try using the **two-pointer technique** to solve this with O(1) space. Think about swapping characters from both ends!

## Intuition

The first and last characters need to swap, then the second and second-last, and so on. We can use a **two-pointer** approach: one pointer starts at the beginning, the other at the end, and we swap characters while moving both pointers toward the center.

## Approach

### Tags: Two-Pointer, In-Place Array Manipulation

### Pseudocode

```
start ← 0  
end ← s.length - 1  

while start < end:  
    swap s[start] and s[end]  
    increment start  
    decrement end  
```

## Walkthrough Example

Input: `["h", "e", "l", "l", "o"]`
Initial: start = 0, end = 4

* swap s\[0] and s\[4] → `["o", "e", "l", "l", "h"]`
* swap s\[1] and s\[3] → `["o", "l", "l", "e", "h"]`
* stop when start >= end

Result: `["o", "l", "l", "e", "h"]`

## Data Evolution

| Step | start | end | Swap | Array                      |
| ---- | ----- | --- | ---- | -------------------------- |
| 1    | 0     | 4   | y    | \["o", "e", "l", "l", "h"] |
| 2    | 1     | 3   | y    | \["o", "l", "l", "e", "h"] |
| 3    | 2     | 2   | n    | (Pointers met)             |

## Time and Space Complexity

* **Time:** O(n), where n is the number of characters in the array. We make n/2 swaps.
* **Space:** O(1), no extra space used; we only modify the original array.
