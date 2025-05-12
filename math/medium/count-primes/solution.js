const countPrimes = (num) =>{
    let isPrime = new Array(num+1).fill(true); // [false, false, true, true,true,true,true,true,true, true] if num=9
    isPrime[0] = isPrime[1] = false;
    
    for(let i=2; i*i<=num; i++){ // 4<=num // 9<=num
        if(isPrime[i]){  //i=2 true //i=3 true
           for(let j=i*i; j<=num; j+=i){ 
                isPrime[j] = false; //i=2 [false, false, true, true,false,true,false,true,false, true]
            }
        }

    }

    console.log('result:', isPrime);
    return isPrime.map((num, index) => num ? index : -1).filter(num => num !== -1);
    //if needed count: isPrime.slice(2,num).filter(Boolean).length
}


export function run() {
    console.log('Prime Number Count till 17 :', countPrimes(17));
    console.log('Prime Number Count till 17 :', countPrimes(30));
    console.log('Prime Number Count till 17 :', countPrimes(2));
    console.log('Prime Number Count till 17 :', countPrimes(9));

}