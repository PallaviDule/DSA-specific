
const getSumOfDigits = (num) => {
    console.log('------------------');
    console.log('Number:', num);
    let sum=0

    while(num>0) {
        sum += (num%10);
        num = Math.floor(num/10);
    }
    return sum;
}


export function run() {
    console.log('Sum of digits', getSumOfDigits(12345));
    console.log('Sum of digits', getSumOfDigits(145));
    console.log('Sum of digits', getSumOfDigits(10));
}