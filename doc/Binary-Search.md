### **Core Binary Search Concept**
Binary search usually answers one of these:
1. **Does the target exist?** (e.g., exact match)
2. **What’s the best possible value that satisfies a condition?** (e.g., max/min value that still works)

### ✅ When to return `end`:
You return `end` when:
- You're looking for the largest value that satisfies a condition.
- The loop stops after overshooting the valid value (i.e., when `start > end`)
- `end` is still pointing to the **last valid candidate**
- This happens in problems like:
  - Example: `sqrt(x)`, where you're finding the greatest integer mid such that `mid*mid <= x`.
  - Binary search in range-based conditions (e.g., minimum/maximum satisfying values)

Your loop ends when `start > end`, meaning:
- `start` has moved just **past** the valid range
- So `end` is the last valid one

➡️ Hence, **return `end`**

### ✅ When to return `start`:
You return `start` when:
- You’re looking for the **lowest value that satisfies a condition**    
    - Example: Binary Search for First True, or lower bound.
- Or, `start` becomes the position where the desired target **should be inserted** or first appears
    - You move start = mid + 1 when mid is invalid (doesn’t satisfy condition).
    - At the end, start lands on the first valid value.

Typical examples:
- **Find the first index where `arr[i] >= target`**
- **Search Insert Position** type problems

➡️ Because the loop ends when `start == end + 1`, and `start` now points to the **smallest valid index**

### ✅ When to use a `result` variable:
- When you're testing some condition (like `mid * mid < x`) and you want to remember the best candidate so far
- This pattern is **safe**, especially if you're not 100% sure which pointer (`start` or `end`) holds the right answer

### ✅ Cheat Sheet Summary

| Goal                              | Return  | Why                                      |
|-----------------------------------|---------|-------------------------------------------|
| Find exact target                 | mid     | Return as soon as found                   |
| Find lowest valid index/value     | `start` | `start` ends up at the smallest valid     |
| Find highest valid index/value    | `end`   | `end` is last one that worked before overshoot |
| Best candidate seen during loop   | result  | When tracking valid values dynamically    |

### Example:

**Problem**: Find the square root of 8  
- We're searching for `max mid` where `mid * mid <= 8`  
- Mid: 2 → 4 ✅  
- Mid: 3 → 9 ❌  
- 2 is the highest `mid` where `mid * mid <= 8`  
- So loop ends at `start = 3, end = 2`  
- ➡️ Return `end = 2`

---

Let me know if you want this as a Markdown cheat sheet to keep in your repo!