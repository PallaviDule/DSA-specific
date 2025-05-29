/**
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function(s) {
    return s.split(' ').filter(value => value !== '').reverse().join(' ');
};


var reverseWords1 = function(s) {
    s = s.split(' ').reverse();
    let result = '';

    for(let word of s){
        if(word.length === 0) continue;

        result += word + ' ';
    }

    return result.trim();
};

var reverseWords = function(s) {
    let i = s.length - 1;
    let result = '';

    while (i >= 0) {
        while (i >= 0 && s[i] === ' ') i--; // skip spaces
        let j = i;
        while (i >= 0 && s[i] !== ' ') i--; // find the word

        if (j >= 0) {
            result += s.substring(i + 1, j + 1) + ' ';
        }
    }

    return result.trim();
};


export const run = () => {
    console.log(reverseWords("the sky is blue")); // Output: blue is sky the 
    console.log("---------***----------")
    console.log(reverseWords("  hello world  ")); // Output: world hello : Your reversed string should not contain leading or trailing spaces.
    console.log("---------***----------")
    console.log(reverseWords("a good   example")); // Output: example good a : You need to reduce multiple spaces between two words to a single space in the reversed string.
    console.log("---------***----------")
};