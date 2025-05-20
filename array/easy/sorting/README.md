## Sorting Algorithms Comparison

## Problem Statement

Given an unsorted array of integers, sort it using different sorting algorithms to understand their behavior, time complexity, and performance. Implement and compare multiple classic sorting algorithms to sort the same input array.

## Input

* An array of integers (positive, negative, or zero)
* Length of array: `1 <= n <= 10^5`

## Output

* Sorted array (ascending order) produced by each algorithm

## Examples

Input:

```
[5, 2, 9, 1, 5, 6]
```

Output:

```
[1, 2, 5, 5, 6, 9]
```

### Encouragement Before You Peek 👀

Try to implement at least one of the algorithms on your own before jumping to the solutions. Pay close attention to how elements are compared and moved.

## Intuition

Sorting is a fundamental operation in computer science. Understanding various algorithms gives insight into algorithmic thinking, performance trade-offs, and memory usage. Each algorithm behaves differently on sorted, reverse-sorted, and random data.

## Approach

[Solution Here](./solution.js)

Each sorting algorithm is implemented as a separate function. The input array is cloned before sorting to preserve the original data.

### Bubble Sort

Compare adjacent elements and swap them if they are in the wrong order. Repeat this process until the array is sorted.

### Selection Sort

Find the minimum element in the unsorted part of the array and swap it with the first unsorted element. Repeat until the entire array is sorted.

### Insertion Sort

Build the sorted array one element at a time. For each element, insert it into the correct position among the elements already sorted.

### Merge Sort

Divide the array into two halves, recursively sort them, and then merge the two sorted halves into a single sorted array.

### Quick Sort

Pick a "pivot" element, partition the array so that elements < pivot come before it and > pivot come after, and recursively sort the subarrays.

### Heap Sort

Convert the array into a max heap, extract the maximum element, place it at the end, reduce heap size, and repeat.

## Pseudocode

```plaintext
BubbleSort(array):
  for i from 0 to n - 1:
    for j from 0 to n - i - 1:
      if array[j] > array[j + 1]:
        swap array[j] and array[j + 1]

SelectionSort(array):
  for i from 0 to n - 1:
    minIndex = i
    for j from i+1 to n:
      if array[j] < array[minIndex]:
        minIndex = j
    swap array[i] with array[minIndex]

... and so on for each algorithm
```

## Walkthrough Example

Input: `[5, 3, 8, 4, 2]`

### Bubble Sort

* Pass 1: `[3, 5, 4, 2, 8]`
* Pass 2: `[3, 4, 2, 5, 8]`
* Pass 3: `[3, 2, 4, 5, 8]`
* Pass 4: `[2, 3, 4, 5, 8]`

### Selection Sort

* Iteration 1: Find min (2), swap with 5 → `[2, 3, 8, 4, 5]`
* Iteration 2: Find min (3), already in place
* Iteration 3: Find min (4), swap with 8 → `[2, 3, 4, 8, 5]`
* Iteration 4: Find min (5), swap with 8 → `[2, 3, 4, 5, 8]`

### Insertion Sort

* Insert 3: `[3, 5, 8, 4, 2]`
* Insert 8: `[3, 5, 8, 4, 2]`
* Insert 4: shift 8 → `[3, 5, 4, 8, 2]`, then shift 5 → `[3, 4, 5, 8, 2]`
* Insert 2: shift all to make space → `[2, 3, 4, 5, 8]`

### Merge Sort

* Split: `[5, 3]` and `[8, 4, 2]`
* Sort `[5, 3]` → `[3, 5]`
* Sort `[8, 4, 2]` → `[2, 4, 8]`
* Merge: `[2, 3, 4, 5, 8]`

### Quick Sort

* Pivot = 2 → `[2 | 3, 8, 4, 5]`
* Sort `[3, 8, 4, 5]` → Pivot = 3 → `[3 | 4, 5, 8]`
* Continue sorting → Final: `[2, 3, 4, 5, 8]`

### Heap Sort

* Build max heap: `[8, 5, 4, 3, 2]`
* Extract 8, swap with end → `[2, 5, 4, 3] + [8]`
* Heapify → `[5, 3, 4, 2]`, extract 5 → `[2, 3, 4] + [5, 8]`
* Continue → Final sorted: `[2, 3, 4, 5, 8]`

## Data evolution

| Step           | Bubble Sort      | Selection Sort   | Insertion Sort   |
| -------------- | ---------------- | ---------------- | ---------------- |
| Initial        | \[5, 3, 8, 4, 2] | \[5, 3, 8, 4, 2] | \[5, 3, 8, 4, 2] |
| After 1st pass | \[3, 5, 4, 2, 8] | \[2, 3, 8, 4, 5] | \[3, 5, 8, 4, 2] |
| After 2nd pass | \[3, 4, 2, 5, 8] | \[2, 3, 4, 8, 5] | \[3, 4, 5, 8, 2] |
| Final sorted   | \[2, 3, 4, 5, 8] | \[2, 3, 4, 5, 8] | \[2, 3, 4, 5, 8] |

## Time and Space Complexity

| Algorithm      | Time Complexity (Best/Average/Worst) | Space Complexity | Notes                              |
| -------------- | ------------------------------------ | ---------------- | ---------------------------------- |
| Bubble Sort    | O(n) / O(n²) / O(n²)                 | O(1)             | Stable, in-place, slow for large n |
| Selection Sort | O(n²) / O(n²) / O(n²)                | O(1)             | Not stable, in-place               |
| Insertion Sort | O(n) / O(n²) / O(n²)                 | O(1)             | Good for nearly-sorted arrays      |
| Merge Sort     | O(n log n) / O(n log n) / O(n log n) | O(n)             | Stable, not in-place               |
| Quick Sort     | O(n log n) / O(n log n) / O(n²)      | O(log n)         | Not stable, very fast in practice  |
| Heap Sort      | O(n log n) / O(n log n) / O(n log n) | O(1)             | Not stable, in-place               |
