var strStr = function(haystack, needle) {
    console.log('----------------+++---------------');
    console.log('Input haystack:',haystack, ', and needle:', needle);
    let i = 0;
    for (let j = 0; j<= (haystack.length - needle.length); j++){ // it atleast saves last few iteration of - needle.length
        if(haystack.slice(j, j+needle.length) === needle) {
           return j;
        }
    }
    return -1;
}

export function run() {
    console.log('The index of the first occurrence of needle in haystack', strStr("sadbutsad", 'sad'));
    console.log('The index of the first occurrence of needle in haystack', strStr("butsad", 'sad'));
    console.log('The index of the first occurrence of needle in haystack', strStr("leetcode", "leeto"));
    console.log('The index of the first occurrence of needle in haystack', strStr("a", "a"));
    console.log('The index of the first occurrence of needle in haystack', strStr("sad", ""));
}