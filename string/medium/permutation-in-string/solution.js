/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// not exactly the sliding window solution
var checkInclusion = function(s1, s2) {
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