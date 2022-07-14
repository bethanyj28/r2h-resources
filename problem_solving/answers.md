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

## Change calculator

### Understand the problem

We have two numbers we need to leverage - theres the cost of a product and the amount of money that was given. Using these numbers we need to calculate the change that should be given. But we need to return these results in numbers of dollars/coins.

### Break down the problem into steps

Here are the subproblems we can see in this problem:

- Find the amount of change to be given
- Break down the change into coin values

Let's write some pseudocode:

**Note**: "division" will mean [integer division](https://mathworld.wolfram.com/IntegerDivision.html), which leads us to use `Math.floor` to accomplish

```javascript
function calculateChange(cost, given) {
    // subtract cost from given to determine change
    // divide change by 100 to find number of dollars
    // take modulus of change and 100 to find remaining change
    // divide change by 25 to find number of quarters
    // take modulus of change and 25 to find remaining change
    // divide change by 10 to find number of dimes
    // take modulus of change and 10 to find remaining change
    // divide change by 5 to find number of nickels
    // take modulus of change and 5 to find remaining change
    // pennies will be the remaining change
}
```

If I were to optimize, I would note that there's a lot of repitition and we can move some logic to another function.

### Write out the code
__Without optimization:__
```javascript
function calculateChange(cost, given) {
    // subtract cost from given to determine change
    let change = given - cost
    
    // divide change by 100 to find number of dollars
    const dollars = Math.floor(change / 100)
    // take modulus of change and 100 to find remaining change
    change = change % 100
    
    // divide change by 25 to find number of quarters
    const quarters = Math.floor(change / 25)
    // take modulus of change and 25 to find remaining change
    change = change % 25
    
    // divide change by 10 to find number of dimes
    const dimes = Math.floor(change / 10)
    // take modulus of change and 10 to find remaining change
    change = change % 10
    
    // divide change by 5 to find number of nickels
    const nickels = Math.floor(change / 5)
    // take modulus of change and 5 to find remaining change
    change = change % 5
    
    pennies = change
    
    console.log(`Dollars: ${dollars}\nQuarters: ${quarters}\nDimes: ${dimes}\nNickels: ${nickels}\nPennies: ${pennies}`)
}
```

__With optimization:__
```javascript
function findDenomination(denominationName, denomination, change) {
    const num = Math.floor(change / denomination)
    const remainingChange = change % denomination
    console.log(`${denominationName}: ${num}`)
    return remainingChange
}

function calculateChange(cost, given) {
    let change = given - cost
    
    const demoninationsMap = {"Dollars": 100, "Quarters": 25, "Dimes": 10, "Nickels": 5, "Pennies": 1}
     
    for (const denomination in denominationsMap) {
        change = findDenomination(denomination, denominationsMap[denomination], change)
    }
}
```
