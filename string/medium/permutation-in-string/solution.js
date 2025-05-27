/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// not exactly the sliding window solution
var checkInclusion1 = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let orginalFrequency = new Array(26).fill(0);

    for(let char of s1){
        index = char.charCodeAt(0)-'a'.charCodeAt(0); 
        orginalFrequency[index]++;
    }

    const sameFrequency = (orginalFrequency, windowFreq) => {
        for(let i=0; i<26; i++){
            if(orginalFrequency[i] !== windowFreq[i]){
                return false;
            }
        }
        return true;
    }

    let windowSize = s1.length;
    for(let i=0; i<s2.length; i++){
        let windowIndex = 0; let originalIndex = i;
        let windowFreq = new Array(26).fill(0);

        while(windowIndex < windowSize && originalIndex < s2.length) {
            windowFreq[s2[originalIndex].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            windowIndex++; originalIndex++; 
        }

        if(sameFrequency(orginalFrequency, windowFreq)) {
            return true;
        }  
    }

    return false;
};

var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    let s1Frequency = new Array(26).fill(0);
    let windowFrequency = new Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);

    for(let i=0; i <s1.length; i++){
        s1Frequency[s1[i].charCodeAt(0) - aCharCode]++;
        windowFrequency[s2[i].charCodeAt(0) - aCharCode]++;
    }

    const isSameFrq = (s1Frequency, windowFrequency) => {
        for(let i=0; i< 26; i++){ // s1 and s2 consist of lowercase English letters.
            if(s1Frequency[i] !== windowFrequency[i]) return false;
        }
        return true;
    }

    if(isSameFrq(s1Frequency, windowFrequency)) return true;

    for(let i= s1.length; i < s2.length; i++){
        windowFrequency[s2[i].charCodeAt(0) - aCharCode]++; // add new frequency
        windowFrequency[s2[i- s1.length].charCodeAt(0) - aCharCode]--; // remove old frequency

        if(isSameFrq(s1Frequency, windowFrequency)) return true;
    }

    return false;
}


export const run = () => {
    console.log(checkInclusion("ab", "eidbaooo")); // Output: true
    console.log("---------***----------")
    console.log(checkInclusion("ab", "eidboaoo")); // Output: false
    console.log("---------***----------")
};