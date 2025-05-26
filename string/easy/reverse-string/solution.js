/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString1 = function(s) { 
    return s.reverse()
}

var reverseString = function(s) {
    console.log('Input String:', s);
    // Initialize two pointers: one at the beginning, one at the end
    let start = 0;
    let end = s.length - 1;

    // Continue swapping until the pointers meet or cross
    while (start < end) {
        // Swap characters at start and end
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        // Move both pointers toward the center
        start++;
        end--;
    }

    // No return needed as the array is modified in-place
};

export function run() {
    const input = ["h", "e", "l", "l", "o"];
    reverseString(input);
    console.log('Reversed String:', input); // Output: ["o", "l", "l", "e", "h"]
}
