/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences1 = function(s, part) {
    while(s.includes(part)){
        s = s.replace(part, '');
    }

    return s;
};

var removeOccurrences = function(s, part) {
    let result = "";
    for(let i=0; i< s.length; i++) {
        result += s[i];

        if(result.endsWith(part)) {
            result = result.slice(0, result.length-part.length);
        }
    }

    return result;
};

export function run() {
    console.log('String after removing All Occurrences of a Substring:', removeOccurrences("daabcbaabcbc", "abc"));  // dab  
    console.log('------------------*------------*------------*---------------');

    console.log('String after removing All Occurrences of a Substring:', removeOccurrences("axxxxyyyyb", "xy"));  // ab    
    console.log('------------------*------------*------------*---------------');
}
