# 383. Ransom Note

## Problem Statement
Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine`, and `false` otherwise.

Each letter in `magazine` **can only be used once** in `ransomNote`.

## Input
- Two strings: `ransomNote` and `magazine`.
- **Constraints**:
  - `1 <= ransomNote.length, magazine.length <= 10⁵`
  - `ransomNote` and `magazine` consist of only lowercase English letters.

## Output
- Return `true` if it is possible to construct `ransomNote` from `magazine`.
- Otherwise, return `false`.

### Example 1
```text
Input: ransomNote = "a", magazine = "b"
Output: false
```

### Example 2
```text
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

### Example 3
```text
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

## Encouragement Before You Peek 👀
✨ **Try solving the problem yourself first. Then, revisit this section to check the approach and solution in the respective file.**

## Approach
Solution is [Here](./solution.js)

1. **Count characters** in the `magazine` using a frequency map.
2. **Loop through each character** in `ransomNote`:
   - Check if the character exists in the magazine's frequency map.
   - If it does and count is positive ➔ Decrease the count.
   - If not ➔ Return `false`.
3. After looping all characters ➔ Return `true`.

✅ We ensure every letter from `ransomNote` is available in `magazine` **without reusing any letter**.


## Walkthrough Example 🚀

Let's dry-run for:

```text
ransomNote = "aa", magazine = "aab"
```

| Step | Character from ransomNote | Magazine Map State        | Action |
|-----|---------------------------|----------------------------|--------|
| 0   | Initialize                 | `{a:2, b:1}`                | Count frequencies of magazine |
| 1   | 'a'                        | 'a' count = 2 > 0           | Use one 'a' ➔ decrement count (now 1) |
| 2   | 'a'                        | 'a' count = 1 > 0           | Use one 'a' ➔ decrement count (now 0) |

All characters of `ransomNote` matched successfully ➔  
✅ Return `true`.

## Time and Space Complexity

| Complexity | Details |
|------------|---------|
| **Time**   | O(m + n) - where `m` = length of `ransomNote`, `n` = length of `magazine` |
| **Space**  | O(1) - because only lowercase letters (26 characters) are stored |

## Alternative Approaches

### 1. Frequency Array (Optimized for a–z Characters)
- only for lowercase string
- Use a 26-length array instead of a Map.
- Directly index characters using ASCII values.
- **Fastest and most memory-efficient**.

```javascript
var canConstruct = function(ransomNote, magazine) {
    const counts = Array(26).fill(0);
    for (let char of magazine) {
        // charCodeAt(): This method returns the Unicode code point (numeric representation) of the character at the specified position in the string.
        counts[char.charCodeAt(0) - 97]++; // for a: 97, b: 98, c:99 .....
        //  for char a: char.charCodeAt(0) = 97; counts[97-97] which is counts[0]++ : 0++; counts = [1, 0, 0]
    }
    for (let char of ransomNote) {
        if (--counts[char.charCodeAt(0) - 97] < 0) return false;
    }
    return true;
};
```

### 2. Using `split`, `every`, and `splice`

- Convert `magazine` into an array.
- For each character in `ransomNote`, `indexOf` and `splice` if found.
- **Readable but inefficient for large inputs**.

```javascript
var canConstruct = function(ransomNote, magazine) {
    const letters = magazine.split('');
    return ransomNote.split('').every((char) => {
        const index = letters.indexOf(char);
        if (index !== -1) {
            letters.splice(index, 1);
            return true;
        }
        return false;
    });
};
```

### 3. Using `replace` Method

- Iterate magazine and remove first match from `ransomNote`.
- If `ransomNote` becomes empty ➔ return `true`.
- **Very slow for big inputs** (creates a new string every time).

```javascript
var canConstruct = function(ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    }
    return ransomNote.length === 0;
};
```

## Approach Comparison

| Approach                      | Time Complexity | Space Complexity | Suitable For            | Scalability | Readability |
|-------------------------------|-----------------|------------------|--------------------------|-------------|-------------|
| **Hash Map**                   | O(m + n)         | O(1)             | Best for all inputs      | ✅          | ✅          |
| **Frequency Array**            | O(m + n)         | O(1)             | Best for lowercase a–z   | ✅          | ➖ (ASCII math) |
| `split` + `every` + `splice`   | O(m × n)         | O(n)             | Small inputs only        | ❌          | ✅          |
| `replace` Method               | O(m × n)         | O(n)             | Very small inputs        | ❌          | ✅          |


### Final Recommendation:
- **Production / Big Test Cases ➔ Hash Map or Frequency Array.**
- **Small Practice Problems ➔ split/splice or replace can be fun to explore.**