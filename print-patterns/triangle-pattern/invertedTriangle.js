//                    space    number     number to print
// 1 1 1    i=0         0(i)    3(n-i)    1 (i+1)
//   2 2    i=1         1(i)    2(n-i)    2 (i+1)
//     3    i=2         2(i)    1(n-i)    3 (i+1)       
const triangle1 = (n) => {
    console.log('------------ Print number 111, 22,  3 pattern----------')
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=0; j<=i; j++) {
            pattern += ' '; 
        }

        for(let j=n-i ; j>0 ; j--){
            pattern += (i+1);
        }
        console.log(pattern);
    }
}
triangle1(3);


//                    space    number     number to print
// A A A    i=0         0(i)    3(n-i)    1 (i+1)
//   B B    i=1         1(i)    2(n-i)    2 (i+1)
//     C    i=2         2(i)    1(n-i)    3 (i+1)       
const triangle2 = (n) => {
    console.log('------------ Print number 111, 22,  3 pattern----------');
    let charCode = 'A'.charCodeAt();
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=0; j<=i; j++) {
            pattern += ' '; 
        }
        
        let printChar = String.fromCharCode(charCode+i);
        for(let j=n-i ; j>0 ; j--){
            pattern += printChar;
        }
        console.log(pattern);
    }
}
triangle2(3);