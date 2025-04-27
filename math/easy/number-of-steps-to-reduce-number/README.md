# 1342. Number of Steps to Reduce a Number to Zero

## Problem Statement
Given an integer `num`, return the number of steps to reduce it to zero.

In one step:
- If the current number is even, divide it by 2.
- If the current number is odd, subtract 1 from it.

## Input
- A single integer `num` where `0 <= num <= 10^6`

#### Example 1:
```js
Input: num = 14
Output: 6
Explanation: 
    1) 14 is even; divide by 2 and obtain 7.
    2) 7 is odd; subtract 1 and obtain 6.
    3) 6 is even; divide by 2 and obtain 3.
    4) 3 is odd; subtract 1 and obtain 2.
    5) 2 is even; divide by 2 and obtain 1.
    6) 1 is odd; subtract 1 and obtain 0.
```

#### Example 2:
```js
Input: num = 8
Output: 4
Explanation:
    1) 8 is even; divide by 2 and obtain 4.
    2) 4 is even; divide by 2 and obtain 2.
    3) 2 is even; divide by 2 and obtain 1.
    4) 1 is odd; subtract 1 and obtain 0.
```

#### Example 3:
```js
Input: num = 123
Output: 12
```

## Approach
1. **Loop** until the number becomes zero.
2. **Divide by 2** if the number is even.
3. **Subtract 1** if the number is odd.
4. **Count the steps** taken during the process.

## Walkthrough Example
For `num = 14`, the steps are as follows:
1. `14` is even → divide by 2 → `7`
2. `7` is odd → subtract 1 → `6`
3. `6` is even → divide by 2 → `3`
4. `3` is odd → subtract 1 → `2`
5. `2` is even → divide by 2 → `1`
6. `1` is odd → subtract 1 → `0`
Total steps = `6`

## Complexity
### Time Complexity

The time complexity is primarily determined by how many operations are performed on the number until it becomes zero. Here's how we break it down:

1. **Even Numbers:** If the number is even, we divide it by 2. The operation of dividing by 2 reduces the number substantially in logarithmic time.
   - After every division, the number is halved, which means the number of steps required to reduce it through successive divisions is proportional to the number of times it can be halved before reaching 1 (or zero). This is approximately `O(log n)` where `n` is the initial value of `num`.

2. **Odd Numbers:** If the number is odd, we subtract 1. This operation reduces the number by a fixed value (1), but it's a simple operation that happens before an even step (division by 2).
   - However, each subtraction of 1 followed by a division by 2 is just a single step, and the number of such steps is limited and doesn't increase the time complexity compared to the even case.

    **Conclusion:**  
    The number of operations is roughly proportional to the number of divisions by 2 (logarithmic in terms of the size of the number). Therefore, the time complexity is:

    **Time Complexity:** `O(log n)`, where `n` is the input number (`num`).

### Space Complexity

In this solution, we are only using a few variables to keep track of the current number (`num`) and the count of steps (`steps`). We are not using any additional data structures (like arrays or hashmaps) that grow with the size of the input. Therefore, the space required is constant, irrespective of the input size.

**Space Complexity:** `O(1)` — constant space usage, as only a few variables are used.