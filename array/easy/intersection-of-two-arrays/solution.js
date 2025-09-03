/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection1 = function(nums1, nums2) {
    const filtered = nums2.filter(num => nums1.includes(num));
    return [...new Set(filtered)];
};

// Time: O(n + m)
var intersection = function(nums1, nums2) {
    let uniqueInNum1 = new Set(nums1);
    let intersection = new Set();

    nums2.forEach((num) => {
        if(uniqueInNum1.has(num)) {
            intersection.add(num);
        }
    });
    
    return [...intersection];
};

// brute force
var intersection3 = function(nums1, nums2) {
    let result = [];

    for(let i=0; i<nums1.length; i++){
        if(nums2.includes(nums1[i]) && !result.includes(nums1[i])){
            result.push(nums1[i]);
        }
    }


    return result;
};

function intersection4(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (!result.includes(nums1[i])) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}


export function run () {
    console.log('Intersection of two arrays:', intersection([1,2,3,4,5], [1,9,5])); // [ 1, 5 ]
    console.log('-----------------------------------');
    console.log('Intersection of two arrays:',intersection([5,4,3,2,1,0], [0,1,1,4])); // [ 0, 1, 4 ]
    console.log('-----------------------------------');
}
