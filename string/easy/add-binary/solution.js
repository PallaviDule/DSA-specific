var addBinary = function(a, b) {
    console.log('------------------*--*---------------');
    console.log('Binary Digit1:', a, ', Digit2:', b);
    let lengthA = a.length-1, lengthB = b.length-1, carry=0;
    let result = ''; // before this, I had used array

    while(lengthA >=0 || lengthB >= 0 || carry) {
        let digitA = a[lengthA] ? parseInt(a[lengthA]) : 0; 
        let digitB = b[lengthB] ? parseInt(b[lengthB]) : 0; 

        let total = digitA + digitB + carry;
        result = total%2 + result;// result.push(total%2); // 3%2=1; 2%2=0; 1%2=1; 0%2=0
        carry = Math.floor(total/2); //3/2=1 ;2/2=1 ;1/2=0 ;0/2=0
        lengthA--;
        lengthB--;
    }

    return result; // result.reverse().join() with array we need this
};


export function run() {
    console.log('Result of Two Binary Addition :', addBinary("11", "1"));
    console.log('Result of Two Binary Addition :', addBinary("1010", "1011"))

}


// Why parseInt: parseInt() tries to convert the value to the last character that could be converted to an integer. 
// e.g. string = '10.6 objects'; 
// parseInt(string) 10 : The trailing whitespaces and characters are ignored as they are not valid. 
// Number(string) is Nan: The Number() method on the other hand just returns NaN. 

// string ='3.14':  parseInt()=3 only returns an integer value whereas Number()=3.14 returns all the digits including floating points. 
