function canPlaceCows(arr, num, minDistanceAllowed) { // O(n)
    let cows=1, lastPossiblePosition = arr[0];

    for(let i=1; i<=arr.length-1; i++){
        if( arr[i] - lastPossiblePosition >= minDistanceAllowed){
            cows++;
            lastPossiblePosition = arr[i];
        } 
    }

    return cows >= num;
}

const aggressiveCows = (arr, k) => { // O(log n *n)
    let minDistance = 1; // min distance we can have between cows
    let sortedArr = arr.sort((a,b) => a-b);
    let maxDistance = sortedArr[sortedArr.length-1] - sortedArr[0];
    let maxValidDistance;

    while(minDistance <= maxDistance) {
        let mid = Math.floor((maxDistance+minDistance)/2);

        if(canPlaceCows(sortedArr, k, mid)) {
            maxValidDistance = mid;
            minDistance = mid+1; // we need to find maximum of smallest distance available in placement
        } else {
            maxDistance = mid-1;
        }
    }

    return maxValidDistance;
}

export function run(){
    console.log("Maximum the smallest distance between any two placed cows:", aggressiveCows([1, 2, 8, 4, 9], 3)); // 3
    console.log('----------------------------------------------------------------------');
    console.log("Maximum the smallest distance between any two placed cows:", aggressiveCows([5, 8, 11, 17, 18, 100], 4)); //6
    console.log('----------------------------------------------------------------------');
    console.log("Maximum the smallest distance between any two placed cows:", aggressiveCows([1,2,3,4,5], 2)); //4
    console.log('----------------------------------------------------------------------');
    console.log("Maximum the smallest distance between any two placed cows:", aggressiveCows([1,2,4,8,9,12,16,20,24,25], 3)); // 12
}