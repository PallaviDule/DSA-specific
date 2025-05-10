const bitwiseOperator=(a,b) => {
    console.log('numbers a=', a, ', b=', b);

    console.log('a & b  :', a&b); // 0001 -> 1
    console.log('a | b  :', a|b); // 0111 -> 7
    console.log('a ^ b  :', a&b); // 0110 -> 6
    console.log('~a     :', ~a);   // 1010+1-> -6 (in 2's complement)
    console.log('a << 1 :', a<<1); // 1010 -> 10
    console.log('a >> 1 :', a>>1); // 0010 -> 2
}
export function run() {
    bitwiseOperator(5,3); // Binary 5: 0101, 3: 0011
}