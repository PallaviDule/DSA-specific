## Frequently used Math operations with basic examples

Solved Problems are [Here](../math/)

### 1. math.floor()
**Function**: Rounds a number down to the nearest integer.  
**Behavior**: For positive numbers, it effectively truncates the decimal part, returning the largest integer less than or equal to the input. For negative numbers, it returns the smallest integer less than or equal to the input.    
**Example**:
```js
math.floor(3.7) = 3
math.floor(-2.3) = -3
```
### 2. math.round()
**Function**: Rounds a number to the nearest integer.   
**Behavior**: Rounds up if the decimal part is 0.5 or greater, and rounds down otherwise.   
**Example**:
```js
math.round(3.7) = 4
math.round(2.4) = 2
math.round(-2.7) = -3
math.round(-3.5) = -4 
```
### 3. math.ceil()
**Function**: Rounds a number up to the nearest integer.    
**Behavior**: Always rounds up to the nearest integer, even if the decimal part is zero.    
**Example**:
```js
math.ceil(3.1) = 4
math.ceil(2) = 2
math.ceil(-2.9) = -2
math.ceil(-3) = -3
```
### In Summary:
Function | Behavior
--|--
math.floor() | Rounds down to the nearest integer
math.round() | Rounds to the nearest integer
math.ceil()  | Rounds up to the nearest integer