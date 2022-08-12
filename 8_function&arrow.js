function greet() {
  return "Hello World";
}
greet();

console.log(greet());

// passing value

function passing(username) {
  return `hi my name is ${username}`;
}

let username = "pavinane";
let result = passing(username);

console.log(result);

// function expression

let add = function (a, b) {
  // a,b are parameters
  return a + b;
};

let sum = add(10, 20); // 10,20 are arguments
console.log(sum);

// arrow function

let arrow = (user) => {
  console.log(`hi my name is ${user}`);
  return true;
};
let user = "pavimegan";
console.log(arrow(user));

//  contructor function

function Alien(name, tech) {
  this.name = name;
  this.tech = tech;

  this.work = function () {
    console.log("constructor function");
  };
}

let alien1 = new Alien("pavi", "javascript");

alien1.name = "pavithranathan";

console.log(alien1);
alien1.work();
