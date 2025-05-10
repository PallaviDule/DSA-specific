## 11. Container With Most Water

## Problem Statement
You are given an integer array `height` of length `n`. There are `n` vertical lines such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i])`.

Find two lines that, together with the x-axis, form a container that holds the most water.

Return the maximum amount of water a container can store.

**Note**: You may not slant the container.

## Input
- An array `height` of length `n`

### Constraints
- `2 <= height.length <= 10^5`
- `0 <= height[i] <= 10^4`

## Output
- Return a single integer representing the maximum amount of water that can be stored.

## Examples

### Example 1:
Input: `height = [1,8,6,2,5,4,8,3,7]`
Output: `49`

### Example 2:
Input: `height = [1,1]`
Output: `1`

### Encouragement Before You Peek 👀
Try to identify the pattern or constraint that allows you to avoid checking every pair of lines (which would be too slow). Think about whether two pointers from opposite ends might help.

## Intuition
If we brute-force by checking every pair of lines, we will get a correct answer but at a huge time cost (`O(n^2)`).

Instead, we can use a **greedy** strategy combined with the **two-pointer** technique. We start with two pointers at the far ends and move the one pointing to the shorter line inward, hoping to find a taller line that can form a larger container.

Why move the shorter side? Because the area is limited by the shorter height. Moving the taller side won't help unless the shorter side increases.

## Approach
[Solution Here](./solution.js)

1. Initialize two pointers: one at the beginning (`start`) and one at the end (`end`) of the array.
2. Compute the area formed between the lines at `start` and `end`.
3. Track the maximum area found so far.
4. Move the pointer pointing to the shorter line inward.
5. Repeat steps 2-4 until the two pointers meet.

### Pseudocode
```
start = 0
end = height.length - 1
maxStorage = 0

while start < end:
    width = end - start
    if height[start] < height[end]:
        storage = height[start] * width
        start += 1
    else:
        storage = height[end] * width
        end -= 1
    maxStorage = max(maxStorage, storage)

return maxStorage
```

## Walkthrough Example
Given: `height = [1,8,6,2,5,4,8,3,7]`

- Start = 0, End = 8 → min(1,7) * (8-0) = 1 * 8 = 8
- Move start → 1
- Start = 1, End = 8 → min(8,7) * (8-1) = 7 * 7 = 49 ✅
- maxStorage = 49
- Now try different combinations by moving shorter height inward.

Eventually, max area remains 49.

## Data evolution (should be table)
| Start | End | Height[start] | Height[end] | Width | Area | Max Area |
|-------|-----|----------------|--------------|--------|------|-----------|
| 0     | 8   | 1              | 7            | 8      | 8    | 8         |
| 1     | 8   | 8              | 7            | 7      | 49   | 49        |
| 1     | 7   | 8              | 3            | 6      | 18   | 49        |
| 1     | 6   | 8              | 8            | 5      | 40   | 49        |
| 1     | 5   | 8              | 4            | 4      | 16   | 49        |
...and so on

## Time and Space Complexity
- **Time Complexity**: O(n) — Each element is visited at most once by the two pointers.
- **Space Complexity**: O(1) — We use constant extra space.
