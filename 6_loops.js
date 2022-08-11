// for loop is a loop that repeats a block of code a number of times.
// initalization; condition; increment or decrement

let num = 5; //initialization

for (let i = 0; i < num; i++) {
  // all condition in one line
  console.log("hii", i);
}

// difference between while and do while loop

// 1. while loop is a loop that repeats a block of code while a condition is true.
// 2. check condition before executing the code

while (num > 0) {
  // condition
  console.log("hello", num);
  num--; // increment or decrement
}

let numb = 123456;

while (numb > 0) {
  console.log(numb % 10);
  numb = parseInt(numb / 10);
  console.log(numb);
}

// 1. execute the block and after that check the condition

let i = 1;

do {
  console.log("welcome", i);
  i++;
} while (i <= 5);
