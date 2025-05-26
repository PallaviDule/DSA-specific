/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function(s) {
    let newString = s.toLowerCase().trim();

    if(newString.length === 0) return true;

    let start =0;
    let end = newString.length-1;

    const isAlphanumeric = (char) => {
        if((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z')) return true;

        return false;
    }

    while(start < end){
        if(!isAlphanumeric(newString[start])) {
            start++;
        }else if(!isAlphanumeric(newString[end])){
            end--;
        } else if(newString[start] !== newString[end]){
            return false;
        } else {
            start++;
            end--;
        }
    }

    return true;  
};

var isPalindrome2 = function(s) {
    let newString = s.toLowerCase().trim();

    if(newString.length === 0) return true;

    let start =0;
    let end = newString.length-1;

    const isAlphanumeric = (char) => {
        // simple : /[a-z0-9]/.test(char)
        if((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z')) return true;

        return false;
    }

    while(start < end){
        while( start < end && !isAlphanumeric(newString[start])) {
            start++;
        }
        
        while(start < end && !isAlphanumeric(newString[end])){
            end--;
        } 
        
        if(newString[start] !== newString[end]){
            return false;
        }

        // this condition reaches if char[start] === char[end]
        start++;
        end--;
    }

    return true;
};

var isPalindrome3 = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let start=0, end=s.length-1;

    while(start<end) {
        if(s[start]!==s[end]) return false
        
        start++;
        end--
    }
    return true
};

// If you want to meet the O(1) extra space requirement (as mentioned in the LeetCode follow-up), 
// then you should not create a new string using .replace() or .toLowerCase() on the entire input.
// Optimized - no extra space 
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;

    const isAlphanumeric = (char) => {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    };

    while (start < end) {
        while (start < end && !isAlphanumeric(s[start])) start++;
        while (start < end && !isAlphanumeric(s[end])) end--;

        if (start < end && s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};



export function run() {
    console.log('Is Palindrome:', isPalindrome("A man, a plan, a canal: Panama"));     
    console.log('------------------*------------*------------*---------------');

    console.log('Is Palindrome:', isPalindrome("race a car"));     
    console.log('------------------*------------*------------*---------------');

    console.log('Is Palindrome:', isPalindrome(" "));     
    console.log('------------------*------------*------------*---------------');


}
