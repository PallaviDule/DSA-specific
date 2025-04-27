const problems = {
    // math/basic algorithm
    fizzBuzz: require('./math/easy/fizz-buzz/solution'),
    // array
    twoSum: require('./array/001-two-sum/solution'),
    richestCustomerWealth: require('./array/easy/richest-customer-wealth/solution'),
    sumOf1dArray: require('./array/easy/sum-of-1d-array/solution'),

    // tree
    rootEqualsSum: require('./tree/001-root-equals-sum-of-children/solution'),
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
  