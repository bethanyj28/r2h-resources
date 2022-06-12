# Problem Solving

## Resources

[Fireship - Problem-Solving for Developers [Video]](https://www.youtube.com/watch?v=UFc-RPbq8kg)

## Problem solving steps
While going over these steps, we'll use the following example problem:
```
Given an array of numbers, return the sum of all the numbers multiplied by their index in the array.
Example input: [1, 2, 3, 4, 5]
Example output: 40
```

### Understand the problem
What are the inputs? What are the outputs? What needs to happen to translate the input to the output? Are there any special edge cases we need to think about?

The input for this problem will be an array of numbers. The output will be a single number. We will need to use the numbers we are given to generate a single number, so this tells me that we will need to have a variable to track these operations (i.e. `total`). Some edge case questions I can think about are - How large can these numbers get? Will there be negative numbers? How long can the array get?

We will assume that these numbers will be on the smaller side, all positive, and that the array will be at the longest 10 numbers. These are important questions to consider, because if we are handling very large numbers there are additional considerations we must consider.

### Break the problem into steps
There are a few strategies you can use here. I like to think about how my brain would work through this problem, how would I solve this if someone handed me a piece of paper with an array of numbers on it? I can think of something like -

Write the index over each number so it might look like:
```
  0 1 2 3 4
[ 1 2 3 4 5 ]
```
Write the multiplications:
```
0 * 1 = 0
1 * 2 = 2
2 * 3 = 6
3 * 4 = 12
4 * 5 = 20
```
Add the numbers together:
```
0 + 2 + 6 + 12 + 20 = 40
```

And there's our answer! So I look at those steps and try to translate them. I had to do an operation to each number in the array to get my answer - this tells me that I might need a __loop__. In the loop, I have access to the index and the number at that index, so I should have all the information I need to do the calculation at each step. I could add the numbers at the end, like I did with my brain, but in the actual code I would probably prefer a variable to track the current sum so I don't use too much space.

Another strategy is to pseudocode. Pseudocode will look different to everyone, to some people it looks like actual code. To me, I like to write comments that serve as a guide. This is probably how I'd go about pseudocoding:

Write out what I know about the problem:
```javascript
function solveIt(arr) {
  // create variable to track the total sum
  // loop through variables and do calculations (TODO)
  // return total sum
}
```
This solves the "sum all the numbers" part. Now we need to think about what transformations we need to do to the problems. I added `TODO` to remind myself to think about that part later.

Write solutions to subproblem:
```
function solveIt(arr) {
  // create variable to track the total sum
  // for i, num in arr
  //   multiply i * num
  //   add result to total
  // return total sum
}
```
I changed up the loop pseudocode so I knew what variables I had access to. Notice that this syntax isn't really JavaScript - I'm not worried about syntax here but more describing what kind of loop I need (a __for__ loop), what I'm iterating over (the __arr__ variable), and what variables that provides (__i__ and __num__).

(Optional) Optimize:
At this point, you should've been focused on the most obvious solution to the problem - after all an inefficient answer is better than none at all. Here would be a good point to recognize any way you can optimize it. This will become more important as you get more experience, but shouldn't be a major concern right now. If I had to optimize, I might think about how I can try to fan out the calculations and aggregate them at the end.

### Write the code!
Now you can use that pseudocode you wrote to actually write the code! Because I wrote mine as comments, I can use it as a template:

```
function solveIt(arr) {
  // create variable to track the total sum
  let total = 0
  
  // for i, num in arr
  //   multiply i * num
  //   add result to total
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let result = num * i
    total += result
  }
  
  // return total sum
  return total
}
```

And there you have some nice, shiny code!

### Test
Now we need to test mentally if it works. You should come up with some sample arrays that are easy to validate. Some I can think of are `[]`, `[0, 0, 0]`, `[1, 1, 1]`, `[2, 1, 0]`. Pretend you are the program and write out what happens at each step. 

## Practice problems
1. Write a function that takes in a number and prints each number from 1 to the inputted number. However, whenever the number is a multiple of 3 it should print `Fizz`, whenever it is a multiple of 5 it should print `Buzz`, and whenever it is a multiple of 3 and 5 it should print `FizzBuzz`.
```
Example input: 15
Example output (printed): 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, 12, 13, 14, FizzBuzz
```
2. Write a function that will take in the total cost of an item (in cents) and the amount of money given. The function should return the number of dollars, quarters, dimes, nickles, and pennies to give as change.
```
Example input: 150, 500
Example output: 3 dollars, 2 quarters
```
