// 121. Best Time to Buy and Sell Stock
const maxProfit = (prices) => {
    console.log('------------------');
    console.log('Prices:', prices);
    let minPrice = Infinity; // or prices[0]
    let maxProfit = 0;

    for (let price of prices) { // for(i=0; i<prices.length; i++)
        if (price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};

export const run = () => {
    console.log('Max profit:', maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
    console.log('Max profit:',maxProfit([7, 6, 4, 3, 1]));   // Output: 0
};

