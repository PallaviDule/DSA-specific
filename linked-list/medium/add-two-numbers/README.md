## 2. Add Two Numbers

## Problem Statement

You are given two non-empty linked lists representing two non-negative integers.  
The digits are stored in reverse order, and each of their nodes contains a single digit.  
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Input Constraints

- Each linked list has 1 to 100 nodes.
- Each node contains a digit between 0 and 9.
- The numbers do not have leading zeros (except for the number 0 itself).

## Output

A linked list representing the sum of the two numbers, with digits in reverse order.

## Examples

```
Input:  l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
```

```
Input:  l1 = [0], l2 = [0]
Output: [0]
```

```
Input:  l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

## Encouragement Before You Peek 👀

Try solving it on your own first. Think of how you'd simulate addition just like you would on paper, digit by digit.

## Approach

**[View solution](./solution.js)**

We use a dummy head node to simplify result list construction and a pointer `current` to track the end of the result list. We also maintain a variable `carry` to keep track of any overflow at each step of the addition.

We loop as long as either `l1` or `l2` has nodes left, or there is a non-zero carry:

1. Initialize sum with carry (0). At each step, retrieve the current digit from `l1` and `l2` if any.
2. Add the value in sum.
3. Create a new node with value `sum % 10` (the digit to store) and link it to the result.
4. Update `carry = Math.floor(sum / 10)` for the next iteration.
5. Move `l1` and `l2` forward if they are not null.
6. After the loop, if there is a non-zero `carry`, add an extra node at the end.

This simulates digit-by-digit addition from least significant to most significant, just like how addition works on paper when numbers are reversed.

## Walkthrough Example

For input: `l1 = [2,4,3]`, `l2 = [5,6,4]`

| Step | l1.val | l2.val | Carry | Sum | New Node | Action                    |
|------|--------|--------|-------|-----|----------|---------------------------|
| 1    | 2      | 5      | 0     | 7   | 7        | Add 2 + 5 + 0             |
| 2    | 4      | 6      | 0     | 10  | 0        | Add 4 + 6 + 0, carry = 1  |
| 3    | 3      | 4      | 1     | 8   | 8        | Add 3 + 4 + 1             |
| End  | null   | null   | 0     |     |          | No carry left, done       |

Result: `[7, 0, 8]`

## Time and Space Complexity

**Time:** O(max(m, n)) — We traverse each list once.  
**Space:** O(max(m, n)) — The result list may have one node per digit of the larger input number, plus one for carry.


