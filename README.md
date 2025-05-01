# DSA Practice
Welcome!    
This repository is a collection of coding problems organized by Data Structures and Algorithms (DSA) topics. Each problem includes a clear explanation, JavaScript implementation, and notes on which data structure is being used and why.

Whether I’m revisiting core concepts, preparing for upcoming interviews, or just enjoying solving problems — this repo helps me keep everything organized, easy to refer back to, and ready to expand as I go.  
Each problem folder includes:
- A clear **README.md** with the problem statement, approach, and edge cases
- The **solution.js** file with a working implementation


## Categories

Great point — here's an improved version of the table with a note in the **"Reference Docs"** column indicating that the link points to built-in methods or concept documentation, so it's clear why it's useful before diving into problems:

| Category         | Path                                | Reference Docs (In-built Methods / Concepts)                                              |
|------------------|-------------------------------------|--------------------------------------------------------------------------------------------|
| Arrays           | [`arrays/`](./array)                | [Array Methods – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| Trees            | [`trees/`](./tree)                  | [Tree – GFG (Concept)](https://www.geeksforgeeks.org/binary-tree-data-structure/)          |
| Map              | [`map/`](./array/)                  | [Map Methods – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)     |
| Strings          | [`strings/`](./string/)             | [String Methods – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| Linked Lists     | [`linked-lists/`](./linked-list/)   | [Linked List – GFG (Concept)](https://www.geeksforgeeks.org/data-structures/linked-list/) |
| Stacks & Queues  | `stacks-queues/` (coming soon)      | [Stack & Queue – GFG (Concept)](https://www.geeksforgeeks.org/stack-data-structure/)      |
| Math             | [`basic-math/`](./math/)            | [Math - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

-  Learning Resources   
    Inside the [`doc/`](./doc) folder:
    - **[Data-Structure1](./doc/data-structures.md)** – Key concepts and when to use what.
    - **[Code-Compleixty](./doc/Code-complexity.md)** – Time and space complexity tips and cheatsheets.
    - **[Patterns](./doc/Patterns.md)** 

## How to Use
- Each folder has a `README.md` explaining the problem, thought process, and solution.
- How To Run:
    - **Directly run any `.js` file** with Node.js to test the solution:
        - Example: `node array/easy/001-two-sum/solution.js`
    - **Run using the central `index.js`** to easily execute problems by their keys:
        - Run the following command with the desired **problem key**:`node index.js ${problemKey}`
            - You can find the **problem key** for each problem in the main table.
            - Example: To run the **Two Sum** solution, use the following command:`node index.js twoSum`


## Sample Problems (Grouped by Category)

### Math / Basic Algorithm
----

| Problem No. | Title         | Path                                           | Problem Key | Difficulty |
|-------------|---------------|------------------------------------------------|------------ |------------|
| 001         | Fizz Buzz     | [`fizz-buzz`](./math/easy/fizz-buzz/README.md) | fizzBuzz    | Easy       |
|002	      | Number of Steps to Reduce a Number to Zero	| [`number-of-steps`](./math/easy/number-of-steps-to-reduce-number/README.md)	| numberOfSteps|Easy
|003	      | Palindrome	| [`palindrome`](./math/easy/palindrome-number/README.md)	| palindromeNumber|Easy



### Array
------
| Problem No. | Title     | Path | Problem Key | Difficulty
|-------------|-----------|------|--------| -----
| 001         | Two Sum   | [`two-sum/`](./array/001-two-sum/README.md) | twoSum |easy
| 002         | Richest customer wealth  | [`richest-customer-wealth/`](./array/easy/richest-customer-wealth/README.md) | richestCustomerWealth |easy
|003| Sum of 1-D array|[`sum-of-1d-array`](./array/easy/sum-of-1d-array/README.md)|sumOf1dArray| easy
|004| Median of Two Sorted Arrays|[`medianOfTwoSortedArray`](./array/hard/median-of-two-sorted-array/README.md)|medianOfTwoSortedArray| hard
|005| Median of Two Sorted Arrays|[`useOfMergeOfMergeSort`](./array/hard/median-of-two-sorted-array/UseMergeofMergeSort.md)|medianOfTwoSortedArrayMergeSort| hard



### Map
-----
| Problem No. | Title                  | Path | Problem Key | Difficulty
|-------------|------------------------|------|----| ---
| 001         | Ransom Note    | [`ransom-note`](./map/easy/ransom-note/README.md) | ransomNote| easy 

### String
-----
| Problem No. | Title                  | Path | Problem Key | Difficulty
|-------------|------------------------|------|----| ---
| 001         | Longest substring without duplicates    | [`longest-substring-without-duplicate`](./string/medium/longest-substring-without-duplicate/README.md) | longestSubstringNoDuplicate| medium 

### Set
-----
| Problem No. | Title                  | Path | Problem Key | Difficulty
|-------------|------------------------|------|----| ---
| 001         | Longest substring without duplicates    | [`longest-substring-without-duplicate`](./set/medium/longest-substring-without-duplicate/README.md) | longestSubstringNoDuplicateSet| medium 



### Tree
-----
| Problem No. | Title                  | Path | Problem Key | Difficulty
|-------------|------------------------|------|----| ---
| 001         | Root Node Sum Check    | [`root-equals-sum-of-children`](./tree/001-root-equals-sum-of-children/README.md) | rootEqualsSum| easy 

### Linked List
-----
| Problem No. | Title                  | Path | Problem Key | Difficulty
|-------------|------------------------|------|----| ---
| 001         | Middle of linked list    | [`middle-of-linked-list`](./linked-list/easy/middle-of-linked-list/README.md) | middleNode| easy 
| 002         | Add two numbers    | [`add-two-numbers`](./linked-list/medium/add-two-numbers/README.md) | addTwoLinkedListNumber| medium 


## Cheatsheet
![image](https://github.com/user-attachments/assets/05ff2e93-161c-4c7c-b08c-4f1574869691)


## Work in Progress

This is an evolving repository as I solve more problems.  
Feel free to explore, learn, and suggest improvements!


Happy Coding! 🚀
