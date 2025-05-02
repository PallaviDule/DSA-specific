// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1, l2) {
    let head = new ListNode(0);
    let curr = head;
    let carry = 0;

    while(l1 || l2 || carry) {
        let sum = carry;
        if(l1) sum += l1.val;
        if(l2) sum += l2.val;

        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    return head.next;
}

export function run() {
    // Example lists: l1 = [2,4,3], l2 = [5,6,4]
    let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    
    let result = addTwoNumbers(l1, l2);
    
    // Print result list
    let resultArr = [];
    while (result !== null) {
        resultArr.push(result.val);
        result = result.next;
    }
    
    console.log(resultArr);  // Output: [7, 0, 8]
}
