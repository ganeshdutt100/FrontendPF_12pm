let a1 = { a: 1, b: 2 };
let a2 = { b: 3, c: 4 };
let result = Object.assign(a1, a2);
console.log(result); // {a:1,b:3,c:4}

// Object.create();

let b1Prototype = {};

let b2 = Object.create(b1Prototype);
b2.name = "B2";
b2.age = "23";
for (let x in b2) {
  console.log(x + " : " + b2[x]);
}

// Object.freeze
const obj1 = {
  name: "obj1",
};
Object.freeze(obj1);

obj1.name = "obj2";
console.log(obj1);

// Object.isFrozen()
const num = { a: 1, b: 2, c: 3, d: 4, e: 56 };
Object.freeze(num);
num.a = 12;
console.log(num);

console.log(Object.isFrozen(num));

// Object.is()
console.log(Object.is(5, 5));
console.log(Object.is(null, null));
console.log(Object.is({}, {}));
console.log(Object.is([], []));

const num1 = { a: 1, b: 2, c: 3, d: 4, e: 56 };
console.log(Object.values(num1));
