// 1        i=0
// 2 1      i=1
// 3 2 1    i=2
const triangle1 = (n) => {
    console.log('------------ Print number 1,12,123 pattern----------')
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=i; j>=0; j--) {
            pattern += j+1; 
        }

        console.log(pattern);
    }
}
triangle1(3);

// A        i=0
// B A      i=1
// C B A    i=2
const triangle2 = (n) => {
    console.log('------------ Print number 1,12,123 pattern----------');
    let charCode = 'A'.charCodeAt();
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=i; j>=0; j--) {
            pattern += String.fromCharCode(charCode+j) + ' '; 
        }

        console.log(pattern);
    }
}
triangle2(3);