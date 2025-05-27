/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').filter(value => value !== '').reverse().join(' ');
};



export const run = () => {
    console.log(reverseWords("the sky is blue")); // Output: blue is sky the 
    console.log("---------***----------")
    console.log(reverseWords("  hello world  ")); // Output: world hello : Your reversed string should not contain leading or trailing spaces.
    console.log("---------***----------")
    console.log(reverseWords("a good   example")); // Output: example good a : You need to reduce multiple spaces between two words to a single space in the reversed string.
    console.log("---------***----------")
};