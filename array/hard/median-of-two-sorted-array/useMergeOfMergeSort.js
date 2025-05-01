var findMedianSortedArrays1 = function(nums1, nums2) {
    console.log('nums1:', nums1, ', nums2:', nums2);
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);    
    const midLength = mergedArray.length/2;
    
    if(mergedArray.length % 2 === 0) {
        return (mergedArray[midLength] + mergedArray[(midLength-1)])/2;
    } else { 
        return mergedArray[Math.floor(midLength)];
    }
};

// Time Complexity: O(n + m), where n and m are lengths of a[] and b[] respectively.
// Space: O(1), No extra space is required.
// [1,2,3] [4,5,6]
var findMedianSortedArrays = function(nums1, nums2) { 
    console.log('nums1:', nums1, ', nums2:', nums2);
    let length1 = nums1.length, length2 = nums2.length;
    let mid1 = -1, mid2 = -1;
    let i = 0, j = 0;

    for(let count=0; count <= (length1+length2)/2; count++){ // count < 3
        mid2 = mid1;

        if(i != length1 && j !== length2) {
            // iteration1: nums1[0] < nums2[0] ? 1 < 4 ? mid1 = 1, i++; i = 1;
            // iteration2: nums1[1] < nums2[0]? 2 < 4 ? mid1 = nums[1]; mid1 = 2, i++; i = 2;
            // iteration3: nums1[2] < nums2[0]? 3 < 4 ? mid1 = nums[2]; mid1 = 3, i++; i = 3;  at this point i === length1 which is 3;
            mid1 = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];   
        } else if(i < length1) {
            mid1 = nums1[i++];
        } else {
            // iteration1: mid1 = nums[0] = 4; j++;
            mid1 = nums2[j++];
        }
       // console.log('mid1:', mid1 ,', mid2:', mid2);
    }

    if((length1+length2)%2 === 0) { // even length
        return (mid1+mid2)/2;
    } else {
        return mid1;
    }

}


export function run() {
    let nums1 = [1,2,3], nums2 = [4,5,6,7,8,9];
    console.log(findMedianSortedArrays(nums1, nums2));
    console.log('---------**--**----------');
}