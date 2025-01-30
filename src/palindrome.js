// var isPalindrome = function(x) {
//     let newString = x.toString();
//     for(var i = 0; i< newString.length/2; i++){
//         if(newString[i] != newString[newString.length-i-1]) {
//             return false;
//         } 
//     }
//     return true;
// };
// var isPalindrome = function(x) {
//     let newString = x.toString().split('').reverse();
//     console.log('newString.join():', newString.join(''));
//     return newString.join('') == x;
// };
// var isPalindrome = function(x) {
//     let temp = x;
//     let reverse = 0;
//     while(temp > 0) {
//         reverse = (reverse*10) + (temp%10); // 0+1 // 10+2// 120 + 1
//         temp = Math.floor(temp/10); // 12 //1 // 0
//     }
//     return x === reverse;
// };
var isPalindrome = function(x) {
    let reverse = 0;
    for (let i = x; i>=1; i=Math.floor(i/10))
    {
        reverse = reverse*10 + i%10
    }
    return reverse === x;
};

isPalindrome(121);
isPalindrome(1331);
isPalindrome(12321);
isPalindrome(1212);
isPalindrome(1231);

