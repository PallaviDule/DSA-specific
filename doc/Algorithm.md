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
