const LinkedListNode = (value) => {
    return {
        value,
        next: null
    }
}

const appendLinkedList = (list, value) => {
    const newNode = LinkedListNode(value);
    if(!list.head ) {
        list.head = newNode;
        return;
    }

    let temp = list.head
    while(temp.next){
        temp = temp.next;
    }

    temp.next = newNode;
}

const getLinkList = (list, index) => {
    let count = 0;
    let temp = list.head;

    while(temp){
        if(count === index) return temp.value;
        count++;
        temp = temp.next;
    }
}

const removeNode = (list, value) => {
    if(!list.head) return;

    let temp = list.head;
    if(temp.value === value) {
        temp = temp.next;
        return;
    }

    while(temp) {
        if(temp.next.value === value) {
            temp.next = temp.next.next;
            return;
        }
        temp = temp.next;
    }
}

const toString = (list) => {
    let str = '';
    let temp = list.head;

    while(temp) {
        str += (str ? '->' : '') + temp.value;
        temp = temp.next;
    }

    return str;
}

const insertAt = (list, index, value) => {
    let count = 0;
    let temp = list.head;
    let newNode = LinkedListNode(value);

    if(index === count){
        newNode.next = list.head;
        list.head = newNode;
        return;
    }
    count++;
    while(temp){
        if(count === index) {
            newNode.next = temp.next;
            temp.next = newNode;
            return;
        }
        count++;
        temp = temp.next;
    }

    // OR
    // count++;
    // while(temp && count < index){
    //     temp = temp.next;
    //     count++;
    // }
           
    // newNode.next = temp.next;
    // temp.next = newNode;
}

const LinkedList = () => {
    return {
        head: null,
        append(value) {appendLinkedList(this, value)},
        get(index){ return getLinkList(this, index)},
        remove(value){ removeNode(this, value)},
        toString() {return toString(this)},
        insertAt(index, value){ insertAt(this, index, value)}
    }
}

export const run = () => {
    // Usage
    const list = LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(30);
    list.append(40);
    list.insertAt(4, 25);
    //list.append(30);

    console.log('whole list', list.toString()); // 10 -> 20 -> 30
    console.log('get value at index', list.get(1)); // 20

    list.remove(40);
    console.log(list.toString()); // 10 -> 30
}