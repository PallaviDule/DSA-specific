// *
// * *
// * * *
const triangle1 = (n) => {
    console.log('------------ Print * pattern----------')
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=0; j<=i; j++) {
            pattern += ' *' 
        }

        console.log(pattern);
    }
}
triangle1(3);

// 1
// 22
// 333
const triangle2 = (n) => {
    console.log('------------ Print number 1,22,333 pattern----------')
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=0; j<=i; j++) {
            pattern += i+1; 
        }

        console.log(pattern);
    }
}
triangle2(3);

// 1
// 12
// 123
const triangle3 = (n) => {
    console.log('------------ Print number 1,12,123 pattern----------')
    for(let i=0; i<=n; i++){
        let pattern = '';
        for(let j=0; j<=i; j++) {
            pattern += j+1; 
        }

        console.log(pattern);
    }
}
triangle3(3);

// A
// A B
// A B C
// A B C D
// let charCode = 65;  // 'A'.charCodeAt(0); = 65
const triangle4 = (n) => {    
    console.log('------------ Print number A,AB,ABC pattern----------')
    for(let i=0; i<n; i++){
        let pattern = ''; 
        let charCode = 65;
        for(let j=0; j<=i; j++) {
            pattern += String.fromCharCode(charCode++) + ' '; 
        }

        console.log(pattern);
    }
}
triangle4(3);

const triangle5 = (n) => {    
    let charCode = 65;
    console.log('------------ Print number A,BC,DEF pattern----------')
    for(let i=0; i<n; i++){
        let pattern = ''; 
        for(let j=0; j<=i; j++) {
            pattern += String.fromCharCode(charCode++) + ' '; 
        }

        console.log(pattern);
    }
}
triangle5(3);
