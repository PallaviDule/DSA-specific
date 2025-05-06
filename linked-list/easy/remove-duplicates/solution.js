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
// var deleteDuplicates = function(head) {
//     let list = new ListNode(0);
//     let curr = list;

//     while(head) {
//         if(head.val !== head.next?.val) {
//             curr.next = new ListNode(head.val);
//             curr = curr.next;
//         }
//         if(curr) curr = curr.next;
//     }
//     return list.next;
// };

var deleteDuplicates = function(head) {
    console.log('----------');
    console.log('Input list:', printLinkedList(head));
    if(!head || !head.next) return head;
    let curr = head;

    while(curr?.next) {
        if(curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};


const printLinkedList = (result) => {
        let resultArr = [];
        while (result !== null) {
            resultArr.push(result.val);
            result = result.next;
        }
        return resultArr;
}

export function run() {
    // Example lists: l1 = [1,1,2], l2 = [1,1,2,3,3]
    let list1 = new ListNode(1, new ListNode(1, new ListNode(2)));
    let list2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));    
    
    console.log('Deleted Duplicates: ', printLinkedList(deleteDuplicates(list1)));  // Output: [1,2]
    console.log('Deleted Duplicates: ', printLinkedList(deleteDuplicates(list2)));  // Output: [1,2]
}
