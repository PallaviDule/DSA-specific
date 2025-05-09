// basic
const decimalToBinary1 = (num) => {
    console.log('Num:', num);
    let result='';

    while(num>0){
        let remainder = Math.floor(num%2);
        let quotient = Math.floor(num/2);
        result = remainder+result;
        num = quotient;
    }
    return result;
}
// binary number goes from bottom to top (reverse order), so we cannot just continue to add in sum;
    const decimalToBinary = (num) =>{
        console.log('Num:', num); // 42
        let result=0;
        let power=1; // 10power0

        while(num>0){ //42 //21 // 10
            let remainder = num%2; // 0 ; 1; 1; 
            let quotient = Math.floor(num/2); // 21 ; 10;
            console.log('remainder:', remainder);
            result += remainder*power; // 0+0*1=0  ; 0+1*10=10; 10+(1*100)
            power *=10; // 10 //100
            num = quotient;
        }
        return result;
    }

    export function run() {
        console.log('Decimal to Binary:', decimalToBinary(42));
        console.log('------------------------------------------');
        console.log('Decimal to Binary:', decimalToBinary(8));
        console.log('------------------------------------------');
    }