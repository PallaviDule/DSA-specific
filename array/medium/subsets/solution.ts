function subsets(nums: number[]): number[][] {
    let result: number[][] = [];

    function backtrack(index: number, currentArr: number[]) {
        result.push([...currentArr]);
        
        for(let i =index; i < nums.length; i++){
            currentArr.push(nums[i]);
            backtrack(i+1, currentArr);
            currentArr.pop();
        }
    }

    backtrack(0, []);
    return result;
};

// npx ts-node .array/medium/subsets/solution.ts
console.log('Subset:', subsets([1,2,3]) ); // [[], [ 1 ],[ 1, 2 ], [ 1, 2, 3 ],[ 1, 3 ], [ 2 ],[ 2, 3 ], [ 3 ]]
console.log('-------------------------------------------------------------------');
console.log('Subset:', subsets([0])); // [[],[0]]
console.log('-------------------------------------------------------------------');