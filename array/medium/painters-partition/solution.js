
function isValid(nums, mid, painters) {
    let count = 1;
    let max = 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        
        if (max + nums[i] <= mid) {
            max += nums[i];
        } else {
            max = nums[i];
            count++;
        }

        if (count > painters) {
            return false;
        }
    }

    return true;
}

function paintersPartition(nums, painters) {
    let max = 0;
    let min = -1;
    let lastValid = -1;

    for (let i = 0; i <= nums.length - 1; i++) {
        max+=nums[i];
        if (nums[i] > min) {
            min = nums[i];
        }
    }

    while (min <= max) {
        let mid = Math.floor((min + max)/2);

        if (isValid(nums, mid, painters)) {
            max = mid - 1;
            lastValid = mid;
        } else {
            min = mid + 1;
        }
    }

    return lastValid;
}

export function run(){
    console.log("Allocated Minimum pages:", paintersPartition([12, 34, 67, 90], 2));
    console.log('----------------------------------------------------------------------');
    console.log("Allocated Minimum pages:", paintersPartition([22, 23, 67], 1));
    console.log('----------------------------------------------------------------------');
    console.log("Allocated Minimum pages:", paintersPartition([15, 17, 20], 3));
}