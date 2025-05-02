function isValid(s) {
  console.log('-------------------');
  console.log('input:', s);  
  let stack = [];
  let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if ('({['.includes(char)) {
      stack.push(char);
    } else if (pairs[char] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

export function run() {
  console.log(isValid("()"));       // true
  console.log(isValid("()[]{}"));   // true
  console.log(isValid("(]"));       // false
  console.log(isValid("([])"));     // true
}
