Here is the `README.md` content for **LeetCode 169: Majority Element**, following your preferred structure:

---

## 169. Majority Element

## Problem Statement

Given an array `nums` of size `n`, return the **majority element**.
The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

## Input

* `nums`: array of integers
* `1 <= nums.length <= 5 * 10⁴`
* `-10⁹ <= nums[i] <= 10⁹`

## Output

* Integer — the majority element in the array

## Examples

```text
Input: nums = [3,2,3]  
Output: 3  

Input: nums = [2,2,1,1,1,2,2]  
Output: 2  
```

---

### Encouragement Before You Peek 👀

Try solving it using **linear time and constant space**. Think about **canceling out elements** that are not majority.

# Intuition

Since the majority element appears more than `n / 2` times, all other elements together cannot outvote it.
Use **Boyer-Moore Voting Algorithm** to efficiently find the majority in O(n) time and O(1) space.

# Approach

* Initialize `count = 0` and `candidate = None`.
* Traverse the array:

  * If `count == 0`, set `candidate = current number`.
  * If current number == candidate, increment count.
  * Else, decrement count.
* At the end, `candidate` will be the majority element.

### Pseudocode

```
set count = 0  
set candidate = None  

for each number in nums:  
    if count == 0:  
        candidate = number  
    if number == candidate:  
        count += 1  
    else:  
        count -= 1  

return candidate
```

## Walkthrough Example

Input: `[2,2,1,1,1,2,2]`

* Step 1: candidate = 2, count = 1
* Step 2: 2 == 2 → count = 2
* Step 3: 1 != 2 → count = 1
* Step 4: 1 != 2 → count = 0
* Step 5: count == 0 → candidate = 1, count = 1
* Step 6: 2 != 1 → count = 0
* Step 7: count == 0 → candidate = 2, count = 1
  Result: candidate = 2

## Data evolution

| Step | num | candidate | count | Action                     |
| ---- | --- | --------- | ----- | -------------------------- |
| 1    | 2   | 2         | 1     | count was 0, set candidate |
| 2    | 2   | 2         | 2     | match, count++             |
| 3    | 1   | 2         | 1     | no match, count--          |
| 4    | 1   | 2         | 0     | no match, count--          |
| 5    | 1   | 1         | 1     | count was 0, set candidate |
| 6    | 2   | 1         | 0     | no match, count--          |
| 7    | 2   | 2         | 1     | count was 0, set candidate |

## Time and Space Complexity

* **Time**: O(n) — One pass through array
* **Space**: O(1) — No extra data structures used
