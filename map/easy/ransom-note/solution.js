/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
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
