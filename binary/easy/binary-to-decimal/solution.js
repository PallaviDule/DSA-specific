const binaryToDecimal = (num) => {
    console.log('Num:', num); // 45
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


//  1        0       1       1       0       1
// 2^5=32  2^4=16   2^3=8   2^2=4  2^1=2   2^0=1 
