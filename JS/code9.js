// for (let i = 0; i <= 12; i++) {
//   console.log(i);
// }

let i = 12;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// let

let a = [12, 3, 45, 6, 7, 89];
// console.log(a);
// of loop
for (let x of a) {
  console.log(x * 2);
}

let person = {
  name: "Ganesh dutt",
  age: 24,
  city: "Mathura",
};
// console.log(person);
// in loop
for (let x in person) {
  console.log(x, ":   ", person[x]);
}
