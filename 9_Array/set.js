// Set is a collection of unique elements.
// remove the duplicate element from the array

let chars = ["A", "B", "A", "C", "B", "d", "e", "f", "e"];
let uniqueChars = [...new Set(chars)];
console.log("remove duplicate", uniqueChars);
