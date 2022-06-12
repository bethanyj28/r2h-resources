# Answers

__Note__: Your answers might look different than mine and that is okay!! This is more to give you a feel for the problem solving steps and if you're on the right path.

## FizzBuzz

### Understand the problem
    
We are given a single number, but we will need to print all the numbers between 1 and that number. A question to ask might be whether we should expect any negative numbers or 0 to be passed in. We'll assume the answer is no for this example.
    
### Break the problem into steps
    
Let's look at the problem and break it down into subproblems:
    
- Looping through numbers 1 to target number
- Determining if number is divisible by 3 and/or 5
- Printing the result 
    
Let's write some pseudocode:  
```javascript
function fizzbuzz(number) {
  // for i = 1 through number
  //   if number is divisible by 3 and 5
  //     print "FizzBuzz"
  //   else if number is divisible by 3
  //     print "Fizz"
  //   else if number is divisible by 5
  //     print "Buzz"
  //   else
  //     print i
}    
```
    
If I were to optimize, I would probably try to reduce the number of if/else statements I have. Maybe by doing something like:
```javascript
function fizzbuzz(number) {
  // create variable to track output
  // if number is divisible by 3
  //   add "Fizz" to output
  // if number is divisible by 5
  //   add "Buzz" to output
  // print output if length > 0 else print number
}
```
    
### Write the code
__Without optimizations:__
```javascript
function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) { // for i = 1 through number
    if (i % 3 == 0 && i % 5 == 0) { //  if number is divisible by 3 and 5
      console.log("FizzBuzz")                         
    } else if (i % 3 == 0) { // else if number is divisible by 3
      console.log("Fizz")                         
    } else if (i % 5 == 0) { // else if number is divisible by 5
      console.log("Buzz")           
    } else {
      console.log(i)                         
    }
  }
}
```

__With optimizations:__
```javascript
function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) { // for i = 1 through number
    let output = ""
    if (i % 3 == 0) { // if the number is divisible by 3
      output += "Fizz"
    }
    if (i % 5 == 0) { // if the number is divisible by 5
      output += "Buzz"
    }
    
    console.log(output === "" ? i : output) // this is called a ternary operator
  }
}
```
