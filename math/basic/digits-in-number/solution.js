const getDigitsInNumber = (num) => {
    let sum = 0;
    let multiply = 1;
    let count = 0;
    console.log('Count of digits:', Math.floor(Math.log10(num)) + 1); 
    while(num > 0) {
        let temp = num % 10; // 1234%10= 123
        num = Math.floor(num/10);

        sum += temp;
        multiply *= temp;
        console.log("Digits in number", temp);
        count ++;
    }

    console.log('Sum of digits:', sum);
    console.log('Multiply of digits:', multiply);
}

export function run(){
    getDigitsInNumber(1234);
}