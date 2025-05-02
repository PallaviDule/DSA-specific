## 21.Merge Two Sorted Lists

## Problem Statement
You are given the heads of two sorted linked lists `list1` and `list2`. 
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.    
Return the head of the merged linked list.  

## Input

- The number of nodes in both lists is in the range [0, 50].
- Each node contains an integer value: `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Output

- Return the head of the merged linked list (sorted in non-decreasing order).

## Examples

Input: list1 = [1,2,4], list2 = [1,3,4]  
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []  
Output: []

Input: list1 = [], list2 = [0]  
Output: [0]

> **Try solving it on your own before looking at the approach and solution.**

## Approach

Since both linked lists are already sorted, we can use the **two-pointer technique** to walk through both lists and merge them in order.

**Thought process:**
- Compare the head nodes of both lists.
- Whichever has the smaller value, link it to the result list.
- Move the pointer forward on that list.
- Continue until one list is exhausted, then append the rest of the other list.

We use a **dummy node** to simplify edge cases like an empty input list.

## Pseudocode

```
FUNCTION mergeTwoLists(list1, list2):
    CREATE a dummy node
    SET current = dummy

    WHILE list1 is not null AND list2 is not null:
        IF list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        ELSE:
            current.next = list2
            list2 = list2.next
        MOVE current to current.next

    IF list1 is not null:
        current.next = list1
    ELSE:
        current.next = list2

    RETURN dummy.next
```

## Walkthrough Example

Input: list1 = [1,2,4], list2 = [1,3,4]

- Compare 1 and 1 → take 1 from list1 → result: [1]
- Compare 2 and 1 → take 1 from list2 → result: [1,1]
- Compare 2 and 3 → take 2 → result: [1,1,2]
- Compare 4 and 3 → take 3 → result: [1,1,2,3]
- Compare 4 and 4 → take 4 from list1 → result: [1,1,2,3,4]
- list1 is exhausted → take remaining 4 from list2 → result: [1,1,2,3,4,4]


## Data Evolution

| Step | list1 | list2 | Picked Node | Merged List         |
|------|-------|-------|-------------|----------------------|
| 1    | 1→2→4 | 1→3→4 | 1 (list1)   | 1                    |
| 2    | 2→4   | 1→3→4 | 1 (list2)   | 1 → 1                |
| 3    | 2→4   | 3→4   | 2 (list1)   | 1 → 1 → 2            |
| 4    | 4     | 3→4   | 3 (list2)   | 1 → 1 → 2 → 3        |
| 5    | 4     | 4     | 4 (list1)   | 1 → 1 → 2 → 3 → 4    |
| 6    | null  | 4     | 4 (list2)   | 1 → 1 → 2 → 3 → 4 → 4|

## Time and Space Complexity

- **Time Complexity:** O(n + m) — we traverse each list once
- **Space Complexity:** O(1) — we only use pointers, no extra data structures