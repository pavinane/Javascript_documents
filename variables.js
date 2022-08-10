//  difference between var ,let and const
//  var is function scoped
//  let is block scoped
//  const is block scoped

// 1. scope

//  var is global scoped it works on inside and outside of the scope
if (true) {
  var a = "var a variable";
  console.log("inside", a);
}
console.log("outside", a);

// let is block scoped it works on inside of the scope || const have same working condition
if (true) {
  let b = "let b variable";
  console.log(b);
}

// 2. variable declaration

// var is redeclaration value
var a1 = 21;
console.log(a1);

var a2 = 24;
console.log(a2);

// let and const  is not allow redeclare the value
let b1 = 21;
console.log(b1);

// 3. value assignment

// var and let can be reassigned a value

var a2 = 21;
console.log(a1);

a2 = 24;
console.log(a2);

// const is not allow reassign the value but if we get object in const then we can reassign the value
const b2 = 21;
console.log(a1);

// b2 = 24;
// console.log(a2);

const student = { name: "pavi", age: 25 };
student.name = "pavithran";
console.log(student);
