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
    let result = ""; // using this string as stack
    for(let i=0; i< s.length; i++) {
        result += s[i];

        // if(result.slice(result.length-part.length, result.length) === part)
        // if(result.slice(-part.length) === part)
        if(result.endsWith(part)) { 
            result = result.slice(0, result.length-part.length);
        }
    }

    return result;
};

var removeOccurrences = function(s, part) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);

        if (stack.length >= part.length && 
            stack.slice(-part.length).join('') === part) { 
            stack.length -= part.length; // pop part.length elements
        }
    }

    return stack.join('');
};


export function run() {
    console.log('String after removing All Occurrences of a Substring:', removeOccurrences("daabcbaabcbc", "abc"));  // dab  
    console.log('------------------*------------*------------*---------------');

    console.log('String after removing All Occurrences of a Substring:', removeOccurrences("axxxxyyyyb", "xy"));  // ab    
    console.log('------------------*------------*------------*---------------');
}
