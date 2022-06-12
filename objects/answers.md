# Answers

<details>
  <summary>Write an object for a dog. Bonus: write 2 methods that a dog might have.</summary>
  
  ## An example of an answer:
  
  ```javascript
  const dog = {
    name: "George",
    breed: "Doberman",
    wantsFood: true,
    isDinner(time) {
      if (this.wantsFood) {
        return true
      } else if {time > 4} {
        return true
      }
      return true // always is dinner
    },
    speak() {
      return "woof"
    }
  }
  ```
  
</details>

<details>
  <summary>Find the bug in the following code. How can you fix it?</summary>
  
  The bug is that there is no `name` property on `plant` so `plant.name` is `undefined`. To fix it, we'd need to add the `name` field:
  
  ```javascript
  const plant = {
    type: "succulent",
    needsWater: true,
    needsSunlight: false,
    name: "Moe"
  }
  ```
  
</details>

<details>
  <summary>Is this valid code? Why or why not? What will the console.log()s print?</summary>
  
  This is valid code! Because objects in javascript are _mutable_, we can change and delete properties. The first `console.log()` would print:
  
  ```
  { type: 'succulent', needsWater: true, needsSunlight: false }
  ```
  
  and the second:
  
  ```
  { type: 'pothos', needsWater: true }
  ```
  
</details>

<details>
  <summary>How are methods different from functions? How are they similar?</summary>
  <br></br>
  It is kind of like how all squares are rectangles but not all rectangles are squares. A _method_ is a function! However, it is a function that must be called off of an object. When you use the `this` keyword in a method, it will refer to the object that it is a part of.
  
</details>

<details>
  <summary>What will the following console.log()s print?</summary>
  
  ```
  {
    songList: [
      'Bohemian Rhapsody',
      'Despacito',
      'Never Gonna Give You Up',
      'Friday'
    ],
    currentSong: 'Despacito',
    nextSong: ƒ nextSong() // don't worry if you didn't get this - it's not important!
  }
  ```
  
  ```
  {
    songList: [
      'Bohemian Rhapsody',
      'Despacito',
      'Never Gonna Give You Up',
      'Friday'
    ],
    currentSong: 'Never Gonna Give You Up',
    nextSong: ƒ nextSong() // don't worry if you didn't get this - it's not important!
  }
  ```
</details>
