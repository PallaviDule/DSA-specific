Here is the **README** in your preferred clean format for:

---

## 28. Find the Index of the First Occurrence in a String

## Problem Statement  
Given two strings `needle` and `haystack`, return the index of the **first occurrence** of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

## Input  
- `haystack`: a string of lowercase English letters  
- `needle`: a string of lowercase English letters  
- `1 <= haystack.length, needle.length <= 10⁴`

## Output  
- An integer representing the index of the first occurrence of `needle` in `haystack`  
- Return `-1` if `needle` is not found

## Examples  

### Example 1  
**Input:** `haystack = "sadbutsad"`, `needle = "sad"`  
**Output:** `0`  
**Explanation:** `"sad"` appears at index `0` and again at `6`, but we return the **first** occurrence.

### Example 2  
**Input:** `haystack = "leetcode"`, `needle = "leeto"`  
**Output:** `-1`  
**Explanation:** `"leeto"` is not found in `"leetcode"`.

## Approach  
We slide a window over the `haystack` string and check if a substring of length equal to `needle` matches `needle`.  
If a match is found, we return the starting index.  
If the end of the haystack is reached without a match, return `-1`.

## 📌 Pseudocode  
```
If needle or haystack is an empty string:
    Return 0

Loop through the haystack from index 0 to haystack.length - needle.length: (both of the them can have same value)
    // This range ensures the needle fits in the remaining part of haystack

    Extract a substring of haystack starting at current index with length equal to needle
    If this substring equals needle:
        Return current index
        // Found the first occurrence, so return the position

If loop ends and no match was found:
    Return -1
    // Needle does not exist in haystack
```

## Walkthrough Example  
**Input:** `haystack = "sadbutsad"`, `needle = "sad"`

| Index | haystack substring | Matches needle? | Action       |
|-------|--------------------|------------------|--------------|
| 0     | "sad"              | ✅ Yes           | Return 0     |
| 1     | "adb"              | ❌ No            | Continue     |
| ...   | ...                | ...              |              |

**Output:** `0`

## Time and Space Complexity  
- **Time:** O((n - m + 1) × m), where `n` is the length of `haystack`, and `m` is the length of `needle`  
- **Space:** O(1) — constant extra space used  


### Why Slice() over substring()
Both `slice()` and `substring()` can be used to extract parts of a string in JavaScript, but here’s **why `slice()` is generally preferred** in this case:

| Aspect                | `slice(start, end)`                  | `substring(start, end)`            |
|-----------------------|--------------------------------------|-------------------------------------|
| Handles negative indices | ✅ Yes (counts from end)              | ❌ No (treats negative as `0`)       |
| Swaps indices if start > end | ❌ No (returns empty string)        | ✅ Yes (swaps start and end)         |
| More predictable in bounds | ✅ Often preferred for slicing     | 🔄 Behaves differently with order    |
