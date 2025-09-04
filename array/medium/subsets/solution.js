var subsets = function(nums) {
    let result = [];

    function backtrack(index, curr) {
        result.push(curr);
        for (let i = index; i < nums.length; i++) {
            backtrack(i + 1, [...curr, nums[i]]);
        }
    }

    backtrack(0, []);
    return result;
};

// npm run subsets
export function run(){
   console.log('Subset:', subsets([1,2,3]) ); // [[], [ 1 ],[ 1, 2 ], [ 1, 2, 3 ],[ 1, 3 ], [ 2 ],[ 2, 3 ], [ 3 ]]
    console.log('-------------------------------------------------------------------');
    console.log('Subset:', subsets([0])); // [[][0]]
    console.log('-------------------------------------------------------------------');
}

