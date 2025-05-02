## 14. Longest Common Prefix

## Problem Statement
Write a function to find the longest common prefix string amongst an array of strings.  
If there is no common prefix, return an empty string `""`.

## Input

- `strs.length` ranges from 1 to 200
- Each string in `strs` has length between 0 to 200
- All characters are lowercase English letters (if the string is non-empty)

## Output

- The longest common prefix string shared among all strings
- If none, return `""`

## Examples

Input: `["flower", "flow", "flight"]`  
Output: `"fl"`

Input: `["dog", "racecar", "car"]`  
Output: `""`  
Explanation: There is no common prefix among the input strings.

> Try solving it on your own before looking at the approach and solution.

## Approach

Instead of jumping into code, let’s understand what we're looking for:

- We want the **longest string prefix** that appears at the **start** of **every** string in the array.
- Prefix means characters from the start (not from anywhere in the string).
- We can use one string as a **reference** and **compare it character by character** with the rest.

**Thought process:**

- Start by assuming the whole first string is the prefix.
- For each string in the list, shorten the prefix from the end until that string starts with it.
- Stop as soon as the prefix becomes empty (no common part left).

We’re thinking in terms of:
- string trimming
- `startsWith` comparison
- progressive reduction of the prefix until it's common to all

## Walkthrough Example

Input: `["flower", "flow", "flight"]`

Start with:  
- prefix = `"flower"`

Check with second string `"flow"`:  
- `"flower"` vs `"flow"` → `"flower"` doesn't match → try `"flowe"` → still no → try `"flow"` → match

Now prefix = `"flow"`

Check with third string `"flight"`:  
- `"flight"` does not start with `"flow"` → try `"flo"` → no → try `"fl"` → yes

Final result: `"fl"`

## Data Evolution

| Step | Current String | Current Prefix | Starts With Prefix? | Action                  | Updated Prefix |
|------|----------------|----------------|----------------------|--------------------------|----------------|
| 1    | "flower"       | "flower"       | -                    | Initial assumption       | "flower"       |
| 2    | "flow"         | "flower"       | No                   | Trim → "flow"            | "flow"         |
| 3    | "flight"       | "flow"         | No                   | Trim → "flo" → "fl"      | "fl"           |

## Time and Space Complexity

- **Time Complexity:** O(n * m) — n = number of strings, m = average length of strings
- **Space Complexity:** O(1) — no extra space used except a few variables
