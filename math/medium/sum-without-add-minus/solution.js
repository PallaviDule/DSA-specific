/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    console.log('Input values - a:', a, ', b:', b);
    while(b!=0){
        let carry = (a & b) << 1;
        a = a^b;
        b = carry;
    }

    return a;
};


export function run(){
    console.log('Sum is:', getSum(3,2) );
    console.log('-------------------------------------------------------------------');
    console.log('Sum is:', getSum(4,10));
    console.log('-------------------------------------------------------------------');
}
