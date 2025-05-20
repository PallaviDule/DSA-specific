    // moving higher value to right
    const bubbleSort = (arr) => {
        console.log('Input Array:', arr);
        let isSwap = false;
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<=arr.length-i-1; j++){ // moving bigger number to right
                if(arr[j] > arr[j+1]) {
                    isSwap = true;
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                } 
            }
            console.log('array:', arr);

            if(!isSwap) return arr; // if no swap at all,means it is already sorted
            isSwap = false; // If it got sorted in a single loop
        }
        return arr;
    }

    // moving lower value to left
    const bubbleSort1 = (arr) =>{
        console.log('Input Array:', arr);
        let isSwap = false;
        for(let i=0; i<arr.length; i++){
            for(let j=arr.length-1; j>=i; j--){ // moving smaller number to left
                if(arr[j] < arr[j-1]) {
                    isSwap = true;
                    [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                } 
            }
            if(!isSwap) return arr; // if no swap at all,means it is already sorted
        }
        return arr;
    }

    const selectionSort = (arr) => {
        for(let i=0; i<arr.length; i++){
            let smallestIndex = i; // consider ith element id smallest
            for(let j=i+1; j<arr.length; j++){
                if(arr[j] < arr[smallestIndex]){
                    smallestIndex = j;
                }
            }
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
        }

        return arr;
    }

    // Build the sorted array one element at a time. For each element, insert it into the correct position among the elements already sorted.
    const insertionSort = (arr) => {
        for(let i=1; i<arr.length; i++){
            let curr = arr[i];

            for(let j=i-1;j>=0; j--){
                if(arr[j] > curr) {
                    arr[j+1] = arr[j];
                    arr[j] = curr;
                }
            }
        }

        // other way
        // for (let i = 1; i < n; i++) {
        //     let key = arr[i];
        //     let j = i - 1;
        //     while (j >= 0 && arr[j] > key) {
        //      arr[j + 1] = arr[j];
        //      j--;
        //     }
        //     arr[j + 1] = key;
        // }

        return arr;

    }


export function run() {
    // console.log('Bubble sorting:', bubbleSort([4,1,5,2,3]));
    // console.log('-----------------------------------------');
    // console.log('Bubble sorting:', bubbleSort([4,9,5,6,10]));
    // console.log('-----------------------------------------');
    // console.log('Bubble sorting:', bubbleSort([1,2,3,4,5])); // what if array is sorted
    // console.log('-----------------------------------------');

    // console.log('Selection sorting:', selectionSort([4,1,5,2,3]));
    // console.log('-----------------------------------------');
    // console.log('Selection sorting:', selectionSort([11,9,5,4,10]));
    // console.log('-----------------------------------------');
    // console.log('Selection sorting:', selectionSort([1,2,3,4,5])); // what if array is sorted

    console.log('Insertion sorting:', insertionSort([4,1,5,2,3]));
    console.log('-----------------------------------------');
    console.log('Insertion sorting:', insertionSort([11,9,5,4,10]));
    console.log('-----------------------------------------');
    console.log('Insertion sorting:', insertionSort([1,2,3,4,5])); // what if array is sorted

}