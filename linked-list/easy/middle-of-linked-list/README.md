# 876. Middle of the Linked List

## Problem Statement
You are given the **head** of a singly linked list.  
Return the **middle node** of the linked list.

If there are two middle nodes, return the **second** middle node.

## Input
- A singly linked list `head` containing `n` nodes.
- **Constraints**:
  - `1 <= n <= 100`
  - `1 <= Node.val <= 100`


## Output
- Return the node that represents the middle of the list.  
- If there are two middles, return the **second** one.

### Example 1
```text
Input: head = [1, 2, 3, 4, 5]
Output: [3, 4, 5]
Explanation: The middle node is node 3.
```


### Example 2
```text
Input: head = [1, 2, 3, 4, 5, 6]
List:    [1] → [2] → [3] → [4] → [5] → [6]
Output: [4, 5, 6]
Explanation: The list has two middle nodes (3 and 4); we return the second one, which is 4.
```

## Encouragement Before You Peek 👀
✨ **Try solving the problem yourself first. Then, revisit this section to check the approach and solution in the respective file.**

## Approach
Solution is [Here](./solution.js)

- Use the **two pointers technique**:
  - Initialize two pointers, `slow` and `fast`, both starting at the head.
  - Move `slow` by one node at a time (`slow = slow.next`).
  - Move `fast` by two nodes at a time (`fast = fast.next.next`).
- When `fast` reaches the end (or becomes null), `slow` will be pointing to the **middle node**.
- This works because `fast` moves twice as fast as `slow`, so when `fast` is at the end, `slow` is at the halfway point.

## Walkthrough Example

Let's dry-run for `head = [1, 2, 3, 4, 5, 6]`:

| Iteration | `slow` value | `fast` value | Action                  |
|-----------|--------------|--------------|--------------------------|
| Start     | 1            | 1            | Initialize both at head  |
| 1         | 2            | 3            | slow = 1→2, fast = 1→3    |
| 2         | 3            | 5            | slow = 2→3, fast = 3→5    |
| 3         | 4            | null         | slow = 3→4, fast = 5→null |

At this point:
- `slow` points to `4`, which is the **second middle** node (as required).
- Output: `[4, 5, 6]`

## Time and Space Complexity

| Complexity | Details |
|------------|---------|
| **Time**   | O(n) - We traverse the linked list once, moving through all nodes. |
| **Space**  | O(1) - We use only two pointers, independent of input size. |


