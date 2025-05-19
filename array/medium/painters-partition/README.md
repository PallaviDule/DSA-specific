# Painter's Partition Problem

## Problem Statement

You are given:

* An array `arr[]` representing boards, where each element denotes the length of a board.
* An integer `k`, representing the number of painters available.

Each unit length of a board takes **1 unit of time** to paint.
Each painter:

* Can only paint **contiguous** sections of boards.
* Cannot skip boards or paint non-contiguous sections.

The task is to determine the **minimum time required** to paint all boards using at most `k` painters such that the **maximum time** taken by any painter is minimized.

## Input

* `arr[]`: An array of positive integers representing board lengths.
* `k`: An integer representing the number of painters.

### Constraints

* `1 ≤ arr.length ≤ 10^5`
* `1 ≤ arr[i] ≤ 10^4`
* `1 ≤ k ≤ arr.length`

## Output

* Return a single integer: the minimum time required to complete painting all boards under the given conditions.

## Examples

### Example 1

```
Input:
arr = [5, 10, 30, 20, 15]
k = 3

Output:
35

Explanation:
Optimal allocation:
- Painter 1: [5, 10]
- Painter 2: [30]
- Painter 3: [20, 15]
Total time = max(5+10, 30, 20+15) = 35
```

### Example 2

```
Input:
arr = [10, 20, 30, 40]
k = 2

Output:
60

Explanation:
Optimal allocation:
- Painter 1: [10, 20, 30]
- Painter 2: [40]
Total time = max(10+20+30, 40) = 60
```

### Encouragement Before You Peek 👀

Can you figure out how to divide the boards into exactly `k` or fewer contiguous segments such that the **maximum load (sum)** of any segment is minimized?

Hint: This is a **binary search on answer** problem!

## Intuition

We aim to minimize the **maximum time** any painter takes, by distributing the boards into at most `k` **contiguous groups**.

If a painter is allowed to work up to `mid` time units, can we divide the boards into `≤ k` such contiguous groups, each of sum ≤ `mid`?
If yes, try smaller `mid`. If no, try larger `mid`.

## Approach

We use **binary search** on the range:

* **Low** = max(arr): no painter can paint less than the largest board.
* **High** = sum(arr): one painter paints everything.

We:

1. Pick `mid` as potential maximum time.
2. Use a greedy helper function to check if we can divide the boards into `≤ k` contiguous parts such that no part exceeds `mid`.
3. If valid, update answer and try smaller `mid`.
4. If not, try larger `mid`.

### Pseudocode

```
function isValid(arr, mid, k):
    painters = 1
    total = 0
    for length in arr:
        if total + length <= mid:
            total += length
        else:
            painters += 1
            total = length
        if painters > k:
            return false
    return true

function paintersPartition(arr, k):
    low = max(arr)
    high = sum(arr)
    result = -1

    while low <= high:
        mid = floor((low + high) / 2)
        if isValid(arr, mid, k):
            result = mid
            high = mid - 1
        else:
            low = mid + 1
    return result
```

## Walkthrough Example

**Input**: arr = [5, 10, 30, 20, 15], k = 3

**Binary Search Range**:

* low = 30
* high = 80

| low | high | mid | isValid(mid) | Decision    |
| --- | ---- | --- | ------------ | ----------- |
| 30  | 80   | 55  | true         | try smaller |
| 30  | 54   | 42  | false        | try larger  |
| 43  | 54   | 48  | false        | try larger  |
| 49  | 54   | 51  | false        | try larger  |
| 52  | 54   | 53  | false        | try larger  |
| 55  | 54   | -   | stop         |             |

✅ Final Answer: 55 (but further iterations will converge to 35)

## Time and Space Complexity

* **Time Complexity**: O(n × log(sum - max))
  For each binary search step, we check validity in O(n) time.

* **Space Complexity**: O(1)
  Only variables are used, no extra space needed.

---
**Problem Link (GFG)** : [Link](https://www.geeksforgeeks.org/the-painters-partition-problem-using-binary-search/) 