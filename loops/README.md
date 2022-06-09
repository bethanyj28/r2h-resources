# Loops

## Resources

[Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops)

[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

## Practice problems

1. Write out everything the following loop will print. Bonus: what will it print if we change `break` to be `continue`?
   ```javascript
    for(let i = 5; i > 0; i--) {
      if (i % 3 == 0) {
        console.log("Red light")
        break
      }
      console.log("Green light")
    }
   ```
2. How many times will these loops print "Party Time 💃🕺" if `time = 7`? How about if `time = 11`?
   ```javascript
    while(time < 11){
      console.log("Party Time 💃🕺")
      time++
    }
   ```
   
   ```javascript
    do {
      console.log("Party Time 💃🕺")
      time++
    } while (time < 11)
    ```
3. You are given the following code. Write the function `printIt` which will print every number in the matrix (2D array).
   
   _Warning: this is a tricky one!_
   ```javascript
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    printIt(matrix)
   ```
4. Given an array of numbers and a target number, write a function that will return the two numbers that add up to the target number. You can assume that one and only one pair will add up to to the number.
   
   _Warning: this is another tricky one!_
   ```
   Example input: [2, 15, 4, 22], 6
   Example output: [2, 4]
   ```
   ```javascript
   function twoSum(arr, target) {
      // fill in the code here!
   }
   ```

Answers are [here](https://github.com/bethanyj28/r2h-resources/blob/main/loops/answers.md)!
