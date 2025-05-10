// basic math: using for loop two pointer
const swapMaxAndMin = (arr) => {
    console.log('Input array:', arr);

    if (!arr || arr.length < 2) return arr;

    let minIndex=0, maxIndex=0;

    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i; 
        } else if(arr[i] > arr[maxIndex]){
            maxIndex = i;
        }
    }

    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    return arr;
}

export function run () {
    console.log('Sum and Product of array:', swapMaxAndMin([1,2,3,4,5]));
    console.log('-----------------------------------');
    console.log('Sum and Product of array:',swapMaxAndMin([5,4,3,2,1]));
    console.log('-----------------------------------');
    console.log('Sum and Product of array:',swapMaxAndMin([5,4,3,2,1,0]));
    console.log('-----------------------------------');
}