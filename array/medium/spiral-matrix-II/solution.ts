function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  let val = 1;
  let left = 0, right = n - 1, top = 0, bottom = n - 1;

  while (val<= n ** 2) {
    for (let i = left; i <= right; i++) res[top][i] = val++;
    top++;
    for (let i = top; i <= bottom; i++) res[i][right] = val++;
    right--;
    for (let i = right; i >= left; i--) res[bottom][i] = val++;
    bottom--;
    for (let i = bottom; i >= top; i--) res[i][left] = val++;
    left++;
  }

  return res;
}

console.log('Genrate Spiral Matrix:', generateMatrix(3) );
console.log('-------------------------------------------------------------------');
console.log('Generate Spiral Matrix:', generateMatrix(4));
console.log('-------------------------------------------------------------------');