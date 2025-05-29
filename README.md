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


## 61 Sample Problems (Grouped by Category)

### Math / Basic Algorithm

| Problem No. | Title         | Path/ProblemKey                                           | Difficulty |
|-------------|---------------|------------------------------------------------|------------|
|001          | Fizz Buzz     | [`fizzBuzz`](./math/easy/fizz-buzz/README.md)     | Easy       |
|002	      | Number of Steps to Reduce a Number to Zero	| [`numberOfSteps`](./math/easy/number-of-steps-to-reduce-number/README.md) |Easy
|003	      | Palindrome	  | [`palindromeNumber`](./math/easy/palindrome-number/README.md)	|Easy
|004	      | Roman to Integer	| [`romanToInteger`](./math/easy/roman-to-integer/README.md)	|Easy
|005	      | Plus One	  | [`plusOne`](./math/easy/plus-one/README.md)	|Easy (array)
|006          | Square root   | [`squareRoot`](./math/easy/square-root/README.md)	|Easy (array, binary search)
|007          | Fibbonacci Number 	| [`fibbonacciNumber`](./math/easy/fibbonacci-nth-number/README.md)	|Easy (Dynamic Programming, Recursion, Memoization)
|008          | Climb stairs  | [`climbStairs`](./math/easy/climb-stairs/README.md)   | Easy (Dynamic Programming, Memoization)
|009          | Sum of Digits  | [`sumOfDigits`](./math/easy/sum-of-digits/README.md)   | Easy (Basic Math)
|010          | Power(x,n)  | [`xRaisedToPowerN`](./math/medium/power-n-of-x/README.md)   | Medium
|011          | Count Primes  | [`countPrimes`](./math/medium/count-primes/README.md)   | Medium (Sieve of Eratosthenes)


### Array

