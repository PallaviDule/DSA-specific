const problems = {
    // math/basic algorithm
    fizzBuzz: require('./math/easy/fizz-buzz/solution'),
    numberOfSteps: require('./math/easy/number-of-steps-to-reduce-number/solution'),
    palindromeNumber: require('./math/easy/palindrome-number/solution'),
    // array
    twoSum: require('./array/001-two-sum/solution'),
    richestCustomerWealth: require('./array/easy/richest-customer-wealth/solution'),
    sumOf1dArray: require('./array/easy/sum-of-1d-array/solution'),
    // map
    ransomNote: require('./map/easy/ransom-note/solution'),
    // set
    longestSubstringNoDuplicateSet: require('./set/medium/longest-substring-without-duplicate/solution'),
    // tree
    rootEqualsSum: require('./tree/001-root-equals-sum-of-children/solution'),
    // string
    longestSubstringNoDuplicate: require('./string/medium/longest-substring-without-duplicate/solution'),

    // linked list
    middleNode: require('./linked-list/easy/middle-of-linked-list/solution'),
    addTwoLinkedListNumber: require('./linked-list/medium/add-two-numbers/solution')
  };
  
const key = process.argv[2];
  
console.log('Your are running: ', key);
console.log('-----------------------------');
if (key && problems[key]) {
problems[key].run();
} else {
console.log("❗ Please provide a valid problem key.");
console.log("🧠 Available:", Object.keys(problems).join(', '));
}
  