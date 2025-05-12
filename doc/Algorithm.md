## Kadane's Algorithm

- ### Basic Intuition

    Imagine you’re **walking through the array** from left to right. At every step, you have a choice:
    1. **Extend the previous subarray** by adding the current number  
    (i.e., “keep going” with the current sum)
    2. **Start fresh from the current number**  
    (i.e., “cut off” the old sum if it becomes a burden)

    You always want to do **whatever gives a higher sum**.


    > If the **current sum drops below zero**, it can only hurt future results. So **you drop it** and **start fresh** from the next number.

- ### What Do You Track?
    Two things:
    - **Current Sum** – What is the best subarray sum **ending here**?
    - **Max Sum** – What is the best sum you've seen **so far**?

- ### Visual Walkthrough (Intuitive Example)
    ```
    Array: [5, -2, -3, 7, -1, 4]
    ```

    1. Start with `5` → good start   → max is 5
    2. Add `-2` → `5 + (-2) = 3` → still good → max = 5, currSum = 3
    3. Add `-3` → `3 + (-3) = 0` → okay
    4. Add `7` → `0 + 7 = 7` → new high!
    5. Add `-1` → `7 - 1 = 6` → still good
    6. Add `4` → `6 + 4 = 10` → boom!

    Maximum sum found: **10**

- ### Summary

    - Kadane’s is about **continuous subarrays**
    - It tracks **current local sum** and **max global sum**
    - If your current sum goes negative, **restart**
    - It runs in **O(n)** time with **O(1)** space

## Boyer-Moore Voting Algorithm

To **identify the majority element** — one that appears more than half the time in a list of elements.

- ### Core Intuition

    Let’s imagine each element in the array is a "vote" for a candidate. The **majority element has more than 50% of the total votes**, so **even if every other element votes against it**, it **cannot be defeated**.

    So instead of counting frequency of all elements, we:

    * Assume one candidate
    * Increase its count when we see support
    * Decrease count when we see opposition
    * Reset candidate when our current one is weakened to zero

    Over time, since the majority element appears more than all others combined, it survives all cancellations.

- ### Core Logic
    We use two variables:
    * `candidate` → our current guess for majority element
    * `count` → how many votes it has left

    We iterate through the array and apply rules:
    1. **If count is 0**, we **choose a new candidate** (we reset our belief).
    2. **If current element == candidate**, we **increase the vote**.
    3. **If current element ≠ candidate**, we **decrease the vote** (a vote against).

    Since the majority element has a net advantage, it will be the last one left with count > 0 after all cancellations.

- ### Why It Works
    Imagine this:
    * The majority element occurs `> n/2` times.
    * Every time we reduce `count`, it's because we matched it against a different element.
    * The maximum number of such mismatches is `< n/2` (because others are in the minority).
    * So **after all cancel-outs, the majority element must survive**.

    It’s like pairing off each majority occurrence with a minority occurrence. Since majority > minority, something from the majority will remain unmatched.

- ### Time and Space Complexity
    * **Time**: O(n) → One linear pass
    * **Space**: O(1) → Only two variables


- ### When to Use
    Use Boyer-Moore Voting Algorithm when:
    * You are **guaranteed that a majority element exists**
    * You want a **space-efficient** (constant space) and **fast** (linear time) solution
    * You need to avoid maps, sorting, or extra arrays


## Sorting Algorithm
These algorithms are used to arrange data in a particular order, either ascending or descending. Sorting is one of the most fundamental tasks in computer science, and various algorithms offer different trade-offs in terms of performance.

### 1. **Bubble Sort**

- **When to use**: Not efficient for large datasets, but simple to understand and implement.
- **One-line Explanation**: Repeatedly swap adjacent elements if they are in the wrong order.
- **Code Example**:
    ```javascript
    const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        }
        }
    }
    return arr;
    };

    console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
    ```

- **Time Complexity**:
    * Worst: O(n²)
    * Best: O(n) (if the array is already sorted)

- **Space Complexity**: O(1) (In-place)

### 2. **Selection Sort**
- **When to use**: Suitable for small datasets; not efficient for large datasets.
- **One-line Explanation**: Find the smallest (or largest) element from the unsorted portion of the array and swap it with the first unsorted element.
- **Code Example**:
    ```javascript
    const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap
    }
    return arr;
    };

    console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
    ```

- **Time Complexity**:

    * Worst: O(n²)
    * Best: O(n²)

- **Space Complexity**: O(1) (In-place)


