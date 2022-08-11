// if else statement

let num1 = 4;
let num2 = 2;
let num3 = 6;

if (num2 > num1) {
  console.log("num1 is greater than num2");
} else if (num3 > num2) {
  console.log("num2 is greater than num3");
} else {
  console.log("num3 is greater");
}

let a = 9;
let result;

if (a % 2 == 0) {
  result = "a is even";
} else {
  result = "a is odd";
}

console.log(result);

// Switch statement

let day = "monday";
console.log(day);

switch (day) {
  case "monday":
    console.log("alarm on monday 4am");
    break;
  case "tuesday":
    console.log("alarm on tuesday 5am");
    break;
  case "wednesday":
    console.log("alarm on wednesday  6am");
    break;
  case "thursday":
    console.log("alarm on thursday 7am");
    break;
  case "friday":
    console.log("alarm on friday 7am");
    break;
  case "saturday":
    console.log("alarm on saturday 6am");
    break;
  case "sunday":
    console.log("alarm on sunday 5am");
}

let x = 20;
let y = 10;

let results = x + y;

console.log(" The addition of " + x + " and " + y + " is " + results);
console.log(`The addition of ${x} and ${y} is ${results}`);
