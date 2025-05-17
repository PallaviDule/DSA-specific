var singleNonDuplicate = function(nums) {
    let start=0;
    let end=nums.length-1;
    while(start<end){ 
      let mid = Math.floor((start+end)/2); 
  
      if(mid%2 === 0) {
          if(nums[mid]=== nums[mid+1]) {
              start = mid+2;
          } else {
              end = mid;
          }
      } else {
          if(nums[mid]=== nums[mid-1]) {
              start=mid+1;
          } else {
              end = mid-1;
          }
      }
  
    }  
  
    return nums[start];
  };

export function run() {
    console.log(' Single Element in a Sorted Array: ', singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
    console.log('-------------------------------------------------------------------');
    console.log(' Single Element in a Sorted Array:', singleNonDuplicate([3,3,7,7,10,11,11]));
    console.log('-------------------------------------------------------------------');
    console.log(' Single Element in a Sorted Array:', singleNonDuplicate([1,1,2,3,3]));
}