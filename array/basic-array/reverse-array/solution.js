// basic math
const reverseArray1 = (num) => {
    let start=0
    let end = num.length-1;

    while(start < end) {
        [num[start], num[end]] = [num[end], num[start]]
        start++;
        end--;
    }

    return num;
}

// basic math: using for loop two pointer
const reverseArray = (num) => {
    for(let i=0; i< Math.floor(num.length/2); i++) {
        let tmp = num[i];
        num[i] = num[num.length-1-i];
        num[num.length-1-i] = tmp;
    }

    return num;
}

export function run () {
    console.log('Reversed Array:', reverseArray([1,2,3,4,5]));
    console.log('-----------------------------------');
    console.log('Reversed Array:',reverseArray([5,4,3,2,1,0]));
    console.log('-----------------------------------');
}