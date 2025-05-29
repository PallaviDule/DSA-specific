
function isArmstrong(num) {
    const numStr = num.toString();
    const n = numStr.length;
    let sum = 0;

    for (let char of numStr) {
        let digit = Number(char);
        sum += Math.pow(digit, n);
    }

    return sum === num;
}