### 3. **Insertion Sort**
- **When to use**: Efficient for small datasets or nearly sorted arrays.
- **One-line Explanation**: Build the sorted array one item at a time by repeatedly inserting the next element into the correct position.
- **Code Example**:

    ```javascript
    const insertionSort = (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        }
        arr[j + 1] = key;
    }
    return arr;
    };

    console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
    ```

- **Time Complexity**:
    * Worst: O(n²)
    * Best: O(n) (if the array is already sorted)

- **Space Complexity**: O(1) (In-place)

### 4. **Merge Sort** (Divide & Conquer)
- **When to use**: Efficient for large datasets; provides consistent O(n log n) performance.
- **One-line Explanation**: Split the array into halves, recursively sort each half, and merge them back together.

**Code Example**:

```javascript
const merge = (left, right) => {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
};
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

- **Time Complexity**:
    * Worst: O(n log n)
    * Best: O(n log n)

- **Space Complexity**: O(n) (Auxiliary space)

### 5. **Quick Sort** (Divide & Conquer)

- **When to use**: Efficient for large datasets with an average time complexity of O(n log n).

- **One-line Explanation**: Pick a pivot, partition the array around it, then recursively sort the subarrays.

- **Code Example**:
    ```javascript
    const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
    };

    console.log(quickSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
    ```

- **Time Complexity**:
    * Worst: O(n²)
    * Best: O(n log n)

- **Space Complexity**: O(log n) (in-place, recursive)

### 6. **Heap Sort**

- **When to use**: Ideal for cases where constant time access to the largest/smallest element is required.

- **One-line Explanation**: Use a binary heap data structure to iteratively build the sorted array.

- **Code Example**:

    ```javascript
    const heapify = (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        heapify(arr, n, largest);
    }
    };

    const heapSort = (arr) => {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
        heapify(arr, i, 0);
    }

    return arr;
    };

    console.log(heapSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
    ```

- **Time Complexity**:

    * Worst: O(n log n)
    * Best: O(n log n)

- **Space Complexity**: O(1) (in-place)

### 7. Summary of Sorting Algorithms

| Algorithm      | Time Complexity (Worst) | Time Complexity (Best) | Space Complexity |
| -------------- | ----------------------- | ---------------------- | ---------------- |
| Bubble Sort    | O(n²)                   | O(n)                   | O(1)             |
| Selection Sort | O(n²)                   | O(n²)                  | O(1)             |
| Insertion Sort | O(n²)                   | O(n)                   | O(1)             |
| Merge Sort     | O(n log n)              | O(n log n)             | O(n)             |
| Quick Sort     | O(n²)                   | O(n log n)             | O(log n)         |
| Heap Sort      | O(n log n)              | O(n log n)             | O(1)             |


## Sieve of Eratosthenes
The **Sieve of Eratosthenes** is a classic and efficient algorithm used to find **all prime numbers up to a given number `n`**.

- ### What does it solve?
    It identifies all **prime numbers** less than or equal to a given number `n`.
- ### When to use it?
    * When you need **all primes ≤ n**
    * When `n` is large (e.g., up to 10⁶ or more) and you want better performance than checking each number individually.
- ### One-line explanation
    It marks multiples of each prime starting from 2, so that only primes remain unmarked.
- ### Intuition
    * Every composite number can be written as a multiple of a smaller prime.
    * So, by marking all multiples of each prime, we eliminate all composites.
- ### How it works (Steps)

    1. Create a boolean array `isPrime[0...n]` and initialize all entries as `true` (except 0 and 1).
    2. Starting from `i = 2`, mark all multiples of `i` as `false`.
    3. Move to the next number that is still `true` and repeat step 2.
    4. Continue up to `√n`, since higher multiples would already have been marked.
    5. The remaining `true` values are prime numbers.
- ### Basic Code Example
    ```js
    function sieve(n) {
        let isPrime = new Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false;

        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        return isPrime.map((val, idx) => val ? idx : -1).filter(x => x !== -1);
    }
    ```
- ### Time and Space Complexity
    * **Time:** `O(n log log n)`    
        Each prime i crosses out approximately n/i numbers. The sum of all these operations over all primes ≤ n results in O(n log log n).
        - Let's break it down:  
            - n is the size of the input.     
            - log log n is the logarithm of the logarithm of n — it grows very, very slowly.
        - O(n log log n) is much faster for large n because log(log n) grows so slowly.
    * **Space:** `O(n)`

