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
// Median of Two Sorted Arrays
// Time: O(log(min(m, n))), Space: O(1)
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array to optimize binary search
    let nums1Length = nums1.length, nums2Length = nums2.length;

    if(nums1Length > nums2Length){
        [nums1, nums2] = [nums2, nums1]; 
        [nums1Length, nums2Length] = [nums2Length, nums1Length]; // optional but cleaner
    }
    // e.g [1,2,3] [4,5,6]
    let minLength = 0, maxLength = nums1Length;

    while(minLength <= maxLength) {
        let midNum1 = Math.floor((minLength+maxLength)/2);   //0+3/2 = 1 
        let midNum2 = Math.floor((nums1Length+nums2Length+1)/2) - midNum1; // (3+3+1/2)-1= 3-1=2;
        console.log('midNum1:', midNum1, ', midNum2:', midNum2 , ' where midNum1+midNum2 = half of total array length:', Math.floor((nums1Length+nums2Length)/2)+1);

        // Find elements to the left and right of partition in nums1[]
        let maxLeftNum1 = midNum1 === 0 ? -Infinity : nums1[midNum1-1]; // num1s[1-1] = nums1[0]= 1;
        let minRightNum1 = midNum1 === nums1Length ? Infinity : nums1[midNum1];  // nums1[1] = 2;
        let maxLeftNum2 = midNum2 === 0 ? -Infinity : nums2[midNum2-1]; // nums2[2-1] = nums1[1]= 5;
        let minRightNum2 = midNum2 === nums2Length ? Infinity : nums2[midNum2];  // nums1[2] = 6;
        // [1,2] | [3]
        // [4] | [5,6]
        console.log('maxLeftNum1:', maxLeftNum1, ',minRightNum1:', minRightNum1);
        console.log('maxLeftNum2:', maxLeftNum2, ',minRightNum2:', minRightNum2);

        if(maxLeftNum1 <= minRightNum2 && maxLeftNum2 <= minRightNum1) { // ((1<=6)&&(5<=2)): false ;
            if((nums1Length+nums2Length)%2 === 0) {
                console.log('Get median for even length array:');
                return (Math.max(maxLeftNum1, maxLeftNum2) + Math.min(minRightNum1, minRightNum2))/2;
            }else {
                console.log('Get median for odd length array:');
                return Math.max(maxLeftNum1, maxLeftNum2);
            }
        } else if (maxLeftNum1 > minRightNum2) { // 1 > 6;
            console.log('maxLeftNum1 ', maxLeftNum1 ,' > minRightNum2', minRightNum2, ' so reduce max length')
            maxLength = midNum1 - 1; // Move towards left in nums1
        } else { // 1 < 6;
            console.log('maxLeftNum1 ', maxLeftNum1 ,'< minRightNum2', minRightNum2, 'so increase min length')
            minLength = midNum1 + 1; //  Move towards right in nums1
        }
        console.log('Min lenght at th end:', minLength ,' and max length:', maxLength);
    }
    throw new Error("Input arrays are not sorted or valid");
}


export function run() {
    let nums1 = [1,2,3], nums2 = [4,5,6];
    console.log(findMedianSortedArrays(nums1, nums2));
    console.log('---------**--**----------');
}