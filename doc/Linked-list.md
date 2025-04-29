# Linked List in JavaScript

This document covers both **Singly Linked List** and **Doubly Linked List**, including their structure, common operations, and full examples using all methods.
[Problems of Linked List](../linked-list/)

## 📗 Singly Linked List

Each node contains:
- `val`: data
- `next`: pointer to the next node

### 1. Node Structure       
    function ListNode(val, next = null) {
        this.val = val;
        this.next = next;
    }


### 2. Common Methods
```js
function insertAtHead(head, val) {
    return new ListNode(val, head);
}

function insertAtTail(head, val) {
    if (!head) return new ListNode(val);
    let current = head;
    while (current.next !== null) current = current.next;
    current.next = new ListNode(val);
    return head;
}

function traverse(head) {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

function search(head, target) {
    let current = head;
    while (current) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
}

function deleteNode(head, target) {
    if (!head) return null;
    if (head.val === target) return head.next;
    let current = head;
    while (current.next) {
        if (current.next.val === target) {
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    return head;
}

function reverse(head) {
    let prev = null, current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
```

---

### 3. Full Example

```js
let head = null;

head = insertAtTail(head, 1);
head = insertAtTail(head, 2);
head = insertAtTail(head, 3);
head = insertAtHead(head, 0); // 0 -> 1 -> 2 -> 3

console.log("Initial List:");
traverse(head);

console.log("Search 2:", search(head, 2));
console.log("Search 5:", search(head, 5));

head = deleteNode(head, 2);
console.log("After deleting 2:");
traverse(head);

head = reverse(head);
console.log("After reversing:");
traverse(head);
```

## Doubly Linked List

Each node contains:
- `val`: data
- `next`: pointer to next node
- `prev`: pointer to previous node

### 1. Node Structure

```js
function DoublyListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}
```

### 2. Common Methods

```js
function insertAtHead(head, val) {
    const node = new DoublyListNode(val);
    if (head) {
        node.next = head;
        head.prev = node;
    }
    return node;
}

function insertAtTail(head, val) {
    const node = new DoublyListNode(val);
    if (!head) return node;
    let current = head;
    while (current.next) current = current.next;
    current.next = node;
    node.prev = current;
    return head;
}

function traverseForward(head) {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log("Forward:", values.join(" <-> "));
}

function traverseBackward(tail) {
    const values = [];
    let current = tail;
    while (current) {
        values.push(current.val);
        current = current.prev;
    }
    console.log("Backward:", values.reverse().join(" <-> "));
}

function getTail(head) {
    let current = head;
    while (current && current.next) current = current.next;
    return current;
}

function deleteNode(head, target) {
    let current = head;
    while (current) {
        if (current.val === target) {
            if (current.prev) current.prev.next = current.next;
            else head = current.next;
            if (current.next) current.next.prev = current.prev;
            break;
        }
        current = current.next;
    }
    return head;
}
```

### 3. Full Example

```js
let head = null;

head = insertAtTail(head, 1);
head = insertAtTail(head, 2);
head = insertAtTail(head, 3);
head = insertAtHead(head, 0); // 0 <-> 1 <-> 2 <-> 3

console.log("Initial List:");
traverseForward(head);

let tail = getTail(head);
traverseBackward(tail);

head = deleteNode(head, 2);
console.log("After deleting 2:");
traverseForward(head);
```
