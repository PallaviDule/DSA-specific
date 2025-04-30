### Essential Patterns You Must Know
These patterns cover the majority of coding interview problems. Mastering them helps you tackle DSA questions with confidence.

| Pattern                 | When to Use                                                                 | Time Complexity  | Notes                                                              |
|------------------------|------------------------------------------------------------------------------|------------------|--------------------------------------------------------------------|
| [Sliding Window](#sliding-window-pattern)         | Contiguous subarrays/substrings (e.g., max sum, longest unique substring)   | O(n)             | Replace nested loops when window can slide                        |
| [Two Pointers ](#two-pointers-pattern)          | Sorted arrays, merging, palindromes, partitioning                           | O(n)             | One pointer starts from each end or side-by-side                  |
| Fast & Slow Pointers   | Linked list cycles, midpoint, detecting intersection                         | O(n)             | Tortoise and Hare approach                                         |
| Merge Intervals        | Scheduling, overlapping intervals                                             | O(n log n)       | Sort + one-pass merge                                              |
| Backtracking           | Permutations, combinations, subset generation                                | O(N!) or 2^N     | DFS style recursion tree; prune invalid branches                  |
| [Binary Search](#binary-search-pattern)          | Search in sorted arrays, partitions                                          | O(log n)         | Powerful when array is monotonic or sorted                        |
| Recursion & Divide/Conquer | Break problems into subproblems, combine solutions                     | Varies           | QuickSort, MergeSort, etc.                                         |
| Dynamic Programming    | Optimal substructure, overlapping subproblems                                | O(n), O(n^2), etc | Think in terms of states and transitions                         |
| Graph Traversal (DFS/BFS) | Explore graphs, trees, grid-based problems                             | O(V+E)           | DFS = backtracking style, BFS = level-order                        |
| Heap / Priority Queue  | Find Kth smallest/largest, stream median                                     | O(log k) per op  | Great for top-K problems                                           |
| Union Find / Disjoint Set | Connected components, cycle detection (graphs)                          | O(α(n))          | Very efficient with path compression and union by rank            |

---

### Sliding Window Pattern
Used for *problems involving contiguous sequences* (subarrays or substrings). Eliminates nested loops by maintaining a moving window.

**When to Use:**
- Max/min sum subarray of size k
- Longest substring without repeating characters
- Smallest subarray with a given sum

**Trick:** Keep track of current window and slide by removing leftmost and adding rightmost elements.

**Example:** Maximum Sum of Subarray of Size K
```js
function maxSubarraySum(arr, k) {
    let maxSum = 0, windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
```

---

### Two Pointers Pattern
Optimizes nested loops when data is sorted or when dealing with sequences from both ends.

**When to Use:**
- Sorted arrays
- Merge operations
- Remove duplicates
- Palindrome checking

**Trick:** Move pointers based on comparison (left++, right--, etc.)

**Example:** Pair With Target Sum
```js
function findPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return [arr[left], arr[right]];
        sum < target ? left++ : right--;
    }
    return [];
}
```

---

### Fast & Slow Pointers (Tortoise & Hare)
Detects cycles or finds middle node without extra space.

**When to Use:**
- Cycle detection in linked list
- Find start of loop
- Find middle node

**Trick:** One pointer moves 1 step, another 2 steps

**Example:** Detect Linked List Cycle
```js
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
```

---

### Merge Intervals Pattern
Used for problems where *intervals may overlap*.

**When to Use:**
- Merge overlapping intervals
- Insert interval
- Employee free time

**Trick:** Sort by start, then compare and merge based on end values.

**Example:** Merge Overlapping Intervals
```js
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let prev = result[result.length - 1];
        let curr = intervals[i];
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            result.push(curr);
        }
    }
    return result;
}
```

---

### Backtracking Pattern
Explore all possible combinations via recursion. Often used in combinatorics.

**When to Use:**
- Subsets
- Permutations
- Combinations
- N-Queens / Sudoku / Word Search

**Trick:** Add, recurse, backtrack (remove last added)

**Example:** Generate Subsets
```js
function subsets(nums) {
    let result = [];
    function backtrack(start, path) {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return result;
}
```

---

### Binary Search Pattern
Efficient technique for problems on sorted arrays or monotonic functions.

**When to Use:**
- Search in sorted arrays
- Find boundaries (first/last occurrence)
- Partitioning problems (e.g., Median of Two Sorted Arrays)

**Trick:** Always check mid, move left or right half based on condition.

**Example:** Binary Search in Sorted Array
```js
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

---

### Recursion & Divide and Conquer
Solve large problems by solving smaller subproblems and combining their results.

**When to Use:**
- Divide data (e.g., sort, search)
- Recursive tree-based logic
- Base + recursive step problems

**Trick:** Think recursively: define base case + break down problem

**Example:** Merge Sort
```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```
