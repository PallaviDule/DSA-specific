
const longestCommonPrefix = (stringArray) => {
    console.log('String Array:', stringArray);

    if(!stringArray) return '';
    
    let prefix = stringArray[0];

    for(let i = 1; i<stringArray.length; i++){
        while(stringArray[i].indexOf(prefix) !== 0){ // while(stringArray[i] !== prefix) then remove last prefix char;;
            prefix = prefix.slice(0, -1);

            if(!prefix) return '';
        }
    }
    return prefix;
}

export function run() {
    console.log('Prefix: ', longestCommonPrefix(["flower", "flow", "flight"])); // fl
    console.log('------------------*------------*------------*---------------');
    console.log('Preifx:', longestCommonPrefix(["dog", "racecar", "car"])); // ""
  }