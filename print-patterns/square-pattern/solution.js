// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
const print = (n) => {
    for(let i=0; i<n; i++){
        let printPattern = '';

        for(let j=0; j<n; j++) {
            printPattern = printPattern + ' ' + (j+1);
        }
        console.log(printPattern);
    }
};

print(5);

// for pattern :
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5
const print2 = (n) => {
    console.log('-----Print i for nth times in n rows ----')
    for(let i=0; i<n; i++){
        let printPattern = '';
        for(let j=0; j<n; j++) {
            printPattern = printPattern + ' ' + (i+1);
        }
        console.log(printPattern);
    }
};
print2(3);

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
const print3 = (n) => {
    console.log('-----Print * for n*n----');
    for(let i=0; i<n; i++){
        let printPattern = '';
        for(let j=0; j<n; j++) {
            printPattern = printPattern + ' *';
        }
        console.log(printPattern);
    }
};

print3(3);

const print4 = (n) => {
    console.log('-----Print Square n*n with values i----');
    let num = 1;
    for(let i=0; i<n; i++){
        let row = []
        for(let j=0; j<n; j++) {
            row.push(num++);
        }
        console.log(row.join(' '));
    }
};

print4(3);