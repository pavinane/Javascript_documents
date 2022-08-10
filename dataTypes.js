// data types have two types: primitive and complex(reference)

// primitive data types: number, string, boolean, null, undefined, symbol
// complex data types: object, array, function, date, regexp, error

var num = 10;

var str = 'pavi"nane" \npavimegan';
console.log(num, "", str);

var notanumber = 10;
console.log(notanumber / "pavi");

// boolean : true or false

// undefined : value is not defined
let b;
console.log(b);

// symbol : unique value

let s1 = Symbol();
let s2 = Symbol();

if (s1 === s2) {
  console.log("same");
} else {
  console.log("not same");
}
