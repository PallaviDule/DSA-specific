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
