# 852. Peak Index in a Mountain Array

## Problem Statement

You are given an integer **mountain array** `arr` of length `n` where the values **strictly increase to a peak element** and then **strictly decrease**.

Return the **index** of the **peak element**.
You must solve it in **O(log n)** time complexity.

## Input

* `arr`: an array of integers
* Constraints:

  * `3 <= arr.length <= 10⁵`
  * `0 <= arr[i] <= 10⁶`
  * `arr` is guaranteed to be a **mountain array**

## Output

* An integer representing the index of the peak element

## Examples

**Example 1:**
Input: `arr = [0, 1, 0]`
Output: `1`

**Example 2:**
Input: `arr = [0, 2, 1, 0]`
Output: `1`

**Example 3:**
Input: `arr = [0, 10, 5, 2]`
Output: `1`

### Encouragement Before You Peek 👀

Try to think about how to apply **binary search** to this problem. Ask yourself: how does the direction of increasing or decreasing values at `mid` help narrow down the search?

## Intuition

A mountain array always has one peak — values increase to a point and then decrease.
So, we can apply **binary search**:

* If `arr[mid] < arr[mid + 1]`, we are on the **increasing** slope → move right
* If `arr[mid] > arr[mid + 1]`, we are on the **decreasing** slope → move left
  Eventually, both pointers will converge at the **peak index**.

## Approach

[Solution Here](./solution.js)

* Initialize two pointers: `left = 0` and `right = arr.length - 1`
* While `left < right`:

  * Compute `mid = Math.floor((left + right) / 2)`
  * If `arr[mid] < arr[mid + 1]`, move to the right half
  * Else, move to the left half (including `mid`)
* When `left == right`, that is the peak index

### Pseudocode

```
left = 0
right = arr.length - 1

while left < right:
    mid = floor((left + right) / 2)

    if arr[mid] < arr[mid + 1]:
        left = mid + 1
    else:
        right = mid

return left
```

## Walkthrough Example

**Input:** `arr = [0, 2, 1, 0]`

* `left = 0`, `right = 3`
* `mid = 1`, `arr[mid] = 2`, `arr[mid + 1] = 1`
  → `2 > 1`, move `right = mid = 1`
* Now: `left = 0`, `right = 1`
* `mid = 0`, `arr[mid] = 0`, `arr[mid + 1] = 2`
  → `0 < 2`, move `left = mid + 1 = 1`
* Now: `left = 1`, `right = 1` → done
  **Return:** `1`

## Data Evolution

| Step | left | mid | right | arr\[mid] | arr\[mid+1] | Action         |
| ---- | ---- | --- | ----- | --------- | ----------- | -------------- |
| 1    | 0    | 1   | 3     | 2         | 1           | right = mid    |
| 2    | 0    | 0   | 1     | 0         | 2           | left = mid + 1 |
| 3    | 1    | -   | 1     | -         | -           | done           |

## Time and Space Complexity

* **Time:** `O(log n)` → Each step halves the search space
* **Space:** `O(1)` → Only uses pointers, no extra memory
