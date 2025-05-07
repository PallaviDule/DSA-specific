//                  n=3     space       number     number to print
//     1            i=0       2           1       
//   1 2 1          i=1       1           2/1  
// 1 2 3 2 1        i=2       0           3/1
const pyramid1 = (n) => {
    console.log('------------ Print number 1, 121, 12321 pattern----------');
    for(let i=0; i<n; i++){
        let pattern = '';
       //  pattern += ' '.repeat(n - i - 1); cleaner way to show the spaces
        for(let j=n-i-1; j>0; j--) { 
            pattern += ' '; 
        }
        for(let j=1 ; j<=i+1 ; j++){
            pattern += j;
        }
        for(let j=i ; j>0 ; j--){
            pattern += j;
        }
        console.log(pattern);
    }
}
pyramid1(3);