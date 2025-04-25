function twoSum(nums, target) {
    let map = new Map();

    // Iterate over nums using for() with entries to get both index (i) and number (num)
    // for (let [i, num] of nums.entries()) {} if you go with for...of
    for(let i =0; i<= nums.length; i++){
        let complement = target - nums[i]; // 

        // If the complement (target - num) exists in map
        if(map.has(complement)){
            return [map.get(complement), i]; // return the current index and the index of the complement
        }

        // Store the number and its index in the map
        map.set(nums[i], i);
    }
    return [];
}


export function run() {
    // Inside a template literal, JavaScript implicitly calls .toString() on the array. 
    const input = [2,7,11,15]; const target = 9;
    console.log(`Input: ${JSON.stringify(input)}, Target: ${target} and Result: ${JSON.stringify(twoSum(input, target))}`); 
};
