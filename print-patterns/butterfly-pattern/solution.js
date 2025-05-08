//            space
// *    *       4
// **  **       2
// ******       0
// ******       0
// **  **       2
// *    *       4


const butterflyPattern = (n) => {
    // for(let i=0; i<n; i++){
    //     let pattern = '';
    //     pattern += '*'.repeat(i + 1);            // Left stars
    //     pattern += ' '.repeat(2 * (n - i - 1));   // Middle spaces
    //     pattern += '*'.repeat(i + 1);            // Right stars
    //     console.log(pattern);
    // }
    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j = 0; j<=i; j++){
            pattern+= '*';
        }
        pattern += ' '.repeat(2*(n-i-1));  // for(let j=n-i-1; j>0; j--)
        for(let j = 0; j<=i; j++){
            pattern+= '*';
        }
        console.log(pattern);
    }

    // for(let i=0; i<n; i++){
    //     let pattern = '';
    //     pattern += '*'.repeat(n - i);         // Left stars
    //     pattern += ' '.repeat(2 * i));        // Middle spaces
    //     pattern += '*'.repeat(n-i);           // Right stars
    //     console.log(pattern);
    // }

    for(let i=0; i<n; i++){
        let pattern = '';
        for(let j=n-i; j>0; j--){
            pattern+= '*'
        }
        for(let j=0 ; j < i ; j++){
            pattern += ' ';
        }
        for(let j=i ; j >0 ; j--){
            pattern += ' ';
        }
        for(let j=n-i; j>0; j--){
            pattern+= '*'
        }
        console.log(pattern);
    }
}


butterflyPattern(3);