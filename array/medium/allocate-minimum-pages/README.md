# Allocate Minimum Pages

## Problem Statement

You are given an array `arr[]` of integers, where each element `arr[i]` represents the number of pages in the `i`th book.
You also have an integer `k` representing the number of students.

The task is to allocate books to each student such that:

* Each student receives **at least one book**.
* Each student is assigned a **contiguous sequence of books**.
* **No book** is assigned to more than one student.

The goal is to **minimize the maximum number of pages assigned to any student**.

If allocation is not possible, return `-1`.

## Input

* An integer array `arr[]` where `1 <= arr.length <= 10^6`
* `1 <= arr[i] <= 10^3`
* An integer `k` where `1 <= k <= 10^3`

## Output

* The minimum possible value of the maximum number of pages assigned to a student.
* Return `-1` if valid allocation is not possible.

## Examples

### Example 1

**Input:** arr = \[12, 34, 67, 90], k = 2
**Output:** 113
**Explanation:**
Possible allocations:

* \[12], \[34, 67, 90] → Max = 191
* \[12, 34], \[67, 90] → Max = 157
* \[12, 34, 67], \[90] → Max = 113 ← ✅ Minimum among all

### Example 2

**Input:** arr = \[15, 17, 20], k = 5
**Output:** -1
**Explanation:** We have only 3 books and 5 students — allocation not possible.

### Example 3

**Input:** arr = \[22, 23, 67], k = 1
**Output:** 112
**Explanation:** All books to one student → sum of pages = 112

### Encouragement Before You Peek 👀

Try solving by thinking:

* Can you use Binary Search on the answer?
* What would you search over — indices or page values?
* How would you validate a possible answer?

---

## Intuition

We want to **minimize the maximum pages** assigned to any student.
That’s a strong hint to apply **Binary Search on the answer space**.

Why? Because:

* The answer lies between **max(arr)** and **sum(arr)**.
* If we can **check whether a certain page limit is possible**, we can use that as a condition to shrink our range.

---

## Approach

[Solution Here](./solution.js)

1. Set the search boundaries:

   * `low = max(arr)` → no student can get fewer pages than the largest book.
   * `high = sum(arr)` → one student gets all books.
2. Perform Binary Search between `low` and `high`:

   * Mid represents the **maximum pages allowed per student**.
   * Check if it's **possible** to assign books such that no student gets more than `mid` pages.
3. If possible → try smaller max → `high = mid - 1`.
4. If not possible → try larger max → `low = mid + 1`.

---

### Pseudocode

```
function isPossible(arr, students, maxPages):
    count = 1
    pagesSum = 0
    for each page in arr:
        if pagesSum + page <= maxPages:
            pagesSum += page
        else:
            count += 1
            pagesSum = page
            if count > students:
                return false
    return true

function findMinimumPages(arr, k):
    if k > arr.length:
        return -1
    low = max(arr)
    high = sum(arr)
    result = -1

    while low <= high:
        mid = Math.floor((low + high) / 2)
        if isPossible(arr, k, mid):
            result = mid
            high = mid - 1
        else:
            low = mid + 1
    return result
```

---

## Walkthrough Example

For `arr = [12, 34, 67, 90]`, `k = 2`:

* Total pages = 203
* Start binary search between `90` and `203`
* Mid = 146 → possible? Yes
* Try smaller → Mid = 118 → Yes
* Try smaller → Mid = 104 → No
* Mid = 111 → No
* Mid = 114 → No
* Mid = 116 → No
* Mid = 117 → No
* Mid = 118 → No
* Mid = 119 → No
* Back to mid = 113 → Yes ← best possible

---

## Data Evolution

| Iteration | low | high | mid | isPossible | result  |
| --------- | --- | ---- | --- | ---------- | ------- |
| 1         | 90  | 203  | 146 | Yes        | 146     |
| 2         | 90  | 145  | 117 | No         | 146     |
| 3         | 118 | 145  | 131 | Yes        | 131     |
| ...       | ... | ...  | ... | ...        | ...     |
| Final     |     |      |     |            | **113** |

---

## Time and Space Complexity

* **Time Complexity:** `O(n * log(sum - max))`

  * `n` for checking feasibility
  * `log(sum - max)` for binary search iterations
* **Space Complexity:** `O(1)`

  * Constant extra space used
