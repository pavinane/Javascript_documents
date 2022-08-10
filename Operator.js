// Arithmatic Operators
let num1 = 4;
let num2 = 2;

console.log("addition", num1 + num2);
console.log("subtraction", num1 - num2);
console.log("multiplication", num1 * num2);
console.log("division", num1 / num2);
console.log("remainder", num1 % num2);

// Assignment Operators

// num1 = num1 + 2; //replace
num1 += 2; //addition
console.log("shortHandOperators", num1);

++num1;
console.log("pre increment", num1);

num1++;
console.log("post increment", num1);

// Relational Operators

let a = 10;
let b = 20;
let c = "20";
let d = 10;
let data = a < b;
console.log("less than", data);

// equality operators
let data2 = a == d;
console.log("equal to", data2);

// strict equality operators
let data3 = b === b;
console.log("strict equal to", data3);
