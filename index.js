const problems = {
    // array
    twoSum: require('./array/001-two-sum/solution'),
    richestCustomerWealth: require('./array/easy/richest-customer-wealth/solution'),

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
  