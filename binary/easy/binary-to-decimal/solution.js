const binaryToDecimal = (num) => {
    console.log('Num:', num); // 42
    let power=1; // 2power0;
    let result=0;

    while(num>0){
        let remainder = Math.floor(num%10); 
        let quotient = Math.floor(num/10); 
    
        result += remainder*power;
        power*=2;
        num=quotient;
    }

    return result;
}


export function run(){
    console.log('Binary to Decimal:', binaryToDecimal(101101));
    console.log('------------------------------------------');
    console.log('Binary to Decimal:', binaryToDecimal(1000));
    console.log('------------------------------------------');
}