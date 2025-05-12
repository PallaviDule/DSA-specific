// brute
const isPrimeNumber = (num) =>{
    if(num<1) return false;

    for(let i=2; i<num; i++){
        if(num%i === 0) {
            return false;
        }
    }

    return true;
}

// 
const isPrimeNumber1 = (num) =>{
    for(let i=2; i*i<=num; i++){
        if(num%i === 0) {
            return false;
        }
    }

    return true;
}


export function run() {
    console.log('Is 17 a Prime number:', isPrimeNumber(17));
    console.log('Is 12 a Prime number:', isPrimeNumber(12));
    console.log('Is 2 a Prime number:', isPrimeNumber(2));
    console.log('Is 9 a Prime number:', isPrimeNumber(9));

}