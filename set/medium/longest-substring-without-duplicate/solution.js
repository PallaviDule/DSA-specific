var lengthOfLongestSubstring1 = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for(let value of s){
        while(set.has(value)) {
            set.delete(s[left]); 
            left++;
        }
        set.add(value);
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
};

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])) { // s[4] = a
            set.delete(s[left]); // s[0] = a;
            left++;
        }
        set.add(value);
        maxLength = Math.max(maxLength, right - left + 1); // 4-0+1; // here +1 because we do left++;
    }
    return maxLength;
};


// Longest Substring Without Repeating Characters
export function run() {
    const input = "abcabcbb";
    console.log('input:', input, ', output:', lengthOfLongestSubstring(input)); // Output: 3
}




