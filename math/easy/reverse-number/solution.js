// Note: Recursive solutions are less efficient and risk stack overflow for large numbers.
const reverseNumber1 = (num, reverse=0) => {
    console.log('Input number:', num);
    if(num===0) return reverse;

    return reverseNumber1(Math.floor(num/10), (reverse*10)+ (num%10))
}

// String Approach: Convert number to string, reverse the string, then convert back.
const reverseNumber2 = (num) => {
    console.log('Input number:', num);
    return  parseInt(num.toString().split('').reverse().join(''), 10);;

}

// basic math
const reverseNumber = (num) => {
    console.log('Input number:', num);
    let reverse=0;

    while(num>0) {
        let lastDigit = num%10; 

        reverse =  (reverse*10)+ lastDigit;
        num = Math.floor(num/10);
    }

    return reverse;
}

export function run () {
    console.log('Reversed number:', reverseNumber(145)); //541
    console.log('-----------------------------------');
    console.log('Reversed number:',reverseNumber(10)); //1
    console.log('-----------------------------------');
}