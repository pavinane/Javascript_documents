// object is represent real entities in memory

let student = { userName: "pavi", age: 25, technology: "javascript" };

console.log("dot operator", student.userName);

console.log("bracket operator", student["technology"]);

let alien = {
  name: "pavi",
  tech: "javascript",
  laptop: {
    brand: "mac",
    colors: "silver",
    color: "silver",
    ram: 4,
  },
};

// console.log("complex object", alien.laptop?.color);

// delete alien.tech;

// console.log("complex object", alien);

//  for in loop is used to loop through the object

for (let key in alien) {
  console.log(key, alien[key]);
}
