/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     let stringArray = s.trim().split(' ');
//     console.log('String Array:', stringArray);
//     return stringArray[stringArray.length-1].length;
// };

var lengthOfLastWord = function(s) {
    console.log('------------------*--*---------------');
    console.log('String:', s);
    let lastIndex = s.length-1;
 
    while(lastIndex >= 0 && s[lastIndex] === ' '){ // trim trailing space;
     lastIndex--;
    }
 
    if(lastIndex < 0) return 0;
 
    let firstIndex = lastIndex;
    // console.log('last Index:', firstIndex, ', s[firstIndex]:', s[firstIndex]);
 
    while(firstIndex >= 0 && s[firstIndex] !== ' ') {
         // console.log('First Index:', firstIndex, ', s[firstIndex]:', s[firstIndex]);
         firstIndex--;
    } 
 
     return lastIndex - firstIndex;
 };


 export function run() {
     console.log('lengthOfLastWord: ', lengthOfLastWord("Hello World")); // 4
     console.log('lengthOfLastWord:', lengthOfLastWord("   fly me   to   the moon  ")); // 4
     console.log('lengthOfLastWord:', lengthOfLastWord("luffy is still joyboy")); // 6
   }