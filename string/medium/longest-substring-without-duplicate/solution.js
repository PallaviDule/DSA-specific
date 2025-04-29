var lengthOfLongestSubstring1 = function(s) {
    let arr = [];
    let lastString;

    for(let value of s.split('')){
        if(arr.includes(value)) {
            lastString = lastString?.length > arr.join('').length ? lastString : arr.join('');
            arr = [];
        }
        arr.push(value);
    }

    return lastString.length;
};

var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let maxLength = 0;

    for(let value of s.split('')){
        while(arr.includes(value)) {
            arr.shift(); // in case first element in the array is duplicate, so it should remove that only not whole array
        }
        arr.push(value);
        maxLength = Math.max(maxLength, arr.join('').length);
    }

    return maxLength;
};


// Longest Substring Without Repeating Characters

export function run() {
    const input = "abcabcbb";
    console.log('input:', input, ', output:', lengthOfLongestSubstring(input)); // Output: 3
}
