
# [![LeetCode](https://img.shields.io/badge/LeetCode-1207-green)](https://leetcode.com/problems/unique-number-of-occurrences/) Unique Number of Occurrences

## Problem Statement

Given an array of integers `arr`, return `true` if the number of occurrences of each value in the array is **unique**, or `false` otherwise.

## Input

* `arr`: An array of integers.

  * `1 <= arr.length <= 1000`
  * `-1000 <= arr[i] <= 1000`

## Output

* A boolean value (`true` or `false`).

## Examples

### Example 1

**Input:** arr = \[1,2,2,1,1,3]  
**Output:** true    
**Explanation:**
* 1 occurs 3 times
* 2 occurs 2 times
* 3 occurs 1 time
  All occurrence counts are unique.

### Example 2

**Input:**  arr = \[1,2]    
**Output:** false   
**Explanation:**
* 1 occurs 1 time
* 2 occurs 1 time
  Occurrence counts are not unique.

### Example 3

**Input:**  arr = \[-3,0,1,-3,1,1,1,-3,10,0]    
**Output:** true    

## Intuition

We need to check if the **frequencies** of all elements in the array are unique. This means:

1. Count how many times each element occurs.
2. Check that no two elements have the same count.

## Approach

### Tags
Hash Table , Set

### Steps

1. **Count frequencies**: Use a hash map to record how many times each element occurs.
2. **Check for unique counts:** Use a set to check if any counts repeat.
3. Return `true` if all counts are unique; otherwise, return `false`.

### Pseudocode

```
Initialize freqMap as an empty hash map
For each num in arr:
    freqMap[num] = freqMap.get(num, 0) + 1

Initialize freqSet as an empty set
For each frequency in freqMap.values():
    If frequency is already in freqSet:
        Return false
    Add frequency to freqSet

Return true
```

## Walkthrough Example

**Input:**
arr = \[1,2,2,1,1,3]

**Step 1:** Count frequencies   
1 → 3 times, 2 → 2 times, 3 → 1 time

**Step 2:** Check uniqueness    
Frequency set: {3, 2, 1} → all unique

**Output:**
true

## Data Evolution

| Step    | Data                   |
| ------- | ---------------------- |
| Initial | arr = \[1,2,2,1,1,3]   |
| freqMap | {1: 3, 2: 2, 3: 1}     |
| freqSet | {3, 2, 1} (all unique) |
| Output  | true                   |

## Time and Space Complexity

* **Time Complexity:** O(n), where n is the length of arr   
  * One pass to count frequencies
  * One pass to check uniqueness
* **Space Complexity:** O(n)
  * For the hash map and set
