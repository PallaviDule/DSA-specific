/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    console.log('Input string:', s);
    let newString = s.toLowerCase().trim();

    if(newString.length === 0) return true;

    let start =0;
    let end = newString.length-1;

    const isAlphanumeric = (char) => {
        if((char >= 0 && char <= 9) || (char >= 'a' || char <= 'z')) return false;

        return true;
    }

    while(start < end){
        if(isAlphanumeric(newString[start])) {
            start++;
        }else if(isAlphanumeric(newString[end])){
            end--;
        } else if(newString[start] != newString[end]){
            return false;
        } else {
            start++;
            end++;
        }
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
