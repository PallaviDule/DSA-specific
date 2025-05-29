function compress1(chars) {
    console.log('Input chars:', chars);
    if (chars.length === 1) return chars.length;

    let valueToPut = 0;

    for (let i = 0; i < chars.length; i++) {
        let count = 0;
        let value = chars[i];

        while (i < chars.length && value === chars[i]) {
            count++;
            i++;
        }

        chars[valueToPut++] = value;

        if (count > 1) {
            let countChars = count.toString().split('');
            for (let j = 0; j < countChars.length; j++) {
                chars[valueToPut++] = countChars[j];
            }
        }

        i--; // adjust for the outer loop increment
    }

    return valueToPut;
}

var compress = function(chars) {
    let writer = 0;
    let reader = 0;

    while(reader < chars.length){
        let count = 0;
        let value =  chars[reader];
        // Count how many times the currentChar repeats consecutively
        while(reader < chars.length && value === chars[reader]){
            count++;
            reader++;
        }
         // Write the character
        chars[writer++]= value;

        // Write the count if more than 1
        if(count > 1) {
            let currentCount = count.toString();
            for(let c of currentCount){
                chars[writer++] = c;
            }
        }
    }

    return writer;
};

export function run() {
    let chars1 = ["a","a","b","b","c","c","c"];
    let len1 = compress(chars1);
    console.log(chars1.slice(0, len1)); // ["a","2","b","2","c","3"]
    console.log("---------***----------"); 

    let chars2 = ["a"];
    let len2 = compress(chars2);
    console.log(chars2.slice(0, len2)); // ["a"]

    console.log("---------***----------");
    let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
    let len3 = compress(chars3);
    console.log(chars3.slice(0, len3)); // ["a","b","1","2"]
}
