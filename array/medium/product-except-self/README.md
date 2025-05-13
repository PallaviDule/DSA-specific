## 238. Product of Array Except Self

## Problem Statement

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` **except** `nums[i]`.

You **must not use** the division operation.
You must solve it in **O(n)** time.

## Input

* `nums`: an array of integers
* `2 <= nums.length <= 10^5`
* `-30 <= nums[i] <= 30`

## Output

* An array `answer` of length `n` where each element is the product of all elements in `nums` except `nums[i]`

## Examples
    Input: nums = [1, 2, 3, 4]
    Output: [24, 12, 8, 6]

    Input: nums = [-1, 1, 0, -3, 3]
    Output: [0, 0, 9, 0, 0]

### Encouragement Before You Peek 🙃

Try solving it with two passes:

* One from left to right (prefix)
* One from right to left (suffix)

## Intuition

We need the product of all elements except the current index without using division.    
We can do this by:

1. Calculating a prefix product for each index.
2. Calculating a suffix product for each index.
3. Multiply them together for the final result.

## Approach

#### Tags: Array, Prefix Product, Suffix Product

We use two passes:

* **Left to Right**: Build prefix products
* **Right to Left**: Multiply by suffix products

### Pseudocode

```
initialize result array with 1s
prefix = 1
for i in 0 to n-1:
    result[i] = prefix
    prefix *= nums[i]

suffix = 1
for i in n-1 to 0:
    result[i] *= suffix
    suffix *= nums[i]
```


## Walkthrough Example

Input: `nums = [1, 2, 3, 4]`

**Pass 1 (prefix):**

```
result = [1, 1, 1, 1]
prefix = 1
result[0] = 1       // prefix = 1
prefix = 1 * 1 = 1
result[1] = 1       // prefix = 1
prefix = 1 * 2 = 2
result[2] = 2       // prefix = 2
prefix = 2 * 3 = 6
result[3] = 6       // prefix = 6
prefix = 6 * 4 = 24
```

Intermediate result: `[1, 1, 2, 6]`

**Pass 2 (suffix):**

```
suffix = 1
result[3] = 6 * 1 = 6
suffix = 1 * 4 = 4
result[2] = 2 * 4 = 8
suffix = 4 * 3 = 12
result[1] = 1 * 12 = 12
suffix = 12 * 2 = 24
result[0] = 1 * 24 = 24
```

Final result: `[24, 12, 8, 6]`

## Data evolution

| Index | Prefix product | Suffix product | Final Result |
| ----- | -------------- | -------------- | ------------ |
| 0     | 1              | 24             | 24           |
| 1     | 1              | 12             | 12           |
| 2     | 2              | 4              | 8            |
| 3     | 6              | 1              | 6            |

## Time and Space Complexity

**Time Complexity:** `O(n)`     

- Two passes through the array
- The first loop goes from 0 to n-1 → O(n)
- The second loop goes from n-1 to 0 → O(n)
- Total operations: O(n) + O(n) = O(2n) → Drop the constant → O(n)

**Space Complexity:** `O(1)` extra space : Output array does not count as extra space per problem constraint
