# Richest Customer Wealth

## Problem Statement
You are given an `m x n` integer grid `accounts`, where `accounts[i][j]` is the amount of money the `iᵗʰ` customer has in the `jᵗʰ` bank.  
Return the **wealth that the richest customer has**.

A customer’s wealth is the **sum of money across all their bank accounts**.  
The richest customer is the one with the **maximum total wealth**.


## Input
- A 2D array `accounts` of size `m x n`
- `accounts[i][j]` = money in the `jᵗʰ` bank account of the `iᵗʰ` customer

#### Example 1:
```js
Input: accounts = [[1, 2, 3], [3, 2, 1]]
Output: 6
Explanation:
- Customer 0 → 1 + 2 + 3 = 6  
- Customer 1 → 3 + 2 + 1 = 6  
Both have equal wealth, return 6.
```

#### Example 2:
```js
Input: accounts = [[1, 5], [7, 3], [3, 5]]
Output: 10
Explanation:
- Customer 0 → 6  
- Customer 1 → 10 ✅  
- Customer 2 → 8  
```

#### Example 3:
```js
Input: accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
Output: 17
```

### Constraints
- `1 <= accounts.length, accounts[i].length <= 50`
- `1 <= accounts[i][j] <= 100`

Encouraged to try solving this problem on your own first, then return here to get the approach and solution in other file.

## Approach
Solution is in the [solution.js](./solution.js) file.

1. **Loop through each customer’s account** (i.e., each sub-array).
2. For each customer, **calculate their total wealth** using `.reduce()`.
3. Track the **maximum wealth** using `Math.max()`.


You can also solve it in a one-liner like this:
```js
Math.max(...accounts.map(account => account.reduce((sum, val) => sum + val, 0)));
```

## Walkthrough Example

Let's break down the execution for:
```js
accounts = [[1, 5], [7, 3], [3, 5]]
```

### Step 1: Loop through each customer

| Customer | Accounts     | Sum (reduce)  |
|----------|--------------|---------------|
| 0        | `[1, 5]`     | `1 + 5 = 6`   |
| 1        | `[7, 3]`     | `7 + 3 = 10`  |
| 2        | `[3, 5]`     | `3 + 5 = 8`   |

Resulting array of wealths:  
```js
maxValues = [6, 10, 8]
```

### Step 2: Find max wealth
```js
Math.max(...maxValues) = Math.max(6, 10, 8) = 10
```

**✅ Output: 10**


## Time Complexity
The time complexity of the solution is O(m * n), where:
- m is the number of customers (rows).
- n is the number of bank accounts per customer (columns).

This is because for each customer, we are summing up their wealth using .reduce() which is O(n). Since there are m customers, the total time complexity becomes O(m * n).

## Space Complexity
The space complexity is O(m), because we store the wealth of each customer in an array, and this array's size is proportional to the number of customers, i.e., m.