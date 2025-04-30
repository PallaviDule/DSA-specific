## 4. Median of Two Sorted Arrays

## Problem Statement
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.
### What is the *median*?
The **median** is the middle value in a sorted array:
- If the total number of elements is **odd**, the median is the **middle** element.
- If the total number of elements is **even**, the median is the **average of the two middle** elements.

## Input Constraints
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## Output
- A single number representing the median value. If the total number of elements is even, return the average of the two middle numbers.

## Examples
**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5
```

## Encouragement Before You Peek 🙀
Try solving it using binary search. Focus on minimizing the search space over the smaller array. Think in terms of partitioning both arrays such that elements on the left are less than or equal to those on the right.

## Approach
[GFG explanation with different approaches](https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/)    
To meet the `O(log(min(m, n)))` requirement:

- We mainly maintain two sets in this algorithm by doing binary search in the smaller array. 
- Let mid1 be the partition of the smaller array. The first set contains elements from 0 to (mid1 – 1) from smaller array. 
- mid2 = ((n + m + 1) / 2 – mid1) elements from the greater array to make sure that the first set has exactly (n+m+1)/2 elements. The second set contains remaining half elements.
- Our target is to find a point in both arrays such that all elements in the first set are smaller than all elements in the elements in the other set (set that contains elements from right side). 
- For this we validate the partitions using the same way as we did in Median of two sorted arrays of same size.

### Overall Approach Before Writing the Code:
**1. Understand the Problem and Constraints**
   - The two arrays are sorted.
   - You need to find the **median** of both arrays combined.
     - If the combined array has an **odd length**, the median is the middle element.
     - If the combined array has an **even length**, the median is the average of the two middle elements.
   - The goal is to find the median **in O(log(min(n, m))) time**, where `n` and `m` are the lengths of the two arrays. This suggests using **binary search** to reduce time complexity.

**2. Key Insight: Binary Search on the Smaller Array**
   - Instead of merging the arrays (which would take linear time), we can use **binary search** on the smaller of the two arrays to find the correct "partition" point.
   - The idea is to partition both arrays such that:
     - The left half contains half of the elements from both arrays combined.
     - The right half contains the remaining elements.
   - This partition will allow us to find the median without merging the arrays.    

**3. Partition Logic:**
   - The **partition** should divide the two arrays in such a way that:
     - The number of elements on the left side of the partition is either equal to or one more than the number of elements on the right side (depending on whether the total length is odd or even).
   
   - You need to find:
     - **The largest element on the left side** of the partition.
     - **The smallest element on the right side** of the partition.
   
   - The partition must be valid:
     - The largest element on the left side should be smaller than or equal to the smallest element on the right side.

**4. Binary Search:**
   - To find the correct partition, you can use **binary search** on the smaller array:
     1. Start by partitioning the smaller array (`nums1`) and calculate where the partition in the larger array (`nums2`) should be based on the total number of elements.
     2. At each step of the binary search, you will adjust the partition in `nums1` to ensure that the partition is valid (i.e., elements on the left side are smaller than elements on the right).
     3. If the partition is valid, compute the median.
     4. If the partition is not valid, adjust the partition to the left or right and repeat.

**5. Edge Cases:**
   - Handle edge cases where one of the arrays is empty.
   - Ensure that when calculating the partition, you properly handle the boundaries of the arrays (e.g., using `Infinity` or `-Infinity` when there are no elements on one side of the partition).

**6. Steps to Solve:**
   1. **Identify the smaller array** (to minimize binary search effort).
   2. **Initialize binary search bounds** on the smaller array.
   3. **Partition** both arrays such that:
      - The total number of elements on the left side of both arrays equals the total number of elements on the right side (or differs by 1 if the total length is odd).
   4. **Check if the partition is valid**:
      - Ensure the left side elements are less than or equal to the right side elements.
   5. If valid, **compute the median**.
   6. If invalid, **adjust the partition** (move binary search bounds).

**7. Median Calculation:**
   - If the partition is valid:
     - If the total length is **odd**, the median is the maximum of the left side.
     - If the total length is **even**, the median is the average of the maximum of the left side and the minimum of the right side.

## Walkthrough Example
**Example:** `nums1 = [1, 3], nums2 = [2]`
- Total length = 3 → odd
- We binary search on nums1

## Iteration / Data Evolution:
| midNums1 | midNums2 | maxLeftNums1 | minRightNums1 | maxLeftNums2 | minRightNums2 |
|------------|-------------|-----------|-------------|-----------|-------------|
|     1      |      1      |     1     |     3       |     2     |   ∞         |

## Action:
- Since `maxLeftNums1 (1) <= minRightNums2 (∞)` and `maxLeftNums1 (2) <= minRightNums1 (3)`, we found the correct partition.
- Total length is odd → return `max(maxLeftX, maxLeftY)` = `max(1, 2)` = `2`

## Time and Space Complexity
- **Time:** `O(log(min(m, n)))`
- **Space:** `O(1)`


## Let's take one more example:   
Let's go through the binary search approach for finding the median of two sorted arrays with:

```js
nums1 = [1, 2, 3]
nums2 = [4, 5, 6]
```

### Step-by-Step Walkthrough

Since both arrays have equal length (3), either can be used for binary search. We'll use `nums1`.  
Let:  
```js
m = nums1.length = 3
n = nums2.length = 3
total = m + n = 6 (even)
```

### Iteration 1:
Let’s say we cut nums1 and nums2 like this:
- We are finding a position i in nums1 and j in nums2 such that:  `i + j = half of total length`
- Let’s try i = 0, so j = 3 - 0 = 3 (half of 6 is 3); or i = 1, so j = 3 - 1 = 2    

   ```js
   low = 0, high = 3
   midNum1 = Math.floor((0 + 3) / 2) = 1 (~1.5)
   midNum2 = 3 - 1 = 2 // Math.floor((m + n + 1) / 2) - partitionX;
   ```

- **For nums1:**
   - maxLeftNum1 = nums1[midNum1 - 1] = nums1[0] = 1 (This is the largest element on the left side of nums1).
   - minRightNum1 = nums1[midNum1] = nums1[1] = 2 (This is the smallest element on the right side of nums1).

- **For nums2:**
   - maxLeftNum2 = nums2[midNum2 - 1] = nums2[1] = 5 (This is the largest element on the left side of nums2).
   - minRightNum2 = nums2[midNum2] = nums2[2] = 6 (This is the smallest element on the right side of nums2).

- So,This means:
   - nums1 is split at index 1 → 
      Left part: [1], Right part: [2, 3]
   - nums2 is split at index 2 →
      Left part: [4, 5], Right part: [6]
   -  [1]   | [2,3]    
      [4,5] | [6]
- We need to check if the elements on the left are all smaller than the elements on the right:
   ```js
   maxLeftX (1) <= minRightY (6) → ✅
   maxLeftY (5) <= minRightX (2) → ❌
   ```

Too far left → move right:
```js
low = partitionX + 1 = 2
```
### 🔁 Iteration 2:

```js
partitionX = Math.floor((2 + 3) / 2) = 2
partitionY = 3 - 2 = 1 
```

Values:
- maxLeftX = nums1[1] = 2
- minRightX = nums1[2] = 3
- maxLeftY = nums2[0] = 4
- minRightY = nums2[1] = 5

✅ Check:
```js
maxLeftX (2) <= minRightY (5) → ✅  
maxLeftY (4) <= minRightX (3) → ❌
```

Still too far left → move right:
```js
low = partitionX + 1 = 3
```

### 🔁 Iteration 3:

```js
partitionX = 3
partitionY = 0
```

Values:
- maxLeftX = nums1[2] = 3
- minRightX = ∞
- maxLeftY = -∞
- minRightY = nums2[0] = 4

✅ Check:
```js
maxLeftX (3) <= minRightY (4) → ✅  
maxLeftY (-∞) <= minRightX (∞) → ✅
```

**Valid Partition Found!**

Total length is **even**, so:
```js
median = (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2  
       = (max(3, -∞) + min(∞, 4)) / 2  
       = (3 + 4) / 2 = 3.5
```

## Data Evolution Table

| Iteration | partitionX | partitionY | maxLeftX | minRightX | maxLeftY | minRightY | Action                            |
|-----------|------------|------------|----------|-----------|----------|-----------|-----------------------------------|
| 1         | 1          | 2          | 1        | 2         | 5        | 6         | maxLeftY > minRightX → shift right |
| 2         | 2          | 1          | 2        | 3         | 4        | 5         | maxLeftY > minRightX → shift right |
| 3         | 3          | 0          | 3        | ∞         | -∞       | 4         | Valid partition → return median  |

### Final Output: `3.5`
