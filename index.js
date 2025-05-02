const problems = {
    // math/basic algorithm
    fizzBuzz: require('./math/easy/fizz-buzz/solution'),
    numberOfSteps: require('./math/easy/number-of-steps-to-reduce-number/solution'),
    palindromeNumber: require('./math/easy/palindrome-number/solution'),
    medianOfTwoSortedArray: require('./array/hard/median-of-two-sorted-array/solution'),
    medianOfTwoSortedArrayMergeSort: require('./array/hard/median-of-two-sorted-array/useMergeOfMergeSort'),
    romanToInteger: require('./math/easy/roman-to-integer/solution'),
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
    longestCommonPrefix: require('./string/easy/longest-common-prefix/solution'),
    // stack
    validParentheses: require('./stack/easy/valid-parentheses/solution'),

    // linked list
    middleNode: require('./linked-list/easy/middle-of-linked-list/solution'),
    addTwoLinkedListNumber: require('./linked-list/medium/add-two-numbers/solution'),
    mergeTwoSortedLinkedList: require('./linked-list/easy/merge-two-sorted-lists/solution')
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
  