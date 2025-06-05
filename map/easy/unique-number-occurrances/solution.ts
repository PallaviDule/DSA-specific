function uniqueOccurrences(arr: number[]): boolean {
    console.log('Input array:', arr);
    let map: Map<number, number> = new Map();
    let set: Set<number> = new Set()

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

// npx ts-node ./map/easy/unique-number-occurrances/solution.ts
console.log('Has unique occurrences:', uniqueOccurrences([1,2,2,1,1,3]) );
console.log('-------------------------------------------------------------------');
console.log('Has unique occurrences:', uniqueOccurrences([1,2]));
console.log('-------------------------------------------------------------------');
console.log('Has unique occurrences:', uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));
console.log('-------------------------------------------------------------------');