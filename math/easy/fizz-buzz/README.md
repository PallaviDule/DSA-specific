# 412. Fizz Buzz

## Problem Statement
Given an integer `n`, return a string array `answer` (1-indexed) where:
- `answer[i] == "FizzBuzz"` if `i` is divisible by **both 3 and 5**.
- `answer[i] == "Fizz"` if `i` is divisible by **3**.
- `answer[i] == "Buzz"` if `i` is divisible by **5**.
- `answer[i] == i` (as a string) if none of the above conditions are true.

## Input
- An integer `n`.

**Constraints**
- `1 <= n <= 10⁴`

## Output
- A string array where each element is `"Fizz"`, `"Buzz"`, `"FizzBuzz"`, or the number itself (as a string).

## Examples

### Example 1
```text
Input: n = 3
Output: ["1", "2", "Fizz"]
```

### Example 2
```text
Input: n = 5
Output: ["1", "2", "Fizz", "4", "Buzz"]
```

### Example 3
```text
Input: n = 15
Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

## Encouragement Before You Peek 👀
✨ **It is encouraged to first attempt solving the problem yourself. Once done, come back here to review the approach and solution in the respective file.**

## Approach
Solution is [Here](./solution.js)

- Initialize an empty array `answer`.
- Loop from `1` to `n` (inclusive):
  - If divisible by both 3 and 5 ➔ Push `"FizzBuzz"`.
  - Else if divisible by 3 ➔ Push `"Fizz"`.
  - Else if divisible by 5 ➔ Push `"Buzz"`.
  - Else ➔ Push the number as a string.

**Order of conditions matters**:  
Check divisibility by **both** 3 and 5 first!

## Walkthrough Example 🚀

Let's dry-run with `n = 5`:

| i  | Condition               | Output |
|----|--------------------------|--------|
| 1  | not divisible             | "1"    |
| 2  | not divisible             | "2"    |
| 3  | divisible by 3            | "Fizz" |
| 4  | not divisible             | "4"    |
| 5  | divisible by 5            | "Buzz" |

Final `answer` array:
```text
["1", "2", "Fizz", "4", "Buzz"]
```

## Time and Space Complexity

| Complexity | Details |
|------------|---------|
| **Time**   | O(n) - We iterate through numbers from 1 to n. |
| **Space**  | O(n) - We store n elements in the answer array. |
