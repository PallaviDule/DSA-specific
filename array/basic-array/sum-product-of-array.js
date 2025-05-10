// basic math: using for loop
const sumAndProduct = (num) => {
    console.log('Input array:', num);

    let sum=0;
    let product = 1;

    for(let i=0; i< num.length; i++) {
        sum += num[i];
        product *= num[i]

    }

    return [sum , product];
}

export function run () {
    console.log('Sum and Product of array:', sumAndProduct([1,2,3,4,5]));
    console.log('-----------------------------------');
    console.log('Sum and Product of array:',sumAndProduct([5,4,3,2,1]));
    console.log('-----------------------------------');
    console.log('Sum and Product of array:',sumAndProduct([5,4,3,2,1,0]));
    console.log('-----------------------------------');
}