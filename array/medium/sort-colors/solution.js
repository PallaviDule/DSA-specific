// using sort
const sortColors1 = (arr) => {
    console.log('Input Array:', arr);

    return arr.sort((a,b) => a-b);
}

// better
const sortColors2 = (arr) => {
   let countOne =0 , countZero=0, countTwo=0;
    // O(n)
    for(let i=0; i<arr.length;i++){
        if(arr[i] === 0) countZero++;
        if(arr[i] === 1) countOne++;
        if(arr[i] === 2) countTwo++;
    }
    // O(n)
    for(let i=0; i<arr.length;i++){ 
        if(countZero) {
            arr[i] = 0;
            countZero--;
        } else
        if(countOne) {
            arr[i] = 1;
            countOne--;
        } else   
        if(countTwo) {
            arr[i] = 2;
            countTwo--;
        }
    }

   return arr;
}

// better
const sortColors3 = (arr) => {
    let countOne =0 , countZero=0, countTwo=0;
     // O(n)
     for(let i=0; i<arr.length;i++){
         if(arr[i] === 0) countZero++;
         else if (arr[i] === 1) countOne++;
         else countTwo++;
     }
     // O(n)
     for(let i=0; i<arr.length;i++){ 
        if(i<countZero) arr[i] = 0;
        else if (i< countZero+countOne) arr[i] = 1;
        else arr[i] = 2;
     }
 
    return arr;
 }

 // optimized
const sortColors = (arr) => {
    console.log('Input Array:', arr);
    let low=0, mid=0, high=arr.length-1;

    while(mid<= high) {
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if(arr[mid] === 1) {
            mid++;
        } else {
            [arr[high], arr[mid]] = [arr[mid], arr[high]];
            high--;
        }
    }

    return arr;
 }


export function run() {
    // it only has 0,1,2
    console.log('Sorted Colors:', sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
    console.log('-------------------------------------------');
    console.log('Sorted Colors:', sortColors([2,0,1])); // [0,1,2]
    console.log('-------------------------------------------');
    console.log('Sorted Colors:', sortColors([2,0,1,0,1,2,1,2,1])); // [0,0,1,1,1,1,2,2,2]
    console.log('-------------------------------------------');
}