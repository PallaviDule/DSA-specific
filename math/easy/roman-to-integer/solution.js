const symbolToValue = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function (romanNum) { 
    let result = 0;
    for(let i = 0; i < romanNum.length; i++) {
        let currValue = symbolToValue[romanNum[i]];
        let nextValue = symbolToValue[romanNum[i+1]];

        if(currValue < nextValue) {
            result -= currValue;
        } else {
            result += currValue;
        }
    }
    console.log('Roman Number:', romanNum, ', its converted integer:', result);
    console.log('------------------*------------*------------*---------------');
    return result
}


// Run function to test examples
export const run = () => {
    romanToInt("III");
    romanToInt("LVIII");
    romanToInt("MCMXCIV");
};
