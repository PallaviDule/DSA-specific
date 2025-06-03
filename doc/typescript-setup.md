# TypeScript Setup & Running Solutions

I want to add few typescript solutions as well.  
> **Note**: I don’t want TypeScript’s output to overwrite my existing solution.js files. To avoid this, I’ll configure the TypeScript compiler to output .js files in a dist directory.

### 1. Install TypeScript (as a dev dependency)

```bash
npm install typescript --save-dev
```

### 2. Initialize TypeScript Configuration
This will create a `tsconfig.json` file in your project root.
```bash
npx tsc --init
```

### 3. To **Run TypeScript Directly** (without generating JavaScript)

Use `ts-node`:

```bash
npx ts-node ./path-to-your-solution/solution.ts
```

This will run your TypeScript solution **without compiling to a `.js` file**, preserving your existing JavaScript solution files.

**Read further if you want your ts to be complied into js first and run that js file**. 

### 4. To **Compile TypeScript to JavaScript** (recommended for sharing or production)

If you want to generate `.js` files **without overwriting existing `solution.js`** (JavaScript) files:
- Update your `tsconfig.json`:
    ```json
    {
    "compilerOptions": {
        "outDir": "./dist",       // Compiled JS files go here
        "rootDir": "./",          // Source files
        "strict": true
    },
    "include": [
        "**/*.ts"
    ],
    "exclude": [
        "node_modules",
        "dist"
    ]
    }
    ```

- Compile all `.ts` files:
    ```bash
    npx tsc
    ```
- Run the compiled file using Node.js:
    ```bash
    node dist/59-spiral-matrix-ii/solution.js
    ```

### 5. Don’t Commit `dist` Folder

Add `dist/` to your `.gitignore` file:

```
dist/
```

## 🎯 Summary

* **Run directly**: `npx ts-node ./path-to-your-solution/solution.ts`
* **Compile & Run**:
  1. `npx tsc`
  2. `node dist/your-solution/solution.js`
