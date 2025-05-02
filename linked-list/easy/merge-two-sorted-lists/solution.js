// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const mergeTwoLists = (list1, list2) => {
    console.log('List1:', printLinkedList(list1), ', List2:', printLinkedList(list2));
    let head = new ListNode(0);
    let current = head;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        }else {
            current.next = list2;
            current = current.next;
            list2 = list2.next;
        }
    }

    current.next = list1 ? list1 : list2;

    return head.next;
}

const printLinkedList = (result) => {
        let resultArr = [];
        while (result !== null) {
            resultArr.push(result.val);
            result = result.next;
        }
        return resultArr;
}

export function run() {
    // Example lists: l1 = [1,2,4], l2 = [1,3,4]
    let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    
    let result = mergeTwoLists(list1, list2);
    

    
    console.log('MergedList: ', printLinkedList(result));  // Output: [1,1,2,3,4,4]
}
