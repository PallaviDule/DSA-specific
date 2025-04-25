var maximumWealth = function(accounts) {
    const maxValues = accounts.map(account => account.reduce((acc, cur) => acc + cur, 0));
    const richestCustomerWealth = Math.max(...maxValues);

    console.log('input:', accounts,', maxValues for each account:', maxValues, ' ,[RESULT] richestCustomerWealth: ', richestCustomerWealth);
    return richestCustomerWealth;
};


export const run = () => {
    maximumWealth([[1,5],[7,3],[3,5]]);
    maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);
} 