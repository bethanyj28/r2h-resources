# Loops

## Resources

[Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops)

[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

## Practice problems

1. Write out everything the following loop will print.
   ```javascript
    for(let i = 5; i >= 0; i--) {
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
   ```javascript
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    printIt(matrix)
   ```
