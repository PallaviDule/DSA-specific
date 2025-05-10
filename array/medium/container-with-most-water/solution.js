/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function(height) {
    let start=0, end=height.length-1;
    let maxStorage = 0;

    while(start<end){
        let storage=0, width = end-start;
        if(height[start] < height[end]){
            storage = height[start] * width;
            start++;
        } else {
            storage = height[end] * width;
            end--;
        }

        maxStorage = Math.max(maxStorage, storage);
    }

    return maxStorage;
};

var maxArea = function(height) {
    let start=0, end=height.length-1;
    let maxStorage = 0;

    while(start<end){
        const width = end-start;
        const minHeight = Math.min(height[start], height[end]);
        const storage= minHeight*width;
            
        height[start] < height[end] ? start++ : end--;

        maxStorage = Math.max(maxStorage, storage);
    }

    return maxStorage;
};

    export function run() {
        console.log('Container with most water:', maxArea([1,8,6,2,5,4,8,3,7]));
        console.log('------------------------------------------');
        console.log('Container with most water:', maxArea([1,1]));
        console.log('------------------------------------------');
    }