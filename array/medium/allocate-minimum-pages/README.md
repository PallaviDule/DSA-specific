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
- **What’s the Problem Asking?**    
    You are given books, each with some number of pages. You need to give these books to students.

    * Every student **must get at least one book**.
    * Books given to a student must be **in a row** (contiguous).
    * You want to split the books **as fairly as possible** so that **the student with the most pages still has the smallest possible number**.

    This is like splitting work among students — make sure no one gets too much, and the one who gets the most should still get the least **possible**.
- **Where Does Binary Search Fit Here?**    
    - You don’t need to binary search the books. You **binary search the answer**.
    -  Yes, really — you binary search the possible values of the **maximum number of pages a student can be allowed**.
    * The answer lies between **max(arr)** and **sum(arr)**.
- **Why is the minimum possible pages = `max(arr)`?**   
Because:

    * Suppose one book has 90 pages. Even if a student is given just that book, they still need to read 90 pages.
    * So, **no matter how you split**, the answer can’t be **less than the maximum book**.
    * Example: `arr = [12, 34, 67, 90]`  
    You can’t give less than 90 to any student because someone has to read that 90-page book.
- **Why is the maximum possible pages = `sum(arr)`?**   
That’s the worst-case scenario — where you give **all books to one student**.

    * If only one student is there, they’ll get all books.
    * That’s the **upper bound** of how many pages any student might get.
    * Example: Sum of \[12, 34, 67, 90] = **203**   
    If 1 student → they read 203 pages.
- **So what’s the plan?**   
    - We search between `low = max(arr)` and `high = sum(arr)` to find the **smallest possible value of maximum pages** that works.
    - Each guess (mid) means:
        > Can we give books to all students such that **no one gets more than `mid` pages**?
    - If yes → try smaller `mid` (maybe we can do better!)
    - If no → increase `mid` (our guess was too small)
- **How Do We Check If a Guess Works?**     
    We simulate the distribution:

    * Start assigning books to one student. Keep adding up pages.
    * If total exceeds `mid`, give books to next student.
    * Keep count of how many students are needed.

        If we used ≤ `k` students → guess is **valid**  
        If we used > `k` students → guess is **not valid**
- **Repeat until we find the best (smallest) valid guess!** 

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

## Walkthrough Example

Let’s take:
`arr = [12, 34, 67, 90]`, `k = 2`

* min = max(arr) = 90
* max = sum(arr) = 203

Binary Search Steps:

* mid = (90+203)//2 = 146 → Try allocating with max 146
  → Yes: \[12,34,67], \[90]
  → Update result = 146, try smaller → end = 145

* mid = 117
  → Try \[12,34,67], \[90] → \[12+34+67=113] is OK, next 90 also fits
  → Total 2 students → Valid → result = 117, end = 116

* mid = 103
  → Try \[12,34], \[67], \[90] → Needs 3 students → Not valid → start = 104

* mid = 110 → Needs 3 students → Not valid → start = 111

* mid = 114 → Still 3 → Not valid → start = 115

* mid = 116 → Still 3 → Not valid → start = 117

* mid = 117 → Valid again → result = 117, end = 116 → stop

Final Answer: 117

Then retry:

* mid = 113 → Try \[12+34+67], \[90] → Valid
* Try smaller → end = 112
* mid = 101 → Invalid
* Eventually: smallest valid = 113

---

## Data Evolution

| mid | Allocation Valid? | Used Students | Notes                 |
| --- | ----------------- | ------------- | --------------------- |
| 146 | Yes               | 2             | Possible, try smaller |
| 117 | Yes               | 2             | Try smaller again     |
| 103 | No                | 3             | Try bigger            |
| 110 | No                | 3             |                       |
| 113 | Yes               | 2             | **Best so far**       |
| 112 | No                | 3             |                       |

---

## Time and Space Complexity

* **Time**: O(n log(sum - max)) → Binary search over range, O(n) for each validity check
* **Space**: O(1) extra — no additional data structures used

Let me know if you'd like this saved as a `.md` file or want the JS solution file included.
