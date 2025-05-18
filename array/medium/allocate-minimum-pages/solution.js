function isValid(arr, num, maxAllowed) {
    let students = 1; let pages = 0;
    
    for(let page of arr){
        if(page > maxAllowed) return false;

        if(pages + page <= maxAllowed){
            pages += page;
        } else {
            pages = page;
            students++;

            if(students > num) return false;
        }
    }

    return true ;
}

const allocatedMinimumPages = (arr, k) => {
    if (k > arr.length) return -1;

   let ans = -1;
   let low = Math.max(...arr);
   let high = arr.reduce((acc, curr) => acc+curr  ,0);   
   console.log('low:', low, ', high:', high);
   while(low <= high){
       let mid = Math.floor((low+high)/2);
       
       if(isValid(arr, k, mid)) {
        console.log('mid', mid);
           ans = mid;
           high = mid-1;
       } else {
           low = mid+1;
       }
   }
   
   return ans;
}

export function run(){
    console.log("Allocated Minimum pages:", allocatedMinimumPages([12, 34, 67, 90], 2));
    console.log('----------------------------------------------------------------------');
    console.log("Allocated Minimum pages:", allocatedMinimumPages([15, 17, 20], 5));
    console.log('----------------------------------------------------------------------');
    console.log("Allocated Minimum pages:", allocatedMinimumPages([22, 23, 67], 1));
    console.log('----------------------------------------------------------------------');
}