# [![LeetCode Badge](https://img.shields.io/badge/LeetCode-1979-green)](https://leetcode.com/problems/find-greatest-common-divisor-of-array/) Find Greatest Common Divisor of Array

## Problem Statement



Given an integer array `nums`, return the greatest common divisor of the smallest number and largest number in `nums`.
The greatest common divisor (GCD) of two numbers is the largest positive integer that evenly divides both numbers.

## Input

* `2 <= nums.length <= 1000`
* `1 <= nums[i] <= 1000`

## Output

* An integer representing the GCD of the smallest and largest numbers in the array

## Examples

### Example 1

Input: `nums = [2,5,6,9,10]`
Output: `2`

### Example 2

Input: `nums = [7,5,6,8,3]`
Output: `1`

### Example 3

Input: `nums = [3,3]`
Output: `3`

### Encouragement Before You Peek 👀

Try identifying the smallest and largest number from the array and manually check how you'd find their GCD. That mental process is your algorithm in disguise.

## Intuition

To find the GCD of the array, we only need the minimum and maximum numbers in the array. The problem reduces to a classic "Find GCD of two numbers" task.

Once we have the smallest and largest number, the GCD can be found using either:

* Brute-force method by checking all numbers from 1 to min
* Efficient Euclidean algorithm

## Approach

[Solution Here](./solution.js)

**Tags**: Array, Math, GCD

* Extract the minimum and maximum from the array.
* Use the Euclidean algorithm to find their GCD.
* Edge case: if all elements are the same, GCD is the number itself.

### Pseudocode

```
function findGCD(nums):
    min = smallest value in nums
    max = largest value in nums

    return gcd(min, max)

function gcd(a, b):
    while b is not 0:
        temp = b
        b = a % b
        a = temp
    return a
```

## Walkthrough Example

Input: `nums = [2, 5, 6, 9, 10]`

* min = 2
* max = 10

Find GCD of 2 and 10:

* 10 % 2 = 0
* GCD is 2

Return 2

## Data Evolution

| Step | a (min) | b (max) | a % b | New a | New b |
| ---- | ------- | ------- | ----- | ----- | ----- |
| 1    | 10      | 2       | 0     | 2     | 0     |

## Time and Space Complexity

* **Time Complexity**: O(log(min, max)) due to Euclidean algorithm
* **Space Complexity**: O(1) since we use only constant extra space
