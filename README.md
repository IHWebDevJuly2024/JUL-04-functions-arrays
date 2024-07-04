# Introduction to functions and arrays

Today we've learned about functions and arrays. We've learned how to create functions, how to pass arguments to functions, how to return values from functions, and how to use arrays to store multiple values.

## Functions

Remember that a function is a block of code that performs a specific task. In javaScript, we can create a function using the `function` keyword followed by the function name and a pair of parentheses.
If the function needs some data to work with, we can later pass that data to the function by placing parameters inside the parentheses.

```javascript
function greet(name) {
  // name is a parameter
  console.log(`Hello, ${name}!`);
}
```

To call a function, we simply write the function name followed by a pair of parentheses. If the function requires some data, we pass that data inside the parentheses. That's called an argument.

```javascript
greet("John"); // 'John' is an argument
```

## Arrays

We've seen multiple array methods that allow us to manipulate arrays.

- `push()` adds an element to the end of the array.
- `pop()` removes the last element from the array.
- `shift()` removes the first element from the array.
- `unshift()` adds an element to the beginning of the array.
- `splice()` removes elements from the array and optionally adds new elements in their place.

Check the portal and the examples for more information on how to use these methods.