/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct1 = function(ransomNote, magazine) {
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

var canConstruct = function(ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    }
    return ransomNote.length === 0;
};

var canConstruct2 = function(ransomNote, magazine) {
    const magazineMap = new Map();

    // Count each character in magazine
    for (let char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }

    // Check each character in ransomNote
    for (let char of ransomNote) {
        if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
            return false; // Character not available enough times
        }
        magazineMap.set(char, magazineMap.get(char) - 1); // Use one occurrence
    }

    return true;
};

// Run function to test examples
export const run = () => {
    console.log("[Test Case 1] input: a b");
    console.log(canConstruct("a", "b")); // Output: false
    console.log("---------***----------")
    console.log("[Test Case 2] input: aa ab");
    console.log(canConstruct("aa", "ab")); // Output: false
    console.log("---------***----------")
    console.log("[Test Case 3] input: aa aab");
    console.log(canConstruct("aa", "aab")); // Output: true
    console.log("---------***----------")
};
