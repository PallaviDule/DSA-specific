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
    - **[DSA Cheatsheet](#cheatsheet)**

## How to Use
- Each folder has a `README.md` explaining the problem, thought process, and solution.
- How To Run:
    - **Directly run any `.js` file** with Node.js to test the solution:
        - Example: `node array/easy/001-two-sum/solution.js`
    - **Run using the central `index.js`** to easily execute problems by their keys:
        - Run the following command with the desired **problem key**:`node index.js ${problemKey}` or `npm start ${problemKey}`
            - You can find the **problem key** for each problem in the main table.
            - Example: To run the **Two Sum** solution, use the following command:`node index.js twoSum` or `npm start twoSum`


## 24 Sample Problems (Grouped by Category)

### Math / Basic Algorithm

| Problem No. | Title         | Path/ProblemKey                                           | Difficulty |
|-------------|---------------|------------------------------------------------|------------|
|001         | Fizz Buzz     | [`fizzBuzz`](./math/easy/fizz-buzz/README.md)     | Easy       |
|002	      | Number of Steps to Reduce a Number to Zero	| [`numberOfSteps`](./math/easy/number-of-steps-to-reduce-number/README.md) |Easy
|003	      | Palindrome	| [`palindromeNumber`](./math/easy/palindrome-number/README.md)	|Easy
|004	      | Roman to Integer	| [`romanToInteger`](./math/easy/roman-to-integer/README.md)	|Easy
|005	      | Plus One	| [`plusOne`](./math/easy/plus-one/README.md)	|Easy (array)



### Array

| Problem No. | Title     | Path/Problem Key | Difficulty
|-------------|-----------|------| -----
| 001         | Two Sum   | [`twoSum`](./array/001-two-sum/README.md) |easy
| 002         | Richest customer wealth  | [`richestCustomerWealth`](./array/easy/richest-customer-wealth/README.md)  |easy
|003| Sum of 1-D array|[`sumOf1dArray`](./array/easy/sum-of-1d-array/README.md)| easy
|004| Median of Two Sorted Arrays|[`medianOfTwoSortedArray`](./array/hard/median-of-two-sorted-array/README.md)| hard
|005| Median of Two Sorted Arrays|[`medianOfTwoSortedArrayMergeSort`](./array/hard/median-of-two-sorted-array/UseMergeofMergeSort.md)| hard
|006	      | Remove Duplicate from sorted arrays	| [`removeDuplicates`](./array/easy/remove-duplicates-from-sorted-arrays/README.md)	|Easy (two pointer)
|007	      | Remove Element from array	| [`removeElement`](./array/easy/remove-element/README.md)	|Easy (two pointer)


### Map

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Ransom Note    | [`ransomNote`](./map/easy/ransom-note/README.md) | easy 

### String

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Longest substring without duplicates    | [`longestSubstringNoDuplicate`](./string/medium/longest-substring-without-duplicate/README.md) | Medium 
| 002         | Longest common prefix    | [`longestCommonPrefix`](./string/easy/longest-common-prefix/README.md) | Easy 
| 003         | Find the Index of the First Occurrence in a String    | [`indexOfFirstOccurrence`](./string/easy/find-index-of-first-occurrence-in-string/README.md) | Easy 
| 004         | Length of Last Word    | [`lengthOfLastWord`](./string/easy/length-of-last-word/README.md) | Easy (Two-pointer)
| 005        | Add Binary    | [`addBinary`](./string/easy/add-binary/README.md) | Easy (Math, Bit Manipulation, Simulation)


### Set

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Longest substring without duplicates    | [`longestSubstringNoDuplicateSet`](./set/medium/longest-substring-without-duplicate/README.md) | Medium 

### Stack

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Valid Parentheses   | [`validParentheses`](./stack/easy/valid-parentheses/README.md) | easy 

### Tree

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Root Node Sum Check    | [`rootEqualsSum`](./tree/001-root-equals-sum-of-children/README.md) | easy 

### Linked List

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Middle of linked list    | [`middleNode`](./linked-list/easy/middle-of-linked-list/README.md) | easy 
| 002         | Add two numbers    | [`addTwoLinkedListNumber`](./linked-list/medium/add-two-numbers/README.md) | medium 
| 003         | Merge two sorted List    | [`mergeTwoSortedLinkedList`](./linked-list/easy/merge-two-sorted-lists/README.md) | easy 



## Cheatsheet
![image](https://github.com/user-attachments/assets/05ff2e93-161c-4c7c-b08c-4f1574869691)


## Work in Progress

This is an evolving repository as I solve more problems.  
Feel free to explore, learn, and suggest improvements!


Happy Coding! 🚀
