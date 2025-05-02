# 20. Valid Parentheses

## Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

A string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Input

- `1 <= s.length <= 10⁴`
- `s` consists of only the characters `'()[]{}'`

## Output

- Return `true` if the string is valid, otherwise `false`

## Examples

    Input: "()" 
    Output: true

    Input: "()[]{}"  
    Output: true

    Input: "(]"  
    Output: false

    Input: "([])"  
    Output: true

> **Try solving it on your own before looking at the approach and solution.**

## Approach

Instead of thinking of brute force or matching pairs manually, we ask:  
**What structure allows "Last opened must be closed first"?** → That’s a **Stack**.

**Thought process:**
- Every time we encounter an opening bracket, we **push** it.
- When we see a closing bracket, we check if it matches the top of the stack:
  - If it does, we **pop** the top.
  - If it doesn’t, the string is **invalid**.
- At the end, if the stack is empty, all brackets were matched correctly.

## Pseudocode

```
FUNCTION isValid(s):
    CREATE an empty stack
    CREATE a mapping of closing → opening brackets

    FOR each character in s:
        IF character is an opening bracket:
            PUSH it onto the stack
        ELSE IF character is a closing bracket:
            POP the top element
        ELSE stack is empty OR top of stack is not matching opening:
                RETURN false
            

    RETURN true if stack is empty, otherwise false
```

## Walkthrough Example

Input: `"([])"`  
Stack trace:

1. `'('` → push → stack: `['(']`  
2. `'['` → push → stack: `['(', '[']`  
3. `']'` → matches `'['` → pop → stack: `['(']`  
4. `')'` → matches `'('` → pop → stack: `[]`  

Stack is empty → ✅ valid

## Data Evolution

| Step | Char | Stack Before | Action                   | Stack After |
|------|------|--------------|---------------------------|--------------|
| 1    | (    | []           | Push                      | [ ( ]        |
| 2    | [    | [ ( ]        | Push                      | [ ( [ ]      |
| 3    | ]    | [ ( [ ]      | Match [ → Pop             | [ ( ]        |
| 4    | )    | [ ( ]        | Match ( → Pop             | []           |

## Time and Space Complexity

- **Time Complexity:** O(n) — one pass through the string
- **Space Complexity:** O(n) — in worst case all open brackets pushed to stack
