# Time & Space Complexity Cheatsheet

Understanding time and space complexity helps in analyzing the efficiency of algorithms. Here's a quick reference:

## Time Complexity
- Not actual time taken
- Amount of time taken as a function of input size(n). 
- How many operations are being performed in function.

| Complexity | Name              | Example                              |
|--          |---                |--                                    |
| O(1)       | Constant          | Accessing array index, hashmap get   |
| O(log n)   | Logarithmic       | Binary search                        |
| O(n)       | Linear            | Looping through an array             |
| O(n log n) | Linearithmic      | Merge sort, Heap sort                |
| O(n^2)     | Quadratic         | Bubble sort, Nested loops            |
| O(2^n)     | Exponential       | Recursive Fibonacci                  |
| O(n!)      | Factorial         | Permutations                         |



## Space Complexity

| Scenario                        | Space Used         |
|--|--|
| Storing an array of size `n`   | O(n)               |
| Using recursion (call stack)   | Depends on depth   |
| Hashing `n` elements           | O(n)               |
| In-place modification          | O(1)               |



## Common Tips
- **Trade-offs**: Optimize for time or space depending on problem.
- **Avoid unnecessary data structures**.
- **Use in-place solutions when space is constrained**.
- **Recursive solutions often increase space due to call stack**.



## Recommended Links
- [Big-O Notation Explained (freeCodeCamp)](https://www.freecodecamp.org/news/big-o-notation-simplified/)  
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

Use this as a reference when comparing multiple approaches to a problem.

