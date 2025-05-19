# AGGRCOW - Aggressive cows

## Problem Statement

Farmer John has built a new long barn, with N (2 ≤ N ≤ 100,000) stalls. The stalls are located along a straight line at positions x₁ ... xₙ (0 ≤ xᵢ ≤ 1,000,000,000).

His C (2 ≤ C ≤ N) cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible.

What is the **largest minimum distance** possible between any two cows?

## Input

* `t` – the number of test cases
  For each test case:
* Line 1: Two space-separated integers: `N` (number of stalls) and `C` (number of cows)
* Lines 2..N+1: Each line contains one integer: stall location `xᵢ`

### Constraints

* 2 ≤ N ≤ 100,000
* 2 ≤ C ≤ N
* 0 ≤ xᵢ ≤ 1,000,000,000

## Output

For each test case output one integer: the **largest minimum distance**.

## Examples

### Input:

```
arr length:5 , cows: 3  
arr = [1,2,8,4,9]  
```

### Output:

```
3
```

### Encouragement Before You Peek 👀

Before jumping into the code, think about how you'd place cows in stalls to maximize the minimum distance. Try placing them manually for small examples. Ask yourself — can this be solved greedily? What might be the range of possible answers?

## Intuition

We want to **maximize the smallest distance** between any two placed cows.
This is a classic optimization problem where the answer lies between 1 and the difference between the farthest stalls.

To **check** if a distance is feasible, we can **try placing the cows greedily**, starting from the first stall and always placing the next cow in the next stall that's at least `mid` distance apart.

This pattern leads us to use **binary search on the answer** — a very common approach when we need to "maximize the minimum" or "minimize the maximum" under constraints.

## Approach

[Solution Here](./solution.js)

1. Sort the stall positions.
2. Use binary search on the range of possible distances: from 1 to max\_distance between stalls.
3. For each middle distance, check if it's possible to place all cows with at least that much distance apart.
4. If yes, try for a bigger distance. If not, try smaller.

### Pseudocode

```
function canPlaceCows(positions, cows, minDist):
    count = 1
    lastPos = positions[0]
    for i from 1 to positions.length:
        if positions[i] - lastPos >= minDist:
            count += 1
            lastPos = positions[i]
    return count >= cows

function aggressiveCows(positions, cows):
    sort(positions)
    low = 1
    high = positions[-1] - positions[0]
    result = 0

    while low <= high:
        mid = floor((low + high) / 2)
        if canPlaceCows(positions, cows, mid):
            result = mid
            low = mid + 1
        else:
            high = mid - 1
    return result
```

## Walkthrough Example

Let’s walk through the example:
Stalls: \[1, 2, 8, 4, 9] → After sorting: \[1, 2, 4, 8, 9]
Cows: 3

We binary search for the **max minimum distance**:

* Try mid = 4 → Place cows at 1, next at 4 (3 gap), next possible is 8 (4 gap) — success!
* Try mid = 3 → Place cows at 1, next at 4, next at 8 → success
* Try mid = 5 → 1 → can't place second cow until 6 or more → only place 2 cows → fail
  → Largest distance we could place all cows with is **3**.

## Data evolution

| low | high | mid | canPlaceCows(mid) | result |
| --- | ---- | --- | ----------------- | ------ |
| 1   | 8    | 4   | Yes               | 4      |
| 5   | 8    | 6   | No                | 4      |
| 5   | 5    | 5   | No                | 4      |
| 5   | 4    | -   | -                 | **4**  |

Final result is **3**, not 4, because we must verify how many cows we can place with each mid and adjust accordingly.

## Time and Space Complexity

* **Time Complexity**: O(N log(maxDist)), where maxDist is the difference between the farthest stall positions
* **Space Complexity**: O(1), ignoring input storage — we just sort and run binary search
