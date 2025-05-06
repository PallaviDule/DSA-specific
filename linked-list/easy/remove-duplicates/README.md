## 83.Remove Duplicates from Sorted List

## Problem Statement
You are given the head of a sorted linked list. Your task is to delete all duplicate values from the list so that each element appears only once. The resulting linked list should remain sorted.

## Input
- `head`: The head of a sorted linked list.
- **Constraints**:
    - The number of nodes in the list is between **0 and 300**.
    - The value of each node is in the range **[-100, 100]**.
    - The list is guaranteed to be sorted in ascending order.

## Output
- Return the sorted linked list with all duplicates removed.

## Examples
**Input**: head = [1,1,2]  
**Output**: [1,2]

**Input**: head = [1,1,2,3,3]  
**Output**: [1,2,3]

### Encouragement Before You Peek 👀
Try to think of a simple approach where you can traverse the list only once and compare consecutive elements to remove duplicates. 

## Intuition
The list is already sorted, so if there are any duplicates, they must be adjacent. By traversing the list once and checking if the current node's value is the same as the next node's value, we can easily remove duplicates.

## Approach
1. Start from the head of the list.
2. Traverse through each node:
    - If the current node's value is equal to the next node's value, skip the next node.
    - Otherwise, move to the next node.
3. The result will be a list with duplicates removed.

### Pseudocode

```
function removeDuplicates(head):
    if head is null or head.next is null, return head
    
    current = head
    
    while current is not null:
        if current.val == current.next.val:
            current.next = current.next.next  // Skip the duplicate
        else:
            current = current.next
    
    return head
```

## Walkthrough Example

Let's walk through an example where `head = [1,1,2,3,3]`:

1. Start at the first node (`1`).
2. Compare the first and second nodes: both are `1`, so skip the second `1`.
3. Move to the next node (`2`), compare it with the next (`3`), no duplicates, so move on.
4. Compare `3` with the next `3` — they match, so skip the second `3`.
5. Finally, the list is `[1,2,3]`.

The final output is a list without duplicates.

## Data Evolution

| Step    | Current Node | Next Node | Action       | Updated List  |
|---------|--------------|-----------|--------------|---------------|
| Initial | 1            | 1         | Skip Duplicate | [1, 1, 2, 3, 3]  |
| After 1 | 1            | 2         | Move to next | [1, 2, 3, 3]   |
| After 2 | 2            | 3         | Move to next | [1, 2, 3]     |
| After 3 | 3            | 3         | Skip Duplicate | [1, 2, 3]     |

## Time and Space Complexity

- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the list. We traverse the list once.
- **Space Complexity**: `O(1)`, since we only use a constant amount of extra space for pointers.
