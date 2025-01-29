### *What You Should Focus On*
1. *Understand Core Patterns* → Learn a few *high-impact patterns* really well.  
2. *Recognize When to Use Them* → Train yourself to *identify* problems where a pattern applies.  
3. *Practice Applying Patterns* → Solve problems using *patterns instead of brute force*.  

###  *Essential Patterns You Must Know*
 *Sliding Window* → Optimize problems with contiguous subarrays/substrings  
 *Two Pointers* → Efficiently solve problems in sorted arrays  
 *Fast & Slow Pointers* → Detect cycles, find midpoints in linked lists  
 *Merge Intervals* → Solve overlapping interval problems  
 *Backtracking* → Generate all possible solutions (subsets, permutations)  
 *Binary Search* → Search efficiently in sorted arrays (*O(log n)*)  
 *Recursion & Divide and Conquer* → Solve complex problems by breaking them down  
 *Dynamic Programming* → Optimize overlapping subproblems (Fibonacci, Knapsack)  
 *Graph Traversal (DFS/BFS)* → Explore graphs, trees, and shortest paths  

## *What Are Problem-Solving Patterns?*
A *pattern* is a *general approach or strategy* that can be applied to solve multiple problems efficiently. 

### 1. Sliding Window Pattern
The *Sliding Window* pattern is used for *problems involving contiguous sequences* in an array or string. Instead of using *nested loops (O(n²)), we use a **window that slides* through the data in *O(n)* time.  

*When to use it?*
- *Maximum/Minimum sum of subarrays of fixed size k*
- *Longest substring with unique characters*
- *Smallest subarray with a given sum*
- *Maximum number of ones in a subarray*

#### *Example: Maximum Sum of Subarray of Size K*
Find the maximum sum of any subarray of size k.  
*Brute force (O(n²))* → Check all subarrays  
*Optimized (O(n))* → Use a *sliding window*  
  ```
  function maxSubarraySum(arr, k) {
      let maxSum = 0, windowSum = 0;
      // Initialize the first window
      for (let i = 0; i < k; i++) {
          windowSum += arr[i];
      }
      maxSum = windowSum;
      // Slide the window across the array
      for (let i = k; i < arr.length; i++) {
          windowSum += arr[i] - arr[i - k];  // Slide the window forward
          maxSum = Math.max(maxSum, windowSum);
      }
      return maxSum;
  }
  console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
  ```
*Why use Sliding Window?* : Instead of recalculating the sum for every subarray, we *reuse previous calculations*.  

### 2. Two Pointers Pattern
The *Two Pointers* pattern is used to *reduce nested loops* by *moving two pointers in a linear fashion*. It can be applied to:
- Finding *pairs* in sorted arrays
- *Merging* sorted lists
- Checking *palindromes*
- Finding the *middle of a linked list*
- *Removing duplicates*

#### *Example: Finding a Pair with Target Sum*
Given a *sorted* array, find a pair that sums to target.  
*Brute force (O(n²))* → Use nested loops  
*Optimized (O(n))* → Use *two pointers*  
```
function findPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) { // 0, 4
        let sum = arr[left] + arr[right]; // sum: 7
        if (sum === target) return [arr[left], arr[right]];
        sum < target ? left++ : right--; // 7 < 6 then left++ i.e. 1;
    }
    return [];
}
console.log(findPairWithSum([1, 2, 3, 4, 6], 6)); // Output: [2, 4]
```
*Why use Two Pointers?*  : Instead of checking *all pairs (O(n²)), we **move pointers smartly* to find the answer in *O(n)*.

### 3. Fast & Slow Pointers (Tortoise & Hare)
A variation of the Two Pointers technique where:
- *One pointer moves fast*
- *One pointer moves slow*
This is used in *cyclic linked list problems, detecting loops, and finding the middle of a linked list.*
#### *Example: Detecting a Cycle in a Linked List*
```
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;         // Move one step
        fast = fast.next.next;    // Move two steps
        if (slow === fast) return true; // Cycle detected
    }
    return false;
}
// Creating a cycle for testing
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head.next;  // Cycle
console.log(hasCycle(head)); // Output: true
```
*Why use Fast & Slow Pointers?* : Instead of *tracking visited nodes (O(n) space), it **detects cycles in O(n) time & O(1) space*.

### 4. Merge Intervals Pattern
Used when *dealing with overlapping intervals*, such as:
- *Merging intervals*
- *Finding free time slots*
- *Employee work schedules*
#### *Example: Merging Overlapping Intervals*
Given [[1,3], [2,6], [8,10], [15,18]], merge overlapping intervals.
```
function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);  // Sort by start time
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let prev = result[result.length - 1], curr = intervals[i];
        if (prev[1] >= curr[0]) {  // Overlapping case
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            result.push(curr);
        }
    }
    return result;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
```
*Why use Merge Intervals?* : *Sorting + merging* gives an optimal *O(n log n)* solution.

### 5. Backtracking Pattern
Backtracking is used for problems where you try all possible choices and *undo* if a choice leads to failure.  
- *Combinations (e.g., subsets, permutations)*
- *Sudoku Solver*
- *N-Queens Problem*
- *Word Search in a Grid*
#### *Example: Finding All Subsets*
```
function findSubsets(nums, index = 0, path = [], result = []) {
    result.push([...path]); // Add current subset

    for (let i = index; i < nums.length; i++) {
        path.push(nums[i]);  // Choose
        findSubsets(nums, i + 1, path, result);  // Explore
        path.pop();  // Undo choice
    }

    return result;
}
console.log(findSubsets([1, 2, 3])); // Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
```
✅ *Why use Backtracking?* : Explores all possible solutions but *prunes* unnecessary paths.

