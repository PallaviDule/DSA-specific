const problems = {
    // math/basic algorithm
    fizzBuzz: require('./math/easy/fizz-buzz/solution'),
    numberOfSteps: require('./math/easy/number-of-steps-to-reduce-number/solution'),
    palindromeNumber: require('./math/easy/palindrome-number/solution'),
    medianOfTwoSortedArray: require('./array/hard/median-of-two-sorted-array/solution'),
    medianOfTwoSortedArrayMergeSort: require('./array/hard/median-of-two-sorted-array/useMergeOfMergeSort'),
    romanToInteger: require('./math/easy/roman-to-integer/solution'),
    plusOne: require('./math/easy/plus-one/solution'),
    squareRoot: require('./math/easy/square-root/solution'),
    fibbonacciNumber: require('./math/easy/fibbonacci-nth-number/solution'),
    climbStairs: require('./math/easy/climb-stairs/solution'),
    sumOfDigits: require('./math/easy/sum-of-digits/solution'),
    reverseNumber: require('./math/easy/reverse-number/solution'),
    // array
    reverseArray: require('./array/basic-array/reverse-array'),
    sumAndProduct: require('./array/basic-array/sum-product-of-array'),
    swapMinMax: require('./array/basic-array/swap-max-min'),
    twoSum: require('./array/easy/001-two-sum/solution'),
    twoSumII: require('./array/medium/two-sum-II/solution'),
    richestCustomerWealth: require('./array/easy/richest-customer-wealth/solution'),
    sumOf1dArray: require('./array/easy/sum-of-1d-array/solution'),
    removeDuplicatesFromSortedArray: require('./array/easy/remove-duplicates-from-sorted-arrays/solution'),
    removeElement: require('./array/easy/remove-element/solution'),
    searchInsertIndex: require('./array/easy/search-insert-position/solution'),
    mergeTwoSortedArray: require('./array/easy/merge-sorted-arrays/solution'),
    generatePascalTriangle: require('./array/easy/pascal-triangle/solution'),
    nthRowOfPascalTriangle: require('./array/easy/pascal-triangle-II/solution'),
    bestTimeToSellStock: require('./array/easy/best-time-to-sell-stocks/solution'),
    containerWithMostWater: require('./array/medium/container-with-most-water/solution'),
    intersectionOfTwoArrays: require('./array/easy/intersection-of-two-arrays/solution'),
    moveZeros: require('./array/easy/move-zeros/solution'),
    maxSumOfSubArray: require('./array/medium/max-sum-of-subarray/solution'),
    // map
    ransomNote: require('./map/easy/ransom-note/solution'),
    // set
    longestSubstringNoDuplicateSet: require('./set/medium/longest-substring-without-duplicate/solution'),
    // tree
    rootEqualsSum: require('./tree/001-root-equals-sum-of-children/solution'),
    // string
    longestSubstringNoDuplicate: require('./string/medium/longest-substring-without-duplicate/solution'),
    longestCommonPrefix: require('./string/easy/longest-common-prefix/solution'),
    indexOfFirstOccurrence: require('./string/easy/find-index-of-first-occurrence-in-string/solution'),
    lengthOfLastWord: require('./string/easy/length-of-last-word/solution'),
    addBinary: require('./string/easy/add-binary/solution'),
    // stack
    validParentheses: require('./stack/easy/valid-parentheses/solution'),

    // linked list
    middleNode: require('./linked-list/easy/middle-of-linked-list/solution'),
    addTwoLinkedListNumber: require('./linked-list/medium/add-two-numbers/solution'),
    mergeTwoSortedLinkedList: require('./linked-list/easy/merge-two-sorted-lists/solution'),
    deleteDuplicates: require('./linked-list/easy/remove-duplicates/solution'),

    //binary
    decimalToBinary: require('./binary/easy/decimal-to-binary/solution'),
    binaryToDecimal: require('./binary/easy/binary-to-decimal/solution'),

    //bitwise operators
    useBitwiseOperators: require('./bitwise-operator/solution')
  };
  
const key = process.argv[2];
  
console.log('Your are running: ', key);
console.log('-------------------------------------------------------------------');
if (key && problems[key]) {
problems[key].run();
} else {
console.log("❗ Please provide a valid problem key.");
console.log("🧠 Available:", Object.keys(problems).join(', '));
}
  