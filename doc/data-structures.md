# Data Structures Overview

This document summarizes the most commonly used data structures in JavaScript (and general programming) and when to use them.

## Arrays
- **Use when**: You need ordered collection with index access.
- **Common operations**: `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, `includes`, `indexOf`, `map`, `filter`, `reduce`.
- **Use cases**: Iteration, stacks, queues, matrix-like structures.

## Strings
- **Use when**: Working with textual data.
- **Common operations**: `charAt`, `substring`, `includes`, `indexOf`, `split`, `join`, `toLowerCase`.
- **Use cases**: Substring search, parsing, formatting.

## Hash Tables / Maps
- **Use when**: Fast access via keys.
- **Common operations**: `set`, `get`, `has`, `delete`.
- **Use cases**: Caching, counting, lookups.

## Sets
- **Use when**: Storing unique values.
- **Common operations**: `add`, `has`, `delete`.
- **Use cases**: Uniqueness checks, de-duplication, set operations.

## Linked Lists
- **Use when**: Frequent insertions/removals from middle of list.
- **Types**: Singly, Doubly, Circular.
- **Use cases**: Implementation of stacks, queues, dynamic memory.

## Stacks
- **Use when**: LIFO behavior needed.
- **Operations**: `push`, `pop`, `peek`, `isEmpty`.
- **Use cases**: Recursion tracking, undo features, syntax parsing.

## Queues
- **Use when**: FIFO behavior needed.
- **Types**: Simple queue, Circular queue, Priority queue.
- **Use cases**: Task scheduling, async processes, buffering.

## Trees
- **Use when**: Hierarchical data representation.
- **Types**: Binary Tree, Binary Search Tree, AVL, Trie.
- **Use cases**: Searching, sorting, hierarchical data (like DOM).

## Graphs
- **Use when**: Representing connections between elements.
- **Types**: Directed, Undirected, Weighted.
- **Use cases**: Social networks, route finding, dependency resolution.

## Tips
- Choose the **right structure** based on access/modification needs.
- Consider time complexity of operations (refer to `complexity.md`).

## Choosing the Right Structure
| Scenario | Use |
|---------|-----|
| Fast lookup by key | Map / Object |
| Unique values | Set |
| Last-in, first-out | Stack |
| First-in, first-out | Queue |
| Sorted data with frequent inserts | BST |
| Hierarchical data | Tree |
| Relationship modeling | Graph |

Explore these structures hands-on in each topic folder for better understanding.

