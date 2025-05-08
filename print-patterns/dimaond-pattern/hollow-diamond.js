//                  n=3     space       number     number to print
//      *
//    *   *
//  *       *
//    *   *
//      *
const pyramid1 = (n) => {
    console.log('------------ Print number 1, 121, 12321 pattern----------');
    for(let i=0; i<n; i++){
        let pattern = '';
        pattern += ' '.repeat(n-i-1);

        pattern += '*';
        if(i!== 0){
            pattern += ' '.repeat(2*i-1);
            pattern += '*';
        }
 
        console.log(pattern);
    }

    for(let i=0; i<n-1; i++){  // i< 2
        let pattern = '';
        pattern = ' '.repeat(i+1)+'*';

        if(i !== n-2){    // 0 to 2 is last thus n-2
            for(let j=0; j<2*(n-i)-5; j++){
                pattern += ' ';
            }
            pattern += '*'
            //pattern += ' '.repeat(2*(n-i)-5);    // 2*(n-2-i) - 1) = 2n-4-2i-5 = 2(n-i)-5
        }
        console.log(pattern);
    }
}
pyramid1(3);