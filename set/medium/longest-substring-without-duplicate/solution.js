var lengthOfLongestSubstring = function(s) {
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


// Longest Substring Without Repeating Characters

export function run() {
    const input = "abcabcbb";
    console.log('input:', input, ', output:', lengthOfLongestSubstring(input)); // Output: 3
}




