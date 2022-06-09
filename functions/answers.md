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

<details>
  <summary> Write a function that will take in a name, hobby, and favorite color and return an object with those properties. Bonus: What is a special name for this function?</summary>
  
  This is often called a _factory_ function.
  
  ```javascript
  const personFactory (name, hobby, favoriteColor) => {
    return {
      name: name,
      hobby: hobby,
      favoriteColor: favoriteColor
    }
  }
  
  const bethany = personFactory("Bethany", "Dogspotting", "blue")
  ```
  
</details>

<details>
  <summary> Add a method to the object you made above called introduction that will return an introduction using the person properties.</summary>
  
  ```javascript
  const personFactory (name, hobby, favoriteColor) => {
    return {
      name: name,
      hobby: hobby,
      favoriteColor: favoriteColor,
      introduction() {
        return `Hi, my name is ${this.name}, I like to ${this.hobby}, and my favorite color is ${this.favoriteColor}`
      }
    }
  }
  
  const bethany = personFactory("Bethany", "Dogspotting", "blue")
  console.log(bethany.introduction())
  ```
  
</details>
