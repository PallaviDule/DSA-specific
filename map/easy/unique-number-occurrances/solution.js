/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences1 = function(arr) {
    console.log('Input array:', arr);
    let map = new Map();
    let set = new Set()

    for(let i=0; i < arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0)+1);
    }

    for(let val of map.values()){
        if(set.has(val)) {
            return false;
        }
        set.add(val);
    }

    return true;
};

var uniqueOccurrences = function(arr) {
    console.log('Input array:', arr);
    let map = new Map();
    

    for(let i=0; i < arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0)+1);
    }

    let unique = new Set(map.values());

    return unique.size === map.size;
};


export function run(){
    console.log('Has unique occurrences:', uniqueOccurrences([1,2,2,1,1,3]) );
    console.log('-------------------------------------------------------------------');
    console.log('Has unique occurrences:', uniqueOccurrences([1,2]));
    console.log('-------------------------------------------------------------------');
    console.log('Has unique occurrences:', uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) );
    console.log('-------------------------------------------------------------------');
   
}
