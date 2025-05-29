function isArmstrong1(num) {
    console.log('Num:', num);
    const numStr = num.toString();
    const n = numStr.length;
    let sum = 0;

    for (let char of numStr) {
        let digit = Number(char);
        sum += Math.pow(digit, n);
    }

    return sum === num;
}

function isArmstrong(num) {
    console.log('Num:', num);
    const digits = num.toString();
    const n = digits.length;

    const result = digits.split('').reduce((acc, curr) =>  acc += Math.pow(curr, n), 0);

    return num === result;
}

const power = (temp, exponent) => {
    let num = 1;
    for(let i=0; i < exponent; i++){
        num *= temp;
    }
    return num;
}

const isArmstrong2 = (num) =>{
    console.log('Num:', num);
    let originalNumber = num;
    let sum =0;

    while(num > 0) {
        let temp = num%10;
        sum += power(temp, originalNumber.toString().length); // Math.pow(digit, n);

        num = Math.floor(num/10);
    }

    return sum === originalNumber;
}


export const run = () => {
    console.log(isArmstrong(153)); // true
    console.log("---------***----------");
    console.log(isArmstrong(9474)); // true
    console.log("---------***----------");
    console.log(isArmstrong(123)); // false
    console.log("---------***----------");
    console.log(isArmstrong(0)); // true
    console.log("---------***----------");
};