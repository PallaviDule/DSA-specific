/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    // Move slow by 1 step and fast by 2 steps
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // slow is now at the middle
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};

// Helper function to print linked list from a given node
const printLinkedList = (node) => {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
};

// Run function to test examples
export const run = () => {
    const list1 = createLinkedList([1, 2, 3, 4, 5]);
    const list2 = createLinkedList([1, 2, 3, 4, 5, 6]);

    console.log("[Test Case 1] input: [1, 2, 3, 4, 5]");
    // ListNode {
    // val: 1,
    //  next: ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } }
    // }
    printLinkedList(middleNode(list1)); // Output: [3, 4, 5]

    console.log("[Test Case 2] input: [1, 2, 3, 4, 5, 6]");
    printLinkedList(middleNode(list2)); // Output: [4, 5, 6]
};
