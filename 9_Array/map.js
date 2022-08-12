// map is a method is used get the value from the array.

let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

num2.map((n) => {
  console.log("map", n);
});

let newMap = new Map();
newMap.set("name", "pavi");
newMap.set("age", 25);
newMap.set("city", "chennai");

console.log(newMap);

for (let [k, v] of newMap) {
  console.log(k, ":", v);
}
