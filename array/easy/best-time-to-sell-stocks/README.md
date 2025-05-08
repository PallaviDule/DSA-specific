## 121. Best Time to Buy and Sell Stock  

## Problem Statement  
You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.  
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.  
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

## Input  
- `prices`: an array of integers representing stock prices  
- Constraints:  
  - `1 <= prices.length <= 10^5`  
  - `0 <= prices[i] <= 10^4`

## Output  
- Integer representing the maximum profit possible from a single buy and sell transaction

## Examples  

**Example 1**  
Input: `prices = [7,1,5,3,6,4]`  
Output: `5`  
Explanation: Buy on day 2 (price = 1), sell on day 5 (price = 6). Profit = 6 - 1 = 5.

**Example 2**  
Input: `prices = [7,6,4,3,1]`  
Output: `0`  
Explanation: No profitable transaction possible.

### Encouragement Before You Peek 👀  
Can you track the lowest price so far and compare every future price against it to check potential profit?


## Intuition  
We need to find the **lowest buying price before a higher selling price**.  
As we scan through the array, we maintain:
- The lowest price seen so far (`minPrice`)
- The maximum profit that could be made at each step by selling at the current price

## Approach  
[Solution Code](./solution.js)
1. Initialize `minPrice` to infinity, `maxProfit` to 0  
2. Traverse each price:
   - If current price is less than `minPrice`, update `minPrice`
   - Else calculate profit: `currentPrice - minPrice`, and update `maxProfit` if it's higher
3. Return `maxProfit`

### Pseudocode  
```
FUNCTION maxProfit(prices):
    minPrice ← ∞ or prices[0]
    maxProfit ← 0

    FOR each price IN prices:
        IF price < minPrice:
            minPrice ← price
        ELSE:
            profit ← price - minPrice
            IF profit > maxProfit:
                maxProfit ← profit

    RETURN maxProfit
```

## Walkthrough Example  

For input `prices = [7, 1, 5, 3, 6, 4]`:  
- Day 0: price = 7 → minPrice = 7, maxProfit = 0  
- Day 1: price = 1 → minPrice = 1, maxProfit = 0  
- Day 2: price = 5 → profit = 5 - 1 = 4 → maxProfit = 4  
- Day 3: price = 3 → profit = 3 - 1 = 2 → maxProfit remains 4  
- Day 4: price = 6 → profit = 6 - 1 = 5 → maxProfit = 5  
- Day 5: price = 4 → profit = 4 - 1 = 3 → maxProfit remains 5  

Return `5`

## Data evolution

| Day | Price | minPrice So Far | Potential Profit | maxProfit So Far |
|-----|-------|------------------|------------------|------------------|
| 0   | 7     | 7                | 0                | 0                |
| 1   | 1     | 1                | 0                | 0                |
| 2   | 5     | 1                | 4                | 4                |
| 3   | 3     | 1                | 2                | 4                |
| 4   | 6     | 1                | 5                | 5                |
| 5   | 4     | 1                | 3                | 5                |

## Time and Space Complexity  
- **Time Complexity**: O(n), we traverse the list once  
- **Space Complexity**: O(1), constant space used for tracking values