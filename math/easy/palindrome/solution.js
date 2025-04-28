const isPalindrome1 = (num) => {
    if(num <= 0 ){
        console.log('Negative numbers cannot be palindrome');
        return false;
    }
    let reverse = num.toString().split('').reverse();
    console.log('input:', num, ' , reverse number:', reverse.join(''));
    return reverse.join('') == num;
}

const isPalindrome2 = (num) => {
    let temp = num;
    let reverse = 0;

    while(temp > 0) {
        reverse = (reverse*10)+(temp%10);
        temp = Math.floor(temp/10);
    }
   return reverse == num;
}

// Performance: Noticeable for very large numbers 
const isPalindrome3 = (x) => {
    console.log('input:', x);
    if(x <= 0 || (x%10 == 0 && x !== 0)){
        console.log('If num is negative or ends with 0 (but is not 0), it is not a palindrome');
        return false;
    }

    let temp = x, reverse = 0;

    while(temp > reverse) {   
        reverse = (reverse*10) + (temp%10); // 0+1 // 10+2// 120 + 1
        temp = Math.floor(temp/10); // 12 //1 // 0
    }

    return temp == reverse || temp == Math.floor(reverse/10);
}

const isPalindrome = (num) => {
    if (num < 0) return false;

    let reverse = 0;

    for(let i = num; i >= 1; i = Math.floor(i/10)) {  // 12 //1 // 0
        reverse = (reverse*10) + (i%10); // 0+1 // 10+2// 120 + 1
    }
    console.log('input:', num, ', reversed value: ', reverse);
    return num == reverse;
}


// Run function to test examples
export const run = () => {
    console.log(isPalindrome(121));
    console.log('-----***----');
    console.log(isPalindrome(-121));
    console.log('-----***----');
    console.log(isPalindrome(10));
    console.log('-----***----');
};
