let xyz = {
  name: "xyz",
  age: 23,
  course: "fs",
};
// console.log(xyz.name, xyz.age);
for (let x in xyz) {
  console.log(x, " : ", xyz[x]);
}
