const swapNumber1 = (a,b) => {
        console.log('Input values - a:', a, ', b:', b);
    a= a+b;
    b = a-b;
    a=a-b;

    return [a,b];
}

const swapNumber = (a,b) => {
    console.log('Input values - a:', a, ', b:', b);
    a= a^b;
    b = a^b;
    a=a^b;

    return [a,b];
}


export function run(){
    console.log('Sum is:', swapNumber(3,2) );
    console.log('-------------------------------------------------------------------');
    console.log('Sum is:', swapNumber(4,10));
    console.log('-------------------------------------------------------------------');
}
