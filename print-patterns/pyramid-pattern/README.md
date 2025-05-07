## Pattern Goal:  
You're printing this for `n = 3`:

```
  1
 121
12321
```

Now, let’s **analyze and understand** what's happening in each row.

## Step 1: Understand Row-by-Row

Let’s number the rows as `i = 0` to `n-1` (that’s `i = 0 to 2` for `n = 3`):

### Row 0 → `i = 0`:
- Spaces: 2 → `'  '`  
- Increasing Numbers: `1`  
- Decreasing Numbers: _none_

    Result: `'  1'`

---

### Row 1 → `i = 1`:
- Spaces: 1 → `' '`  
- Increasing Numbers: `1 2`  
- Decreasing Numbers: `1`  

    Result: `' 121'`

### Row 2 → `i = 2`:
- Spaces: 0  
- Increasing Numbers: `1 2 3`  
- Decreasing Numbers: `2 1`

    Result: `'12321'`

## Step 2: Break Pattern into Building Blocks

Each row consists of:   
1. **Spaces** – to center the pyramid  
2. **Increasing Numbers** – from `1` to `i + 1`  
3. **Decreasing Numbers** – from `i` down to `1`

## Step 3: Convert Thought into Code
Now, use three loops:
1. **First loop** prints spaces:  
   From `j = n - i - 1` to `1` (or greater than 0)
2. **Second loop** prints numbers increasing from `1` to `i + 1`
3. **Third loop** prints numbers decreasing from `i` down to `1`

Here is the logic of the `pyramid1(n)` pattern in a clear **table form** for `n = 3`:

| Row (`i`) | Spaces (`n-i-1`) | Increasing Numbers (`1` to `i+1`) | Decreasing Numbers (`i` to `1`) | Final Pattern |
|-----------|------------------|-----------------------------------|----------------------------------|----------------|
| 0         | `'  '` (2 spaces) | `1`                               | _None_                           | `'  1'`        |
| 1         | `' '` (1 space)   | `1 2`                             | `1`                              | `' 121'`       |
| 2         | `''` (0 spaces)   | `1 2 3`                           | `2 1`                            | `'12321'`      |

## Final Code Explained
```js
const pyramid1 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';

        // 1. Print spaces
        for (let j = n - i - 1; j > 0; j--) {
            pattern += ' ';
        }
        // 1. Alternate way to print spaces:
        // pattern = ' '.repeat(n - i - 1);

        // 2. Print increasing numbers from 1 to i+1
        for (let j = 1; j <= i + 1; j++) {
            pattern += j;
        }

        // 3. Print decreasing numbers from i down to 1
        for (let j = i; j > 0; j--) {
            pattern += j;
        }

        // Print the final pattern for this row
        console.log(pattern);
    }
};

pyramid1(3);
```