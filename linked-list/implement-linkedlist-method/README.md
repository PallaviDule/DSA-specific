# Singly Linked List Implementation

A simple **singly linked list** implementation in JavaScript, with basic operations like append, insert, remove, get by index, and convert to string.

[Implementation](./solution.js)

## Node Structure

Each node contains:

```javascript
{
  value: any,  // The data stored in the node
  next: null   // Pointer to the next node
}
```

## Linked List Methods

### 1. `append(value)`

Add a new node to the **end** of the list.

```javascript
list.append(10);
list.append(20);
```

* **Time complexity:** O(n)
* **Space complexity:** O(1)

### 2. `get(index)`

Retrieve the value of the node at the given index.

```javascript
list.get(1); // returns 20
```

* **Time complexity:** O(n)
* **Space complexity:** O(1)

### 3. `remove(value)`

Remove the **first node** that matches the given value.

```javascript
list.remove(20);
```

* **Time complexity:** O(n)
* **Space complexity:** O(1)

### 4. `insertAt(index, value)`

Insert a new node at a **specific position** in the list.

```javascript
list.insertAt(1, 15); // Inserts 15 at index 1
```

* **Time complexity:** O(n)
* **Space complexity:** O(1)

### 5. `toString()`

Convert the linked list to a string representation.

```javascript
list.toString(); // "10->15->20"
```

* **Time complexity:** O(n)
* **Space complexity:** O(n) for string

## Summary of Operations

| Operation  | Description                      | Time Complexity |
| ---------- | -------------------------------- | --------------- |
| `append`   | Add node to the end              | O(n)            |
| `get`      | Get value by index               | O(n)            |
| `remove`   | Remove first occurrence of value | O(n)            |
| `insertAt` | Insert node at specific index    | O(n)            |
| `toString` | Convert list to string           | O(n)            |
```
list.append(10);
list.append(20);
list.append(30);        // Head -> 10 -> 20 -> 30 -> null
list.insertAt(1, 15);   // Head -> 10 -> 15 -> 20 -> 30 -> null
list.remove(30);        // Head -> 10 -> 15 -> 20 -> null
list.get(2);            // returns 20
```


## Notes / Tips

* This is a **singly linked list**, so operations like `remove` and `insertAt` require traversal from the head.
* If you need **frequent insertions/removals in the middle**, consider using a **doubly linked list**.
* This implementation avoids using extra classes — it’s simple and beginner-friendly.

