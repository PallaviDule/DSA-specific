/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let totalLength = m+n; // or nums1.length-1;

//     while(m>0 && n>0) {
//         if(nums1[m-1] > nums2[n-1]) {
//             nums1[totalLength-1] = nums1[m-1];
//             m--;
//         } else {
//              nums1[totalLength-1] = nums2[n-1];
//              n--;
//         }
//         totalLength--;
//     }

//     while(n>0) {
//         nums1[totalLength-1] = nums2[n-1];
//         totalLength--;
//         n--;
//     }
//     return nums1;
// };

var merge = function(nums1, m, nums2, n) {
    console.log('--------*---------------------------*-------');
    console.log(`nums1: [${nums1}], m: ${m}, nums2: [${nums2}], n: ${n}`);

    let totalLength = m+n;
    
    if(n===0){
        return m;
    }

    for(let i=0; i <= nums1.length-1; i++) {
        if(n<=0) {
            return nums1
        };
        if(nums1[m-1] >= nums2[n-1]) {
            nums1[totalLength-1] = nums1[m-1];
            m--;
        } else {
             nums1[totalLength-1] = nums2[n-1];
             n--; 
        }

        totalLength--;
    }
    
    return nums1;
};


export function run() {
    console.log('Sorted Array looks:', merge([4,5,6,0,0,0],3,[1,2,3],3));
    console.log('Sorted Array looks:', merge([1],1, [], 0));
    console.log('Sorted Array looks:', merge([0],0,[1],1));
    console.log('Sorted Array looks:', merge([1,0], 1, [2], 1));
    console.log('Sorted Array looks:', merge([4,5,6,0,0,0], 3, [1,2,3], 3));

}