# Answers

<details>
  <summary> Write a function that takes in someone's name and returns a greeting.</summary>
  
  ## Named function
  ```javascript
  function sayName(name) {
    return `Hello, ${name}!`
  }
  ```
  
  ## Anonymous function
  ```javascript
  const sayName = function(name) {
    return `Hello, ${name}!`
  }
  ```
  
</details>

<details>
  <summary> Write a function that takes in the width and the height of a rectangle and returns the area of a rectangle.</summary>
  
  ## Named function
  ```javascript
  function findAreaOfRectangle(width, height) {
    return width * height
  }
  ```
  
  ## Anonymous function
  ```javascript
  const findAreaOfRectangle = function(width, height) {
    return width * height
  }
  ```
  
</details>

<details>
  <summary> Write a function that takes in the length of the side of a square and finds the area of a square.</summary>
  
  ## Named function
  ```javascript
  function findAreaOfSquare(length) {
    return findAreaOfRectangle(length, length)
  }
  ```
  
  ## Anonymous function
  ```javascript
  const findAreaOfSquare = function(length) {
    return findAreaOfRectangle(length, length)
  }
  ```
  
</details>
