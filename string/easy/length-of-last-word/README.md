## 58. Length of Last Word

## Problem Statement  
Given a string `s` consisting of words and spaces, return the length of the last word in the string.  
A **word** is defined as a maximal substring consisting of **non-space** characters only.

## Input  
- `s`: a string that may contain letters and spaces  
**Constraints:**  
- 1 <= s.length <= 10⁴  
- `s` consists only of English letters (uppercase or lowercase) and spaces `' '`  
- There will be at least one word in `s`  

## Output  
- Return an integer: the length of the last word in the string.

## Approach  
### Tags: String Traversal, Two-Pointer  
There are two approaches to solving this problem effectively:

### Thought Process:
**Method 1: Trim & Split (Simple, but uses extra space)**  
- Remove trailing spaces with `trim()`  
- Split the string by space  
- Return the length of the last element in the array  
> ✅ Easy to implement, ❌ uses extra space for array

**Method 2: Traverse from End (Optimal)**  
- Start from the end of the string  
- Skip any trailing spaces  
- Then count the number of letters until the next space or start of string  
> ✅ In-place and space-efficient

### Pseudocode (Method 2: Optimal)
```
Initialize a pointer at the end of the string (index = s.length - 1)

While index >= 0 and character at index is a space:
    Decrement index
    // Skip trailing spaces

Initialize length = index

While length >= 0 and character at length is not a space:
    Decrement length
    // Count letters in the last word

Return index-length
```

## Walkthrough Example  
Input: `"   fly me   to   the moon  "`  
Initial: index = 28 (end of string)

- Step 1: Skip spaces → index = 26 (`'n'`)
- Step 2: Start counting →  
  `'n'` → length = 26 , length --
  `'o'` → length = 25 , length -- 
  `'o'` → length = 24 , length -- 
  `'m'` → length = 23  , length --
- Step 3: next is a space → stop  
Return 4 as index(26) - length(22) = 4

## Data Evolution  

| Step | index | char | Action               | length |
|------|-------|------|----------------------|--------|
| 1    | 28    | ' '  | skip trailing space  | -      |
| 2    | 27    | ' '  | skip trailing space  | -      |
| 3    | 26    | 'n'  | start counting       | 25     |
| 4    | 25    | 'o'  | count                | 24     |
| 5    | 24    | 'o'  | count                | 23     |
| 6    | 23    | 'm'  | count                | 23     |
| 7    | 22    | ' '  | stop                 | -      |

## Time and Space Complexity  
- **Time Complexity:** O(n), where n is the length of the string (worst case traverses entire string once)  
- **Space Complexity:** O(1), no additional space used (if done in-place without split)