| Problem No. | Title                               | Path/Problem Key | Difficulty
|-------------|-------------------------------------|------------------| -----
| 001         | Two Sum                             | [`twoSum`](./array/easy/001-two-sum/README.md)                                                         |Easy
| 002         | Richest customer wealth             | [`richestCustomerWealth`](./array/easy/richest-customer-wealth/README.md)                         |Easy
|003          | Sum of 1-D array                    |[`sumOf1dArray`](./array/easy/sum-of-1d-array/README.md)                                           |Easy
|004          | Median of Two Sorted Arrays         |[`medianOfTwoSortedArray`](./array/hard/median-of-two-sorted-array/README.md)                      |Hard
|005          | Median of Two Sorted Arrays         |[`medianOfTwoSortedArrayMergeSort`](./array/hard/median-of-two-sorted-array/UseMergeofMergeSort.md)|Hard
|006	      | Remove Duplicate from sorted arrays	| [`removeDuplicates`](./array/easy/remove-duplicates-from-sorted-arrays/README.md)	                |Easy (two pointer)
|007	      | Remove Element from array	        | [`removeElement`](./array/easy/remove-element/README.md)	                                        |Easy (two pointer)
|008	      | Merge two sorted array	            | [`mergeTwoSortedArray`](./array/easy/merge-sorted-arrays/README.md)	                            |Easy (two pointer, sorting)
|009	      | Pascal Triangle	                    | [`generatePascalTriangle`](./array/easy/pascal-triangle/README.md)	                            |Easy (Dynamic Programming)
|009	      | Pascal Triangle	II                  | [`nthRowOfPascalTriangle`](./array/easy/pascal-triangle-II/README.md)	                            |Easy (Dynamic Programming)
|010	      | Best time to sell stock             | [`bestTimeToSellStock`](./array/easy/best-time-to-sell-stocks/README.md)	                        |Easy (Dynamic Programming)
|011          | Two Sum II                          | [`twoSumII`](./array/medium/two-sum-II/README.md)                                                 |Medium (two pointer, binary search)
|012          | Container With Most Water           | [`containerWithMostWater`](./array/medium/container-with-most-water/README.md)                    |Medium (two pointers, greedy)
|013          | Intersection of two arrays          | [`intersectionOfTwoArrays`](./array/easy/intersection-of-two-arrays/README.md)                    |Easy
|013          | Move Zeros                          | [`moveZeros`](./array/easy/move-zeros/README.md)                                                  |Easy (two pointer)
|014          | Max Sum Of Sub Array                | [`maxSumOfSubArray`](./array/medium/max-sum-of-subarray/README.md)                                |Medium (two pointer)
|015          | Majority Element                    | [`moveZeros`](./array/easy//majority-element/README.md)                                           |Easy (Hash Table, Divide and Conquer ,Sorting, kadane's Algo)
|016          | Search in Rotated Sorted Array      | [`searchInRotatedSortedArray`](./array/medium/search-in-rotated-sorted-array/README.md)           |Medium (Binary Search)
|017          | Peak Index In Mountain Array        | [`peakIndexInMountainArray`](./array/medium/peak-index-in-mountain-array/README.md)               |Medium (Binary Search)
|018          | Product except self                 | [`productExceptSelf`](./array/medium/product-except-self/README.md)                               |Medium (Binary Search)
|019          | Single Element in a Sorted Array    | [`singleNonDuplicate`](./array/medium/single-element-in-sorted-array/README.md)                   |Medium (Binary Search)
|020          | Allocate Minimum Pages              | [`allocateMinimumPages`](./array/medium/allocate-minimum-pages/README.md)                         |Medium (Searching, Divide and Conquer, Binary Search)
|021          | Painter's Partition                 | [`paintersPartition`](./array/medium/painters-partition/README.md)                                |Medium (Searching, Divide and Conquer, Binary Search, GFG)
|022          | Aggressice Cows                     | [`aggressiveCows`](./array/medium/aggressive-cows/README.md)                                      |Medium (Searching, Divide and Conquer, Binary Search, spoj)
|023          | Sort Colors                         | [`sortColors`](./array/medium/sort-colors/README.md)                                              |Medium ( three pointers, leetcode, Dutch National Flag)
|024          | Next Permutation                        | [`nextPermutation`](./array/medium/next-permutation/README.md)                                |Medium ( two pointers, leetcode)
|025          | Minimum In Rotated Sorted Array      | [`minimumInRotatedSortedArray`](./array/medium/minimum-in-rotated-sorted-array/README.md)        |Medium (binary search, leetcode, pivot detection)
|026          | GCD of Array                        | [`gcdOfArray`](./array/easy/gcd-array/README.md)                                                  |Easy (leetcode, Math)

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
| 006        | Reverse String    | [`reverseString`](./string/easy/reverse-string/README.md) | Easy (Two-pointer)
| 007        | Valid Palindrome    | [`validPalindrome`](./string/easy/valid-palindrome/README.md) | Easy (Two-pointer)
| 008        | Remove All Occurrences of a Substring    | [`removeOccurrencesOfSubstring`](./string/medium/remove-all-occurrences-of-substring/README.md) | Medium (Stack, Simulation)
| 009        | Permutation in String    | [`permutationInString`](./string/medium/permutation-in-string/README.md) | Medium (Hash Table, Two Pointers, Sliding Window)
| 010        | Reverse the Words in String    | [`reverseWordsInString`](./string/medium/reverse-words-in-string/README.md) | Medium (Two Pointers)
| 011        | String Compression    | [`stringCompression`](./string/medium/string-compression/README.md) | Medium (Two Pointers, in-place)


### Set

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Longest substring without duplicates    | [`longestSubstringNoDuplicateSet`](./set/medium/longest-substring-without-duplicate/README.md) | Medium 

### Stack

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Valid Parentheses   | [`validParentheses`](./stack/easy/valid-parentheses/README.md) | Easy 
| 002         | 132 pattern   | [`OneThreeTwoPattern`](./stack/medium/132-pattern/README.md) | Medium, Array, Binary Search, Stack, Monotonic Stack


### Tree

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Root Node Sum Check    | [`rootEqualsSum`](./tree/001-root-equals-sum-of-children/README.md) | Easy 

### Linked List

| Problem No. | Title                  | Path/Problem Key | Difficulty
|-------------|------------------------|------| ---
| 001         | Middle of linked list    | [`middleNode`](./linked-list/easy/middle-of-linked-list/README.md) | Easy 
| 002         | Add two numbers    | [`addTwoLinkedListNumber`](./linked-list/medium/add-two-numbers/README.md) | Medium 
| 003         | Merge two sorted List    | [`mergeTwoSortedLinkedList`](./linked-list/easy/merge-two-sorted-lists/README.md) | Easy 
| 004         | Delete Duplicates    | [`deleteDuplicates`](./linked-list/easy/remove-duplicates/README.md) | Easy 


## Cheatsheet
![image](https://github.com/user-attachments/assets/05ff2e93-161c-4c7c-b08c-4f1574869691)


## Work in Progress

This is an evolving repository as I solve more problems.  
Feel free to explore, learn, and suggest improvements!


Happy Coding! 🚀
