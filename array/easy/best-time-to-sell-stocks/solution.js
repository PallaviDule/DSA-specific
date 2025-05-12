const maxProfit1= (prices) => {
    console.log('------------------');
    console.log('Prices:', prices);
    let minPrice = Infinity; // or prices[0]
    let maxProfit = 0;

    for(i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++){

        }
    }

    return maxProfit;
};


// 121. Best Time to Buy and Sell Stock
const maxProfit2 = (prices) => {
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

// 121. Best Time to Buy and Sell Stock
const maxProfit = (prices) => {
    console.log('------------------');
    console.log('Prices:', prices);
    let bestBuy = prices[0]; // or prices[0]
    let maxProfit = 0;

    for (let price of prices) { // for(i=0; i<prices.length; i++)
        if(bestBuy < price){
            maxProfit = Math.max(price - bestBuy, maxProfit);
        } else {
            bestBuy = price;
        }
    }

    return maxProfit;
};

export const run = () => {
    console.log('Max profit:', maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
    console.log('Max profit:',maxProfit([7, 6, 4, 3, 1]));   // Output: 0
};

